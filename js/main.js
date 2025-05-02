function main() {
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');
    const colorText = document.getElementById('color-code');

    btn.addEventListener('click', function () {
        const bgColor = generateRGBColor();
        root.style.backgroundColor = bgColor;
        colorText.textContent = `Current Color: ${bgColor}`;
        colorText.style.backgroundColor = "#fff";
        colorText.style.color = "#000";
    });
}

function generateRGBColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

main();
