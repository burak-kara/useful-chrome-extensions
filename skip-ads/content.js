(async () => {
    const res = await fetch(chrome.runtime.getURL("config.json"));
    const config = await res.json();

    const host = window.location.hostname;
    const pattern = config.domainPattern.replace("*", ".*\\");
    const regex = new RegExp("^" + pattern + "$");


    if (!regex.test(host)) return;

    const iframe = document.querySelector("iframe");
    if (iframe?.src) {
        window.open(iframe.src, "_blank");
    }
})();
