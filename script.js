document.getElementById('generateBtn').addEventListener('click', () => {
    let text = document.getElementById('textInput').value;
    let textColor = document.getElementById('textColor').value;
    let glowColor = document.getElementById('glowColor').value;
    let container = document.getElementById('logoContainer');
    container.innerHTML = '';

    let span = document.createElement('span');
    span.classList.add('logo');
    span.textContent = text;
    span.style.color = textColor;
    span.style.textShadow = `0 0 15px ${glowColor}, 0 0 30px ${glowColor}`;
    container.appendChild(span);

    generateImage(text, textColor, glowColor);
});

document.getElementById('downloadBtn').addEventListener('click', () => {
    let canvas = document.getElementById('canvas');
    let link = document.createElement('a');
    link.download = 'cyberpunk_logo.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
});

function generateImage(text, textColor, glowColor) {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#080808';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = 'bold 60px Orbitron';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.shadowColor = glowColor;
    ctx.shadowBlur = 20;
    ctx.fillStyle = textColor;
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
}
