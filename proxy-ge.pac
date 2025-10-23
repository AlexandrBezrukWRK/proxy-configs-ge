function FindProxyForURL(url, host) {
    var proxyList = [
        "chatgpt.com",
        "x.com",
        "x.co",
        "*.twimg.com",
        "flibusta.is"
    ];

    // Check if host should go through YouTube proxy
    if (
        dnsDomainIs(host, "youtube.com") ||
        dnsDomainIs(host, "www.youtube.com") ||
        dnsDomainIs(host, "youtube-nocookie.com") ||
        shExpMatch(host, "*.googlevideo.com") ||
        dnsDomainIs(host, "gstatic.com") ||
        shExpMatch(host, "*.googleapis.com") ||
        shExpMatch(host, "*.g.doubleclick.net") ||
        dnsDomainIs(host, "static.doubleclick.net") ||
        shExpMatch(host, "*.ytimg.com") ||
        shExpMatch(host, "*.ggpht.com")
    ) {
// Use proxy 85.117.62.78:8080 for all YouTube and video domains
        return "PROXY 85.117.62.78:8080";    }

    // Check if host matches any site in proxyList
    for (var i = 0; i < proxyList.length; i++) {
        if (dnsDomainIs(host, proxyList[i])) {
            return "PROXY 192.168.1.23:80";
        }
    }

    // Direct connection for others
    return "DIRECT";
}


