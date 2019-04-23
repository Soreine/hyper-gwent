/* global window */

// Implementation based on https://github.com/e-sites/perimeter.js

/*
 *  Project: Perimeter.js
 *  Creates an invisible perimeter around a target element and monitors mouse breaches.
 *  When a breach is detected the corresponding callback will be invoked.
 *  This gives the opportunity to e.g. lazy-load scripts, show a tooltip or whatnot.
 *
 *  @author  : Boye Oomens <github@e-sites.nl>
 *  @version : 0.3.0
 *  @license : MIT
 *  @see     : http://github.e-sites.nl/perimeter.js/
 */

const win = window;

const doc = window.document;

const docElem = doc.documentElement;

const docBody = doc.body;

const instances = [];

function addEventListener(obj, evt, fn) {
    obj.addEventListener(evt, fn, false);
}

function removeEventListener(obj, evt, fn) {
    obj.removeEventListener(evt, fn, false);
}

/**
 * Global Perimeter constructor
 *
 */
function Perimeter(options) {
    // We need at least a target element and an outline to work with
    if (!options || !options.target || !options.outline) {
        throw new Error('Missing target');
    }

    /**
     * Perimeter options
     */
    this.options = options;

    /**
     * The amount of perimeter breaches
     */
    this.breaches = [];

    /**
     * Whether the perimeter has been breached
     */
    this.alarm = false;

    /**
     * Outline around the target element
     * This can either be an array with top/right/bottom/left dimensions
     * or just one number which acts as shorthand for all directions
     *
     * @type {Number|Array}
     */
    this.outline = this.formatOutline(options.outline);

    /**
     * Target element
     */
    this.target =
        typeof options.target === 'string'
            ? doc.getElementById(options.target)
            : options.target;

    /**
     * Boundary used for debugging purposes
     */
    this.boundary = null;

    /**
     * Bounding rectangles
     *
     * @type {Object} ClientRect
     */
    this.rects = this.getClientRect(this.target);

    /**
     * Breach monitor
     * @type {Monitor}
     */
    this.monitor = new this.Monitor(this);

    this.init(options);
}

/**
 * Small helper to fetch cross-browser scroll values
 *
 * @return {Object} top and left scroll pos
 */
Perimeter.prototype.getScrollPos = function getScrollPos() {
    return {
        top: docElem.scrollTop || docBody.scrollTop,
        left: docElem.scrollLeft || docBody.scrollLeft
    };
};

/**
 * Returns the given element dimensions and offset
 * based on getBoundingClientRect including document scroll offset
 *
 * @param {HTMLElement} elem target element
 * @return {Object}
 */
Perimeter.prototype.getClientRect = function getClientRect(elem) {
    const scrollPos = this.getScrollPos();

    if (typeof elem.getBoundingClientRect === 'undefined') {
        throw new Error(
            'Perimeter.js detected that your browser does not support getBoundingClientRect'
        );
    }

    const box = elem.getBoundingClientRect();

    return {
        width: box.width || elem.offsetWidth,
        height: box.height || elem.offsetHeight,
        top: box.top + scrollPos.top - docElem.clientTop,
        left: box.left + scrollPos.left - docElem.clientLeft
    };
};

/**
 * When triggered via onresize it will recalculate the clientRect and reflow all existing boundaries
 */
Perimeter.prototype.recalculate = function recalculate() {
    let inst;
    let i;
    if (this instanceof Perimeter) {
        this.outline = this.formatOutline(this.outline);
        if (this.options.debug && this.boundary) {
            this.boundary.reflow();
        }
    } else {
        i = instances.length;
        // eslint-disable-next-line
        while (i--) {
            inst = instances[i];
            inst.rects = inst.getClientRect(inst.target);
            if (inst.options.debug && inst.boundary) {
                inst.boundary.reflow();
            }
        }
    }
};

/**
 * Triggers the corresponding callback of the given event type
 *
 * @param {String} event event type
 * @return {Boolean}
 */
Perimeter.prototype.trigger = function trigger(event) {
    const events = {
        breach: this.options.onBreach,
        leave: this.options.onLeave
    };

    if (
        Object.prototype.hasOwnProperty.call(events, event) &&
        events[event] instanceof Function
    ) {
        events[event].apply(this, []);
    }
};

/**
 * Formats the given outline, this can either be a number or an array with numbers
 * When the numbers are passed as string they will be converted to numbers
 * Also,
 *
 * @param  {Array|Number} outline
 * @return {Array}
 */
Perimeter.prototype.formatOutline = function formatOutline(outline) {
    const arr = [];

    let i = 0;

    while (i < 4) {
        if (!Number.isNaN(outline)) {
            arr.push(parseInt(outline, 10));
        } else {
            arr.push(!outline[i] ? 0 : parseInt(outline[i], 10));
        }
        i += 1;
    }

    return arr;
};

