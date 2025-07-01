function updateLinks() {
    const anchors = document.querySelectorAll('a');

    anchors.forEach(link => {
        if (
            link.href &&
            link.href.includes('/p/') && // product detail URL pattern
            !link.hasAttribute('target')
        ) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
}


function interceptProductCardClicks() {
    document.addEventListener('click', async function(event) {
        const productCard = event.target.closest('a[href*="/p/"]');
        if (productCard) {
            event.preventDefault();
            event.stopImmediatePropagation();
            window.open(productCard.href, '_blank', 'noopener');
        }
    }, true);
}

updateLinks();
interceptProductCardClicks();

const observer = new MutationObserver(() => {
    updateLinks();
});
observer.observe(document.body, { childList: true, subtree: true });
