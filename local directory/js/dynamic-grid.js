
// function gupUpdate() {
//     const gridContainer = document.getElementById('gridContainer')
//     const containerWidth = gridContainer.offsetWidth 

//     const cardWidth = 320
//     let columns
//     let maxGap
//     let minGap
    

//     switch (true) {
//         case (containerWidth <= 1728 && containerWidth > 1440):
//             columns = 5
//             maxGap = 32
//             minGap = 4
//             break
//         // case (containerWidth <= 1440 && containerWidth > 1024):
//         //     columns = 4
//         //     maxGap = 4
//         //     minGap = 4
//         //     break
//         // case (containerWidth <= 1024 && containerWidth > 768):
//         //     columns = 3
//         //     maxGap = 6
//         //     minGap = 4
//         //     break
//         // case (containerWidth <= 768):
//         //     columns = 2
//         //     maxGap = 40
//         //     minGap = 4
//         //     break
//     }

//     const availableSpace = containerWidth - (columns * cardWidth)
//     const gap = Math.max(minGap, Math.min(maxGap, availableSpace / (columns - 1)))
//     gridContainer.style.gap = `${gap}px`
// } 


// window.addEventListener('load', gupUpdate)
// window.addEventListener('resize', gupUpdate)
