

// document.addEventListener('DOMContentLoaded', function() {
    const searchFieldItems = document.querySelectorAll('.search-field-item');
    const dropdown = document.querySelector('.search-dropdown');
    const searchFieldWrapper = document.querySelector('.search-field-wrapper');

    searchFieldItems.forEach(item => {
        item.addEventListener('click', (event) => {
            // event.stopPropagation();
            const rect = searchFieldWrapper.getBoundingClientRect();
            dropdown.style.top = `${rect.bottom + 16}px`;
            // dropdown.style.left = `${rect.left}px`;
            // dropdown.style.left = '400px';
            // dropdown.style.width = `${rect.width}px`;
            dropdown.classList.toggle('hidden');
        });
    });

    // document.addEventListener('click', (event) => {
    //     if (!searchFieldWrapper.contains(event.target) && !dropdown.contains(event.target)) {
    //         dropdown.classList.add('hidden');
    //     }
    // });
// });