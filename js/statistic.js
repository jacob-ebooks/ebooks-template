function statistics() {
    var eleStat = document.getElementsByTagName("script")[0];
    if (eleStat) {
        eleStat.remove();
    }
    var _hmt = _hmt || [];
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?519d72adb78a0bf66de7bae18e994322";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
}

statistics();