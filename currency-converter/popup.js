document.getElementById("convert").addEventListener("click", () => {
    const amount = parseFloat(document.getElementById("amount").value);
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const resultDiv = document.getElementById("result");
    if (!amount || amount <= 0) {
        resultDiv.textContent = "Enter a valid amount.";
        return;
    }
    resultDiv.textContent = "Loading…";
    chrome.runtime.sendMessage({type: 'GET_RATE', base: from}, res => {
        if (res.error) {
            resultDiv.textContent = "Error: " + res.error;
            return;
        }
        const rate = res.rates[to];
        if (!rate) {
            resultDiv.textContent = "Rate not found.";
            return;
        }
        const converted = (amount * rate).toFixed(2);
        resultDiv.textContent = `${amount} ${from} = ${converted} ${to}`;
    });
});

