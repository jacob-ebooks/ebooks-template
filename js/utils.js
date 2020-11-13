/**
 * 获取当前hash
 *
 * @param {string} hash 要解析的hash，默认取当前页面的hash，如： nav#类目 => {nav:nav, anchor:类目}
 * @description 分导航和页面锚点
 * @return {Object} {nav:导航, anchor:页面锚点}
 */
var getHash = function (hash) {
    hash = hash || window.location.hash.substr(1);
    if (!hash) {
        return {
            nav: '',
            anchor: ''
        }
    }

    hash = hash.split('#');
    return {
        nav: hash[0],
        anchor: decodeURIComponent(hash[1] || '')
    }
};



function replace_symbols(text) {
    // replace symbols with underscore
    return text
        .replace(/, /g, ',')
        .replace(/[&\!\/\\#,.+=$~%'":*?<>{}\ \]\[]/g, "-")
        .replace(/[()]/g, '');
}