document.addEventListener("DOMContentLoaded", async () => {
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    const url = new URL(tab.url);
    const mc = url.searchParams.get("mc");
    document.getElementById("mc").value = mc || "Not found";

    document.getElementById("find").addEventListener("click", async () => {
        const country = document.getElementById("country").value;
        const resultDiv = document.getElementById("result");

        if (!mc) {
            resultDiv.textContent = "No product ID found.";
            return;
        }

        const productPath = url.pathname.split("/R-p-")[1]; // e.g., "123456"
        const targetUrl = `https://www.decathlon.${country}/p/_/R-p-${productPath}?mc=${mc}`;

        try {
            const res = await fetch(targetUrl);
            const html = await res.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            const priceEl = doc.querySelector(".vtmn-price");

            const price = priceEl?.textContent.trim();

            if (price) {
                resultDiv.textContent = `Price in .${country}: ${price}`;
            } else {
                resultDiv.textContent = "Could not extract price.";
            }
        } catch (e) {
            console.error(e);
            resultDiv.textContent = "Error fetching product page.";
        }
    });
});
