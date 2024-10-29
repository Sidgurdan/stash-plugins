(function () {
    'use strict';

    // Function to hide clear indicators
    function hideClearIndicators() {
        const lightboxTags = document.querySelector('.lightbox-tags');
        if (lightboxTags) {
            console.log('lightbox present');
            const clearIndicators = lightboxTags.querySelectorAll('.react-select__clear-indicator');
            clearIndicators.forEach(indicator => {
                console.log('hiding')
                indicator.style.display = 'none';
            });
        }
    }

    // Create a MutationObserver to watch for changes in the DOM
    const observer = new MutationObserver(hideClearIndicators);

    // Configuration for the observer (watch for changes in child elements and subtree)
    const config = {childList: true, subtree: true};

    // Start observing the document body
    observer.observe(document.body, config);

    // Also hide clear indicators when the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', hideClearIndicators);
})();
