const NEW_CARD = {
    artist: 'Grafit Studio',
    cardType: 'Unit',
    categories: ['Human', 'Warrior'],
    categoryIds: ['card_category_78', 'card_category_86'],
    faction: 'Skellige',
    flavor: {
        'de-DE':
            'Betrauern wir nicht die Toten, trinken wir lieber zu ihrem Ged\u00e4chtnis!',
        'en-US': "Instead of mournin' the fallen, let's drink to their memory!",
        'es-ES':
            '\u00a1En lugar de llorar a los ca\u00eddos, brindemos por su memoria!',
        'es-MX':
            '\u00a1En lugar de llorar a los ca\u00eddos, brindemos por su memoria!',
        'fr-FR':
            'Au lieu de pleurer les d\u00e9funts, buvons \u00e0 leur m\u00e9moire\u00a0!',
        'it-IT': 'Invece di piangere i caduti, beviamo alla loro memoria!',
        'ja-JP':
            '\u5012\u308c\u305f\u8005\u305f\u3061\u3092\u60bc\u3080\u3088\u308a\u3001\u3042\u3044\u3064\u3089\u306e\u601d\u3044\u51fa\u306b\u4e7e\u676f\u3057\u3088\u3046\uff01',
        'ko-KR':
            '\ub5a0\ub09c \uc790\ub4e4\uc744 \uc704\ud574 \uc560\ub3c4\ud558\ub294 \ub300\uc2e0 \uadf8\ub4e4\uc744 \uae30\ub9ac\uba70 \uc220\uc774\ub098 \ud55c\uc794\ud558\uc790\uace0!',
        'pl-PL':
            'Zamiast u\u017cala\u0107 si\u0119 nad poleg\u0142ymi, lepiej wypijmy za ich pami\u0119\u0107!',
        'pt-BR':
            'Em vez de lamentar aqueles que perdemos, vamos beber em homenagem a eles!',
        'ru-RU':
            '\u0412\u043c\u0435\u0441\u0442\u043e \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u0441\u043a\u043e\u0440\u0431\u0435\u0442\u044c \u043d\u0430\u0434 \u043f\u0430\u0432\u0448\u0438\u043c\u0438, \u043b\u0443\u0447\u0448\u0435 \u0432\u044b\u043f\u044c\u0435\u043c \u0432 \u043f\u0430\u043c\u044f\u0442\u044c \u043e \u043d\u0438\u0445!',
        'zh-CN':
            '\u201c\u5225\u4e3a\u6b7b\u8005\u54ed\u6ce3\uff0c\u656c\u4ed6\u4eec\u4e00\u676f\u5427\uff01\u201d',
        'zh-TW':
            '\u5225\u70ba\u4ea1\u8005\u54ed\u6ce3\uff0c\u656c\u4ed6\u5011\u4e00\u676f\u5427\uff01'
    },
    info: {
        'de-DE':
            'Einsatz, Nahkampf: Verbanne eine Einheit auf deinem Friedhof und f\u00fcge einer gegnerischen Einheit Schaden in H\u00f6he ihrer St\u00e4rke zu.\n',
        'en-US':
            'Deploy, Melee: Banish a unit in your graveyard and damage an enemy by its power.\n',
        'es-ES':
            'Despliegue, cuerpo a cuerpo: destierra a una unidad de tu cementerio e inflige a un enemigo un da\u00f1o igual a su poder.\n',
        'es-MX':
            'Despliegue, mel\u00e9: destierra a una unidad en tu cementerio e inflige da\u00f1o a un enemigo seg\u00fan su poder.\n',
        'fr-FR':
            "D\u00e9ploiement, Combat rapproch\u00e9\u00a0: bannissez une unit\u00e9 de votre cimeti\u00e8re et infligez \u00e0 un ennemi un nombre de points de d\u00e9g\u00e2ts \u00e9quivalant \u00e0 la force de l'unit\u00e9 bannie.\n",
        'it-IT':
            "Schieramento, Prima fila: bandisce un'unit\u00e0 nel tuo cimitero e danneggia un nemico di un valore pari alla relativa forza.\n",
        'ja-JP':
            '\u914d\u5099\uff5c\u8fd1\u63a5\uff1a\u81ea\u8ecd\u5893\u5730\u306b\u3042\u308b\u30e6\u30cb\u30c3\u30c81\u4f53\u3092\u6d88\u6ec5\u3055\u305b\u3001\u305d\u306e\u6226\u529b\u5024\u306b\u7b49\u3057\u3044\u30c0\u30e1\u30fc\u30b8\u3092\u6575\u8ecd\u30e6\u30cb\u30c3\u30c81\u4f53\u306b\u4e0e\u3048\u308b\u3002\n',
        'ko-KR':
            '\ubc30\uce58, \uadfc\uc811: \ub2f9\uc2e0\uc758 \ubb34\ub364\uc5d0\uc11c \uc720\ub2db \ud558\ub098\ub97c \ucd94\ubc29\ud558\uace0 \uc801 \ud558\ub098\uc5d0\uac8c \ucd94\ubc29\ud55c \uc720\ub2db\uc758 \uc804\ub825\ub9cc\ud07c \ud53c\ud574\ub97c \uc900\ub2e4.\n',
        'pl-PL':
            'Rozmieszczenie, bliskie starcie: Wygnaj jednostk\u0119 ze swojego cmentarza i zadaj wrogowi obra\u017cenia r\u00f3wne jej sile.\n',
        'pt-BR':
            'Mobiliza\u00e7\u00e3o, Corpo a corpo: bane uma unidade na sua pilha de descarte e causa dano a um inimigo equivalente ao poder dela.\n',
        'ru-RU':
            '\u0420\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u0435, \u0440\u0443\u043a\u043e\u043f\u0430\u0448\u043d\u044b\u0439 \u0440\u044f\u0434: \u0443\u0434\u0430\u043b\u0438\u0442\u0435 \u043e\u0442\u0440\u044f\u0434 \u0438\u0437 \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u0431\u0440\u043e\u0441\u0430 \u0438 \u043d\u0430\u043d\u0435\u0441\u0438\u0442\u0435 \u0432\u0440\u0430\u0436\u0435\u0441\u043a\u043e\u043c\u0443 \u043e\u0442\u0440\u044f\u0434\u0443 \u0443\u0440\u043e\u043d, \u0440\u0430\u0432\u043d\u044b\u0439 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e \u0441\u0438\u043b\u044b \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u043e\u0442\u0440\u044f\u0434\u0430.\n',
        'zh-CN':
            '\u90e8\u7f72\uff0c\u8fd1\u6218\uff1a\u653e\u9010\u5df1\u65b9\u5893\u573a 1 \u4e2a\u5355\u4f4d\uff0c\u5e76\u5bf9 1 \u540d\u654c\u519b\u5355\u4f4d\u9020\u6210\u88ab\u653e\u9010\u5355\u4f4d\u6218\u529b\u7684\u4f24\u5bb3\u3002\n',
        'zh-TW':
            '\u90e8\u7f72\u3001\u8fd1\u6230\uff1a\u9a45\u9010\u6211\u65b9\u5893\u5730 1 \u5f35\u55ae\u4f4d\u724c\uff0c\u4e26\u5c0d 1 \u5f35\u6575\u8ecd\u9020\u6210\u7b49\u540c\u8a72\u724c\u6230\u529b\u503c\u7684\u50b7\u5bb3\u3002\n'
    },
    infoRaw: {
        'de-DE':
            '<keyword=deploy>Einsatz</keyword>, <keyword=melee>Nahkampf</keyword>: <keyword=banish>Verbanne</keyword> eine Einheit auf deinem Friedhof und f\u00fcge einer gegnerischen Einheit Schaden in H\u00f6he ihrer St\u00e4rke zu.\n',
        'en-US':
            '<keyword=deploy>Deploy</keyword>, <keyword=melee>Melee</keyword>: <keyword=banish>Banish</keyword> a unit in your graveyard and damage an enemy by its power.\n',
        'es-ES':
            '<keyword=deploy>Despliegue</keyword>, <keyword=melee>cuerpo a cuerpo</keyword>: <keyword=banish>destierra</keyword> a una unidad de tu cementerio e inflige a un enemigo un da\u00f1o igual a su poder.\n',
        'es-MX':
            '<keyword=deploy>Despliegue</keyword>, <keyword=melee>mel\u00e9</keyword>: <keyword=banish>destierra</keyword> a una unidad en tu cementerio e inflige da\u00f1o a un enemigo seg\u00fan su poder.\n',
        'fr-FR':
            "<keyword=deploy>D\u00e9ploiement</keyword>, <keyword=melee>Combat rapproch\u00e9</keyword>\u00a0: <keyword=banish>bannissez</keyword> une unit\u00e9 de votre cimeti\u00e8re et infligez \u00e0 un ennemi un nombre de points de d\u00e9g\u00e2ts \u00e9quivalant \u00e0 la force de l'unit\u00e9 bannie.\n",
        'it-IT':
            "<keyword=deploy>Schieramento</keyword>, <keyword=melee>Prima fila</keyword>: <keyword=banish>bandisce</keyword> un'unit\u00e0 nel tuo cimitero e danneggia un nemico di un valore pari alla relativa forza.\n",
        'ja-JP':
            '<keyword=deploy>\u914d\u5099</keyword>\uff5c<keyword=melee>\u8fd1\u63a5</keyword>\uff1a\u81ea\u8ecd\u5893\u5730\u306b\u3042\u308b\u30e6\u30cb\u30c3\u30c81\u4f53\u3092<keyword=banish>\u6d88\u6ec5</keyword>\u3055\u305b\u3001\u305d\u306e\u6226\u529b\u5024\u306b\u7b49\u3057\u3044\u30c0\u30e1\u30fc\u30b8\u3092\u6575\u8ecd\u30e6\u30cb\u30c3\u30c81\u4f53\u306b\u4e0e\u3048\u308b\u3002\n',
        'ko-KR':
            '<keyword=deploy>\ubc30\uce58</keyword>, <keyword=melee>\uadfc\uc811</keyword>: \ub2f9\uc2e0\uc758 \ubb34\ub364\uc5d0\uc11c \uc720\ub2db \ud558\ub098\ub97c <keyword=banish>\ucd94\ubc29</keyword>\ud558\uace0 \uc801 \ud558\ub098\uc5d0\uac8c \ucd94\ubc29\ud55c \uc720\ub2db\uc758 \uc804\ub825\ub9cc\ud07c \ud53c\ud574\ub97c \uc900\ub2e4.\n',
        'pl-PL':
            '<keyword=deploy>Rozmieszczenie</keyword>, <keyword=melee>bliskie starcie</keyword>: <keyword=banish>Wygnaj</keyword> jednostk\u0119 ze swojego cmentarza i zadaj wrogowi obra\u017cenia r\u00f3wne jej sile.\n',
        'pt-BR':
            '<keyword=deploy>Mobiliza\u00e7\u00e3o</keyword>, <keyword=melee>Corpo a corpo</keyword>: <keyword=banish>bane</keyword> uma unidade na sua pilha de descarte e causa dano a um inimigo equivalente ao poder dela.\n',
        'ru-RU':
            '<keyword=deploy>\u0420\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u0435</keyword>, <keyword=melee>\u0440\u0443\u043a\u043e\u043f\u0430\u0448\u043d\u044b\u0439 \u0440\u044f\u0434</keyword>: <keyword=banish>\u0443\u0434\u0430\u043b\u0438\u0442\u0435</keyword> \u043e\u0442\u0440\u044f\u0434 \u0438\u0437 \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u0431\u0440\u043e\u0441\u0430 \u0438 \u043d\u0430\u043d\u0435\u0441\u0438\u0442\u0435 \u0432\u0440\u0430\u0436\u0435\u0441\u043a\u043e\u043c\u0443 \u043e\u0442\u0440\u044f\u0434\u0443 \u0443\u0440\u043e\u043d, \u0440\u0430\u0432\u043d\u044b\u0439 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e \u0441\u0438\u043b\u044b \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u043e\u0442\u0440\u044f\u0434\u0430.\n',
        'zh-CN':
            '<keyword=deploy>\u90e8\u7f72</keyword>\uff0c<keyword=melee>\u8fd1\u6218\uff1a</keyword><keyword=banish>\u653e\u9010</keyword>\u5df1\u65b9\u5893\u573a 1 \u4e2a\u5355\u4f4d\uff0c\u5e76\u5bf9 1 \u540d\u654c\u519b\u5355\u4f4d\u9020\u6210\u88ab\u653e\u9010\u5355\u4f4d\u6218\u529b\u7684\u4f24\u5bb3\u3002\n',
        'zh-TW':
            '<keyword=deploy>\u90e8\u7f72</keyword>\u3001<keyword=melee>\u8fd1\u6230</keyword>\uff1a<keyword=banish>\u9a45\u9010</keyword>\u6211\u65b9\u5893\u5730 1 \u5f35\u55ae\u4f4d\u724c\uff0c\u4e26\u5c0d 1 \u5f35\u6575\u8ecd\u9020\u6210\u7b49\u540c\u8a72\u724c\u6230\u529b\u503c\u7684\u50b7\u5bb3\u3002\n'
    },
    ingameId: '152101',
    keywords: ['deploy', 'melee', 'banish'],
    loyalties: ['Loyal'],
    name: {
        'de-DE': 'Hjalmar an Craite',
        'en-US': 'Hjalmar an Craite',
        'es-ES': 'Hjalmar an Craite',
        'es-MX': 'Hjalmar An Craite',
        'fr-FR': 'Hjalmar an Craite',
        'it-IT': 'Hjalmar an Craite',
        'ja-JP':
            '\u30e4\u30eb\u30de\u30fc\u30eb\u30fb\u30a2\u30f3\u30fb\u30af\u30e9\u30a4\u30c8',
        'ko-KR': '\uc584\ub9c8\ub974 \uc548 \ud06c\ub77c\uc774\ud2b8',
        'pl-PL': 'Hjalmar an Craite',
        'pt-BR': 'Hjalmar an Craite',
        'ru-RU':
            '\u0425\u044c\u044f\u043b\u043c\u0430\u0440 \u0430\u043d \u041a\u0440\u0430\u0439\u0442',
        'zh-CN': '\u54c8\u5c14\u739b\u00b7\u594e\u7279',
        'zh-TW': '\u54c8\u723e\u746a\uff0e\u594e\u7279'
    },
    positions: ['Melee', 'Ranged', 'Siege'],
    provision: 9,
    related: [],
    released: true,
    strength: 3,
    type: 'Gold',
    variations: {
        '15210100': {
            art: {
                high:
                    'https://firebasestorage.googleapis.com/v0/b/gwent-9e62a.appspot.com/o/images%2Fv1.0.0.15-522%2F152101%2F15210100%2Fhigh.png?alt=media',
                ingameArtId: '1233',
                low:
                    'https://firebasestorage.googleapis.com/v0/b/gwent-9e62a.appspot.com/o/images%2Fv1.0.0.15-522%2F152101%2F15210100%2Flow.png?alt=media',
                medium:
                    'https://firebasestorage.googleapis.com/v0/b/gwent-9e62a.appspot.com/o/images%2Fv1.0.0.15-522%2F152101%2F15210100%2Fmedium.png?alt=media',
                original:
                    'https://firebasestorage.googleapis.com/v0/b/gwent-9e62a.appspot.com/o/images%2Fv1.0.0.15-522%2F152101%2F15210100%2Foriginal.png?alt=media',
                thumbnail:
                    'https://firebasestorage.googleapis.com/v0/b/gwent-9e62a.appspot.com/o/images%2Fv1.0.0.15-522%2F152101%2F15210100%2Fthumbnail.png?alt=media'
            },
            availability: 'BaseSet',
            collectible: true,
            craft: {
                premium: 1600,
                standard: 800,
                upgrade: 400
            },
            mill: {
                premium: 200,
                standard: 200,
                upgrade: 120
            },
            rarity: 'Legendary',
            variationId: '15210100'
        }
    }
};

export default NEW_CARD;
