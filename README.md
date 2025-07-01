# 🧩 Simple Chrome Extensions

A collection of lightweight, privacy-focused Chrome extensions built for speed, simplicity, and specific use cases. Each
extension lives in its own folder and is designed to solve a small but useful problem.

## 📦 Extensions

### 💱 currency-converter

A clean and minimal currency converter supporting **EUR**, **USD**, and **TRY**.

- Converts amounts between supported currencies
- Uses a free, no-auth exchange rate API
- Caches data for performance
- Manifest V3 compliant

🔗 [More Info »](./currency-converter)

---

### ⏭ skip-ads

**Ad Layer Skipper** is a lightweight Chrome extension designed to bypass intrusive ad layers embedded as iframes on
video streaming sites.

- Automatically detects the first `<iframe>` on matching domains (e.g., `example*.com`)
- Opens the iframe's `src` URL in a new tab
- Instantly loads the actual video content—no clicks, no waiting

🔗 [More Info »](./skip-ads)

---

### 🛒 decathlon-product-new-tab

Ensures all **Decathlon product links** open in a **new tab**.

- Improves browsing experience on decathlon.com
- Prevents overwriting your current search
- Zero-config, runs automatically on Decathlon pages

🔗 [More Info »](./decathlon-product-new-tab)

---

### 🛒 decathlon-price-compare

A Chrome extension that extracts and displays product prices across other Decathlon sites in different countries,
helping you compare prices easily.

- Detects and extracts prices using robust CSS selectors
- Supports multiple Decathlon country sites
- Simple installation and usage
- Manifest V3 compliant
- No external dependencies
- Privacy-focused: no data collection or tracking

🔗 [More Info »](./decathlon-price-compare)

---

## 🚀 Installation

1. Clone or download this repository.
2. Open `chrome://extensions/` in your browser.
3. Enable **Developer Mode**.
4. Click **Load unpacked** and select the folder of the extension you want to use.

---

## 📜 License

Each extension is released under the [MIT License](./LICENSE).
