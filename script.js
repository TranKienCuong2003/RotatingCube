const cube = document.querySelector('.cube');
const toggleButton = document.getElementById('toggleRotation');
const speedUpButton = document.getElementById('speedUp');
const slowDownButton = document.getElementById('slowDown');
const resetButton = document.getElementById('reset');
const statusText = document.getElementById('status');
const speedDisplay = document.getElementById('speedDisplay');

let isRotating = true;
let rotationSpeed = 5;

toggleButton.addEventListener('click', () => {
    isRotating = !isRotating;
    cube.style.animationPlayState = isRotating ? 'running' : 'paused';
    toggleButton.textContent = isRotating ? 'Tạm dừng' : 'Tiếp tục';
    statusText.textContent = `Trạng thái: ${isRotating ? 'Đang xoay' : 'Đã tạm dừng'}`;
});

speedUpButton.addEventListener('click', () => {
    if (rotationSpeed > 1) {
        rotationSpeed -= 1;
        cube.style.animationDuration = `${rotationSpeed}s`;
        speedDisplay.textContent = `Tốc độ: ${rotationSpeed}s`;
    }
});

slowDownButton.addEventListener('click', () => {
    rotationSpeed += 1;
    cube.style.animationDuration = `${rotationSpeed}s`;
    speedDisplay.textContent = `Tốc độ: ${rotationSpeed}s`;
});

resetButton.addEventListener('click', () => {
    rotationSpeed = 5;
    cube.style.animationDuration = `${rotationSpeed}s`;
    speedDisplay.textContent = `Tốc độ: ${rotationSpeed}s`;
    if (!isRotating) {
        toggleButton.click();
        toggleButton.click();
    }
});
