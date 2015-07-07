Tinytest.add('Slugify - conversions', function(test) {
    var conversions = {
        ' a  b ': 'a-b',
        'Hello': 'hello',
        'Hello World': 'hello-world',
        'Привет мир': 'privet-mir',
        'Привіт світ': 'privit-svit',
        // 'Hello: World': 'hello-world',
        // 'H+e#l1l--o/W§o r.l:d)': 'h-e-l1l-o-w-o-r-l-d',
        ': World': 'world',
        'Hello World!': 'hello-world',
        'Ä ä Ö ö Ü ü ß': 'a-a-o-o-u-u-ss',
        'Á À á à É È é è Ó Ò ó ò Ñ ñ Ú Ù ú ù': 'a-a-a-a-e-e-e-e-o-o-o-o-n-n-u-u-u-u',
        'Â â Ê ê Ô ô Û û': 'a-a-e-e-o-o-u-u',
        'Â â Ê ê Ô ô Û 1': 'a-a-e-e-o-o-u-1',
        '°¹²³@': '0123at',
        'Mórë thån wørds': 'more-than-words',
        'Блоґ їжачка': 'blog-yizhachka',
        'фильм': 'film',
        'драма': 'drama',
        'ελληνικά': 'ellhnika',
        // 'C’est du français !': 'c-est-du-francais',
        // 'هذه هي اللغة العربية': 'hthh-hy-llgh-laarby',
        // 'مرحبا العالم': 'mrhb-laa-lm',
        'Één jaar': 'een-jaar',
        // 'tiếng việt rất khó': 'tieng-viet-rat-kho',
        // 'Nguyễn Đăng Khoa': 'nguyen-dang-khoa'
    }

    _.each(conversions, function (slug, input) {
        test.equal(slugify(input), slug);
    });
});

Tinytest.add('Slugify - not a string', function(test) {
    var slugifyToEmptyString = function(arg) {
        test.equal(slugify(arg), '');
    };
    _.each([true, false, null, undefined, [], [[]], {}], slugifyToEmptyString);
});
