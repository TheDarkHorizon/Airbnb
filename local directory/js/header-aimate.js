
// window.addEventListener('scroll', function() {
//     const header = document.querySelector('.header-section');
//     const toolbar = document.querySelector('.toolbar-section');
//     const testSection = document.querySelector('.test-section');
//     const navMenu = document.getElementById('navMenu')
//     const menuHeaderWrapper = document.getElementById('menuHeaderWrapper')
//     const searchField = this.document.getElementById('searchField')
//     const scrollY = window.scrollY;

//     if (scrollY > 0) {
//         // Сжатие header и поднятие toolbar
//         navMenu.style.display = 'none'
//         header.classList.add('header-shrink');
//         toolbar.classList.add('toolbar-adjust');
//         // testSection.style.marginTop = '186px'; // Подгоняем под новую высоту header
//         menuHeaderWrapper.style.paddingTop = '16px'
//         // searchField.style.height = '48px'
//     } else if (scrollY === 0) {
//         navMenu.style.display = 'flex'
//         menuHeaderWrapper.style.paddingTop = '28px'
//         // searchField.style.height = '66px'
//         toolbar.classList.remove('toolbar-adjust');
//         header.classList.remove('header-shrink');
//     } 
//     else { // Посути, нахер не нужен, но пока оставим. 
//         // Восстановление исходного состояния
//         // toolbar.classList.remove('toolbar-adjust');
//         // testSection.style.marginTop = '274px'; // Возвращаем изначальный отступ
//     }
// })