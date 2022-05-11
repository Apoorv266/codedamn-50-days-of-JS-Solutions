
// //  to convert to base 

// const convertDigitsToAskedBase = (digits, baseA, baseB) => {
// 	if (baseA <= 1 || baseA % 1) throw new Error('Wrong input base')
// 	if (baseB <= 1 || baseB % 1) throw new Error('Wrong output base')
// 	if ([!digits.length, digits.length > 1 && digits[0] === 0, digits.some((digit) => digit < 0 || digit >= baseA)].some((assertion) => assertion))
// 		throw new Error('Input has wrong format')
// 	// Convert digits in base a to base 10 then convert that number to base b.
// 	return convertToBase(
// 		digits.reduce((num, digit) => digit + num * baseA),
// 		baseB
// 	)
// }

// val = convertDigitsToAskedBase([5,8],10,16)
// console.log(val)

var base_convert = function (number, initial_base, change_base) {
    if ((initial_base && change_base) < 2 || (initial_base && change_base) > 36)
        return 'Base between 2 and 36';

    return parseInt(number + '', initial_base).toString(change_base);
}

console.log(base_convert(2132340928, 10, 16));