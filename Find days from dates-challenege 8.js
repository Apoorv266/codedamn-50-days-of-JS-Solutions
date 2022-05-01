const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
    a = dateText1 - dateText2
    return a
}

console.log(`Days difference: ${getDaysBetweenDates('10/15/2020', '12/1/2020')}`)
