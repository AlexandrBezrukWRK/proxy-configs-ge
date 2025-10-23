function FindProxyForURL(url, host) {
    // --- Proxy settings ---
    var YOUTUBE_PROXY = "PROXY 85.117.62.78:8080; DIRECT";
    var TWITTER_PROXY = "PROXY 192.168.1.23:80; DIRECT";

    // --- Domain lists ---
    var youtubeDomains = [
        "youtube.com",
        "m.youtube.com",
        "youtube-nocookie.com",
        "youtu.be",
        "googlevideo.com",
        "ytimg.com",
        "ggpht.com",
        "gstatic.com",
        "static.doubleclick.net"
    ];

    var twitterDomains = [
        "x.com",
        "twitter.com",
        "t.co",
        "api.t.co",
        "twimg.com",
        "ads-twitter.com",
        "pscp.tv",
        "twtrdns.net",
        "twttr.com",
        "twitterinc.com",
        "cms-twdigitalassets.com",
        "api.twitter.com",
        "upload.twitter.com",
        "cdn.twitter.com",
        "abs.twimg.com",
        "video.twitter.com",
        "syndication.twitter.com",
        "analytics.twitter.com",
        "caps.twitter.com",
        "chatgpt.com",
        "flibusta.is"
    ];

    // --- Universal host match function ---
    function matchHostList(list, host) {
        for (var i = 0; i < list.length; i++) {
            var domain = list[i];
            if (dnsDomainIs(host, domain) || shExpMatch(host, "*." + domain)) {
                return true;
            }
        }
        return false;
    }

    // --- Check YouTube / Google Video ---
    if (matchHostList(youtubeDomains, host)) {
        return YOUTUBE_PROXY;
    }

    // --- Check Twitter / X / ChatGPT / Flibusta ---
    if (matchHostList(twitterDomains, host)) {
        return TWITTER_PROXY;
    }

    // --- Everything else direct ---
    return "DIRECT";
}
