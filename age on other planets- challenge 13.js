const spaceAge = (seconds) => {

        //Time to orbit Sun in years
        const yearsInAllPlanets = {
            Mercury: 0,
            Venus: 0,
            Earth: 0,
            Mars: 0,
            Jupiter: 0,
            Saturn: 0,
            Uranus: 0,
            Neptune: 0,
        }

        let days = (( seconds / 3600 ) / 24) / 365.25

        let mercury = 0.2408467 //Earth years
        let venus = 0.61519726 //Earth years
        let earth = 1 //Earth years
        let mars = 1.8808158 //Earth years
       let  jupiter = 11.862615 //Earth years
        let saturn = 29.447498  //Earth years
        let uranus = 84.016846  //Earth years
        let neptune = 164.79132  //Earth years


    let Mercury = parseFloat(((days  / mercury)).toFixed(2))
    let Venus = parseFloat((days  / venus).toFixed(2))
    let Earth = parseFloat((days  / earth).toFixed(2))
    let Mars = parseFloat((days / mars).toFixed(2))
    let Jupiter = parseFloat((days / jupiter).toFixed(2))
    let Saturn = parseFloat((days  / saturn).toFixed(2))
    let Uranus = parseFloat((days / uranus).toFixed(2))
    let  Neptune = parseFloat((days  / neptune).toFixed(2))

    yearsInAllPlanets.Mercury = Mercury
    yearsInAllPlanets.Venus = Venus
    yearsInAllPlanets.Earth = Earth
    yearsInAllPlanets.Mars = Mars
    yearsInAllPlanets.Jupiter = Jupiter
    yearsInAllPlanets.Saturn = Saturn
    yearsInAllPlanets.Uranus = Uranus
    yearsInAllPlanets.Neptune = Neptune

	return yearsInAllPlanets
}

console.log(spaceAge(65965561))

// REFERENCE : https://museumsvictoria.com.au/media/1869/calculate-your-age-on-other-planets.pdf

// http://girlstart.org/wp-content/uploads/2017/07/13.Age-on-Planets.pdf


//......................Codedamn's solution...................................


const orbitals = {
    'Mercury': 0.2408467,
    'Venus': 0.61519726,
    'Earth': 1,
    'Mars': 1.8808158,
    'Jupiter': 11.862615,
    'Saturn': 29.447498,
    'Uranus': 84.016846,
    'Neptune': 164.79132,
}

const earthYearInSeconds = 31557600

const spaceAge2 = (seconds) => {
    const yearsInAllPlanets = {
        'Mercury': 0,
        'Venus': 0,
        'Earth': 0,
        'Mars': 0,
        'Jupiter': 0,
        'Saturn': 0,
        'Uranus': 0,
        'Neptune': 0
    }

    const year = seconds / earthYearInSeconds


    Object.entries(orbitals).map(([planet, orbitalPeriod]) => {
        yearsInAllPlanets[planet] = parseFloat((year / orbitalPeriod).toFixed(2))
    })

    return yearsInAllPlanets
}
