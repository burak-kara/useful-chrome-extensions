# **Ad Layer Skipper – Chrome Extension**

**Ad Layer Skipper** is a lightweight Chrome extension designed to bypass intrusive ad layers embedded as iframes on video streaming sites. Many streaming platforms overlay ads on top of their video players, blocking access to the actual content unless you manually skip or close the ad. This extension automatically detects the first `<iframe>` on matching sites (e.g., `dizi*.com`) and opens the iframe's source URL in a new tab—directly loading the real video content without any clicks or delays.

---

## 🔧 Features

- Automatically runs on page load
- Detects and opens the first iframe’s `src` URL in a new tab
- Bypasses iframe-based ad layers blocking video playback
- Works on domains matching `dizi*.com` (configurable)

---

## 📁 Installation (Load Unpacked Extension)

1. **Download or clone this repository.**
2. Open **Google Chrome**.
3. Navigate to: `chrome://extensions/`
4. Enable **Developer mode** (top right toggle).
5. Click **"Load unpacked"**.
6. Select the folder containing this extension’s files.

The extension will then run automatically on matching websites, opening the actual video in a new tab.

---

## 🔒 Permissions

- `*://*.com/*` — Needed to detect domains and run scripts
- No data is stored or sent externally

---

## 📝 Notes

This extension is a personal tool focused on bypassing ad overlays on specific domain patterns (`dizi*.com`). You can customize domain matching by editing `config.json`.

---

## ❌ Uninstall / Remove Extension

1. Open Chrome and visit `chrome://extensions/`
2. Find **"Ad Layer Skipper"** in the list
3. Click **Remove** and confirm

---

## 🔗 GitHub Repository

Source code and updates: [https://github.com/burak-kara/skip-ads](https://github.com/burak-kara/skip-ads)

---

## ⚠️ Legal Notice

This extension is intended solely for personal convenience to bypass ad layers on supported websites. It does **not** promote, facilitate, or endorse any illegal activities, including but not limited to piracy, unauthorized access, or copyright infringement. Use responsibly and only on content you have legal rights to access. The author assumes no liability for misuse.
