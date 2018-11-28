// flow-typed signature: ab419d95e5e6a32f2d851f01e0f243d7
// flow-typed version: d23eff98ca/pluralize_v6.x.x/flow_>=v0.25.x

declare module "pluralize" {
  declare module.exports: {
    (word: string, count?: number, inclusive?: boolean): string,

    addIrregularRule(single: string, plural: string): void,
    addPluralRule(rule: string | RegExp, replacement: string): void,
    addSingularRule(rule: string | RegExp, replacement: string): void,
    addUncountableRule(ord: string | RegExp): void,
    plural(word: string): string,
    singular(word: string): string,
    isPlural(word: string): boolean,
    isSingular(word: string): boolean
  };
}
