const selectPlanet = document.querySelector('.planet');
const planetImage = document.querySelector('.planet-image');
const weightDesc = document.querySelector('.weight-desc');
const planetName = document.querySelector('.planet-name');
const calcBtn = document.querySelector('.calc-btn');
const mass = document.getElementById('mass');
const section = document.querySelector('.flex-container');
const error = document.querySelector('.error');

let planet, weight;


function getGravity(planet) {
    const gravityMap = {
        mercury: 3.7,
        venus: 8.87,
        earth: 9.81,
        mars: 3.71,
        jupiter: 24.79,
        saturn: 10.44,
        uranus: 8.69,
        neptune: 11.15,
        moon: 1.62,
        pluto: 0.62
    };

    return gravityMap[planet];
}
const handlePlanet = (e) => {
    planet = e.target.value;
    planetImage.setAttribute('src', `./images/${planet}.png`);
    planetName.textContent = `${planet}`;
    weight = getGravity(planet);
}

const handleCalculation = (e) => {
    e.preventDefault();

    section.classList.remove('hidden');
    error.classList.add('hidden');

    let massInKg = +mass.value;
    if (typeof massInKg === "number") {
        document.querySelector('.weight').textContent = `${(massInKg * weight).toFixed(1)} N`;
    };
}


calcBtn.addEventListener('click', handleCalculation);
selectPlanet.addEventListener('change', handlePlanet);
selectPlanet.addEventListener('change', handleCalculation);