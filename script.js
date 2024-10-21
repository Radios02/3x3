const originalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffleNumbers() {
    let shuffledNumbers = originalNumbers
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

    const numberDivs = document.querySelectorAll('.number');

    numberDivs.forEach((div, index) => {
        div.textContent = shuffledNumbers[index];
    });
}
