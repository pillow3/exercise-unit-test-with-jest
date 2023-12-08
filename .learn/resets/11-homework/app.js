let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromEuroToDollar(euro) {
    const exchangeRate = 1.07;
    const dollars = euro * exchangeRate;
    return dollars;
}

const fromDollarToYen = function(euro){
    let valueInYen = euro * 156.5
    return valueInYen
}

const fromYenToPound = function(yen){
    let valueInYen = yen * 0.87
    return valueInYen
}

module.exports={fromEuroToDollar, fromDollarToYen, fromYenToPound}