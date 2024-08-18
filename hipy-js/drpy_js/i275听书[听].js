var rule = {
    类型: '听书',
    title: 'i275听书',
    host: 'https://m.ting275.com',
    // url: '/category/fyclass/2.html?page=fypage',
    url: '/category/fyclass/fyfilter/fypage.html',
    filterable: 1,//是否启用分类筛选,
    filter_url: '{{fl.by}}',
    filter: {
        "6": [{"key": "by", "name": "排序", "value": [{"n": "更新", "v": "2"}, {"n": "人气", "v": "3"}]}],
        "7": [{"key": "by", "name": "排序", "value": [{"n": "更新", "v": "2"}, {"n": "人气", "v": "3"}]}],
        "8": [{"key": "by", "name": "排序", "value": [{"n": "更新", "v": "2"}, {"n": "人气", "v": "3"}]}],
        "9": [{"key": "by", "name": "排序", "value": [{"n": "更新", "v": "2"}, {"n": "人气", "v": "3"}]}],
        "10": [{"key": "by", "name": "排序", "value": [{"n": "更新", "v": "2"}, {"n": "人气", "v": "3"}]}],
        "11": [{"key": "by", "name": "排序", "value": [{"n": "更新", "v": "2"}, {"n": "人气", "v": "3"}]}],
        "12": [{"key": "by", "name": "排序", "value": [{"n": "更新", "v": "2"}, {"n": "人气", "v": "3"}]}],
        "13": [{"key": "by", "name": "排序", "value": [{"n": "更新", "v": "2"}, {"n": "人气", "v": "3"}]}],
        "14": [{"key": "by", "name": "排序", "value": [{"n": "更新", "v": "2"}, {"n": "人气", "v": "3"}]}],
        "15": [{"key": "by", "name": "排序", "value": [{"n": "更新", "v": "2"}, {"n": "人气", "v": "3"}]}],
        "49": [{"key": "by", "name": "排序", "value": [{"n": "更新", "v": "2"}, {"n": "人气", "v": "3"}]}],
        "50": [{"key": "by", "name": "排序", "value": [{"n": "更新", "v": "2"}, {"n": "人气", "v": "3"}]}],
        "51": [{"key": "by", "name": "排序", "value": [{"n": "更新", "v": "2"}, {"n": "人气", "v": "3"}]}]
    },
    filter_def: {
        6: {by: '2'},
        7: {by: '2'},
        8: {by: '2'},
        9: {by: '2'},
        10: {by: '2'},
        11: {by: '2'},
        12: {by: '2'},
        13: {by: '2'},
        14: {by: '2'},
        15: {by: '2'},
        49: {by: '2'},
        50: {by: '2'},
        51: {by: '2'}
    },
    searchUrl: '/pc/index/search.html?keyword=**&page=fypage',
    searchable: 2,
    quickSearch: 0,
    headers: {'User-Agent': 'MOBILE_UA'},
    class_name: '玄幻奇幻&都市言情&宫斗女频&官场商战&武侠仙侠&刑侦推理&探险科幻&重生穿越&恐怖惊悚&文学历史&两性情感&网游竞技&相声评书',
    class_url: '6&7&8&9&10&11&12&13&14&15&49&50&51',
    play_parse: true,
    lazy: '',
    limit: 6,
    推荐: '*',
    // 一级:'.list-wrapper&&.item-link;h2--span&&Text;img&&data-cfsrc;.status&&Text;a&&href',
    一级: '.list-wrapper&&.item-link;h2--span&&Text;img&&src;.status&&Text;a&&href',
    二级: {
        "title": ".book-title&&Text;.text:eq(0)&&Text",
        // "img":".img&&data-cfsrc",
        "img": ".img&&src",
        "desc": ".update-time&&Text;;;.text:eq(1)&&Text;.text:eq(2)&&Text",
        "content": ".book-intro&&Text",
        "tabs": ".operate-bar&&.total-num",
        "lists": ".book-list:eq(#id)&&.list-item"
    },
    搜索: '*',
}