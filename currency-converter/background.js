const API_BASE = 'https://open.er-api.com/v6/latest/';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ratesCache: {}});
});

async function fetchRates(base) {
    const res = await fetch(API_BASE + base);
    if (!res.ok) throw new Error('Network error');
    const json = await res.json();
    if (json.result !== 'success') throw new Error('API error');
    return json.rates;
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.type === 'GET_RATE') {
        const base = msg.base;
        chrome.storage.local.get(['ratesCache'], async data => {
            const cache = data.ratesCache || {};
            const now = Date.now();
            if (cache[base]?.timestamp > now - 24 * 3600e3) {
                sendResponse({rates: cache[base].rates});
            } else {
                try {
                    const rates = await fetchRates(base);
                    cache[base] = {rates, timestamp: now};
                    await chrome.storage.local.set({ratesCache: cache});
                    sendResponse({rates});
                } catch (e) {
                    sendResponse({error: e.message});
                }
            }
        });
        return true;
    }
});
