window.onload = () => {
    main();
}

function main() {
    const mainElement = document.getElementById('main');
    const btn = document.getElementById('btn');

    btn.addEventListener('click', function() {
        const bgColour = generateRGB();
        mainElement.style.backgroundColor = bgColour;
    });
}

// random rgb colour generator 
function generateRGB() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}
    