document.getElementById("generate-btn").addEventListener("click", generateNumbers);

function generateSecureNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomBuffer = new Uint32Array(1);
        window.crypto.getRandomValues(randomBuffer);
        const num = (randomBuffer[0] % 45) + 1;
        numbers.add(num);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

document.getElementById("generate-btn").addEventListener("click", () => {
    const numbers = generateSecureNumbers();
    document.getElementById("numbers-container").textContent =
        "Your numbers: " + numbers.join(", ");
});
}
