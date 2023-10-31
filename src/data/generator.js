// Execute this code with `node src/data/generator.js`
// Output: 'transactions-generated.json' file with JSON-serialized transations (file is overwritten if exists)
import fs from 'fs';

const initialSaldo = 50000;
const transactions = [];
const startDate = new Date("2023-01-01");
const daysToGenerate = 31;

const descriptions = [
    "+46707428379",
    "4508106 Pressbyr",
    "816959447611154",
    "816959645786246",
    "AHLENS City Stoc",
    "AHLENS Mall of S",
    "AKADEMIBOKHANDE",
    "AmazonMktplc*H03",
    "APOTEK HJARTAT M",
    "Apoteket Mall of",
    "APOTEKSGRUPPEN",
    "AWS EMEA",
    "BASTARD BURGERS",
    "BNOMADS AB",
    "BRODERNAS KUNGSH",
    "CLAS OHLSON",
    "Comviq",
    "Downtown Camper",
    "Foot Locker Inc",
    "FrånLudmil",
    "Gateau Centralen",
    "GOOGLE *Google P",
    "GOOGLE *YouTubeP",
    "HALLONBERGEN MA",
    "HEMKÖP SOLNA MAL",
    "HORNBACH SUNDBYB",
    "ICA KVANTUM MALL",
    "ICA NARA JARVAST",
    "ICA SUPERMARKET",
    "IHOPA",
    "IKEA Sverige",
    "ILLUMS BOLIGHUS",
    "ITAMAE SUSHI OC",
    "K*Dagens Nyh",
    "KJELL & CO 109",
    "KJELL & CO 21",
    "LIQPAY*SL",
    "LÖN",
    "Material",
    "Max Burgers 2010",
    "McDonalds 30",
    "MIO MALL OF SCA",
    "Moo Thaimassage",
    "MSFT * E0100PFK0",
    "NATURKOMPANIET /",
    "NILSON SHOES 311",
    "PAYSEND EU DAC",
    "PONG MALL OF SC",
    "POWER Sverige AB",
    "PRIS NYCKELKUND",
    "SALLY VOLTAIRE &",
    "SCRUM ALLIANCE I",
    "SF-bokhandelns",
    "SOFRA JAKOBSBERG",
    "SOOK MoS",
    "Spotify P262EECA",
    "STEAM PURCHASE",
    "STEAMGAMES.COM 4",
    "STORA COOP SUNDB",
    "Sundbypark Trafi",
    "Synoptik Solna 6",
    "TASORA SUSHI",
    "Ticketmaster Sve",
    "VIMLA* 072281147",
    "WIRSTROMS JARN",
    "WOODEN A* PLEDGE",
    "World Fusion Foo",
    "YOKU SUSHI THAI",
    "Zettle_*Mackverk",
    "Zettle_*Mille la",
    "Zettle_*Moo Thai",
    "Zettle_*Samy?s B"
];

// Generates integer in range [0..max-1]
function randomInteger(max) {
    return Math.floor(Math.random() * max);
}
function getRandomDescription() {
    const ix = randomInteger(descriptions.length);
    return descriptions[ix];
}
// small payments are more common than large ones
// ****   10..70 kr
// ****** 70..270 kr
// **     270..600 kr
// *      600..1000 kr
// *      1000..5000 kr
function generateAmount() {
    var seed = randomInteger(14);
    if (seed < 4)
        return Math.random() * 60 + 10;
    else if (seed < 10)
        return Math.random() * 200 + 70;
    else if (seed < 12)
        return Math.random() * 330 + 270;
    else if (seed < 13)
        return Math.random() * 400 + 600;
    else
        return Math.random() * 4000 + 1000;
}
function formatDecimal(number) {
    return Math.round(number * 100) / 100;
}


let currentSaldo = initialSaldo;
for (var dayIx = 0; dayIx < daysToGenerate; dayIx++) {
    const txCount = randomInteger(7);
    const date = new Date(startDate.getTime() + dayIx * 24 * 60 * 60 * 1000)

    for (var i = 0; i < txCount; i++) {
        const description = getRandomDescription();
        const amount = generateAmount();
        const amountDecimal = formatDecimal(amount);
        currentSaldo -= formatDecimal(amountDecimal);

        const tx = {
            "rowId": transactions.length + 1,
            "clearingNumber": "01234",
            "accountNumber": "0123456789",
            "product": "Privatkonto",
            "valuta": "SEK",
            "accountingDay": date.toLocaleDateString('sv-SE'),
            "transactionDay": date.toLocaleDateString('sv-SE'),
            "valutaDay": date.toLocaleDateString('sv-SE'),
            "reference": description,
            "description": description,
            "amount": -amountDecimal,
            "saldo": currentSaldo
        };
        transactions.push(tx);
    }
}

const json = JSON.stringify(transactions, null, 4);

fs.writeFile("src\\data\\transactions-generated.json", json, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
})