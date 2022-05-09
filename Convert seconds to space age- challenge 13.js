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

        let days = (( seconds / 3600 ) / 24) / 365

       let  jupiter = 11.862615 //Earth years
        let saturn = 29.447498  //Earth years
        let uranus = 84.016846  //Earth years
        let neptune = 164.79132  //Earth years

    let Mercury =  ((days * 365 ) / 88).toFixed(2)
    let Venus = ((days * 365 ) / 225).toFixed(2)
    let Earth = ((days * 365 ) / 365).toFixed(2)
    let Mars = ((days * 365 ) / 687).toFixed(2)
    let Jupiter = ((days * 365 ) / jupiter).toFixed(2)
    let Saturn = ((days * 365 ) / saturn).toFixed(2)
    let Uranus = ((days * 365 ) / uranus).toFixed(2)
    let  Neptune = ((days * 365 ) / neptune).toFixed(2)

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

console.log(spaceAge(436575687))

