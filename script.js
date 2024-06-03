const selectPlanet = document.querySelector('.planet');
const planetImage = document.querySelector('.planet-image');
const weightDesc = document.querySelector('.weight-desc');
const planetName = document.querySelector('.planet-name');

selectPlanet.addEventListener('change', (e) => {
    const planet = e.target.value;
    planetImage.setAttribute('src', `./images/${planet}.png`);
    planetName.textContent = `${planet}`;
})