/**
 * Main init method that kickstarts everything
 */
Perimeter.prototype.init = function init(options) {
    // Cancel the process when the target DOM element is not present
    if (!this.target) {
        return;
    }

    // Keep track of all instances
    instances.push(this);

    // Create and show boundary when debug option is passed
    if (options.debug && typeof this.Boundary !== 'undefined') {
        this.boundary = new this.Boundary(this);
    }

    addEventListener(options.monitor || doc, 'mousemove', this.monitor.observe);
    addEventListener(win, 'resize', this.recalculate);

    // Due to different browser behavior when it comes to triggering the mousemove event
    // while scrolling using the mousehweel, we need to listen to this event as well
    addEventListener(doc, 'DOMMouseScroll', this.monitor.observe);
    addEventListener(doc, 'mousewheel', this.monitor.observe);

    // teardown
    this.destroy = () => {
        removeEventListener(
            options.monitor || doc,
            'mousemove',
            this.monitor.observe
        );
        removeEventListener(win, 'resize', this.recalculate);
        removeEventListener(doc, 'DOMMouseScroll', this.monitor.observe);
        removeEventListener(doc, 'mousewheel', this.monitor.observe);
    };
};

Perimeter.prototype.Monitor = function Monitor(perimeter) {
    const monitor = this;

    /**
     * Reference to the event object
     *
     * @type {Object}
     */
    this.event = null;

    /**
     * Detects a breach and when the cursor leaves the perimeter
     *
     * @param {String} state either breach or leave
     */
    this.detect = function detect(state) {
        const { outline } = perimeter;

        const posX = this.event.clientX;

        const posY = this.event.clientY;

        const scrollPos = perimeter.getScrollPos();

        const maxTop = parseInt(
            perimeter.rects.top - scrollPos.top - outline[0],
            10
        );

        const maxLeft = parseInt(
            perimeter.rects.left - scrollPos.left - outline[3],
            10
        );

        switch (state) {
            case 'breach':
                if (
                    posY >= maxTop &&
                    posY <
                        maxTop +
                            perimeter.rects.height +
                            (outline[0] + outline[2]) &&
                    posX >= maxLeft &&
                    posX <
                        maxLeft +
                            perimeter.rects.width +
                            (outline[1] + outline[3])
                ) {
                    perimeter.breaches.push([posX, posY]);
                    perimeter.trigger('breach');
                    perimeter.alarm = true;
                }
                break;
            case 'leave':
                if (
                    posY < maxTop ||
                    posY >
                        maxTop +
                            perimeter.rects.height +
                            (outline[0] + outline[2]) ||
                    posX < maxLeft ||
                    posX >
                        maxLeft +
                            perimeter.rects.width +
                            (outline[1] + outline[3])
                ) {
                    perimeter.trigger('leave');
                    perimeter.alarm = false;
                }
                break;
            default:
                break;
        }
    };

    /**
     * Main observer that invokes the detection
     *
     * @param {Object} e Event object
     */
    this.observe = function observe(e) {
        monitor.event = e || window.event;
        perimeter.monitor.detect(perimeter.alarm ? 'leave' : 'breach');
    };

    return this.event;
};

Perimeter.prototype.Boundary = function Boundary(perimeter) {
    /**
     * Boundary division element
     *
     * @type {HTMLDivElement}
     */
    this.elem = null;

    /**
     * Recalculates rectangle offset and dimensions based on new outline
     *
     * @return {Object} newRect
     * @private
     */
    function recalculateRect(target, outline) {
        const rects = perimeter.rects || perimeter.getClientRect(target);

        const newRect = {};

        newRect.width = rects.width + (outline[1] + outline[3]);
        newRect.height = rects.height + (outline[0] + outline[2]);
        newRect.top = rects.top - outline[0];
        newRect.left = rects.left - outline[3];

        return newRect;
    }

    /**
     * Creates the division and injects it into the DOM
     *
     * @return {Object}
     */
    this.create = function create() {
        this.elem = doc.createElement('div');
        this.elem.className = 'boundary';

        this.reflow(perimeter.target, perimeter.outline);

        doc.body.appendChild(this.elem);

        return this;
    };

    /**
     * Repositions the boundary element
     *
     * @param  {Object} target
     * @param  {Number} outline
     * @return {Object}
     */
    this.reflow = function reflow(target, pOutline) {
        const box = target || perimeter.target;

        const outline = perimeter.formatOutline(pOutline || perimeter.outline);
        const rect = recalculateRect(box, outline);

        this.elem.style.top = `${rect.top}px`;
        this.elem.style.left = `${rect.left}px`;
        this.elem.style.width = `${rect.width}px`;
        this.elem.style.height = `${rect.height}px`;

        return this;
    };

    return this.create();
};

export default Perimeter;
