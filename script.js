// // Methods in JavaScript

// String methods

// // toUpperCase - makes the text uppercase
// let text = "lorem ipsum"
// console.log(text.toUpperCase())

// // length- checking the length of a sentence
// let sentence = "Takk gud det er fredag!"
// console.log(sentence.length)

// // toLowerCase - makes the text in lower case
// let morten = "Morten Is AFK"
// console.log(morten.toLowerCase())

// // trim - trims whitespace from the start and end of a string
// let timeOfWeek = "              weekend          "
// console.log(timeOfWeek.trim())

// // charAt - finds returns the character at the specified index
// let word = "banan"
// console.log(word.length)
// console.log(word.charAt(3))
// console.log(word.charAt(0))
// console.log(word.charAt(10))

// // slice - extracts part of a string
// let food = "Pizza smaker godt"
// console.log(food.slice(0, 5))
// console.log(food.slice(4, 5))
// console.log(food)

// // substring - similar to slice, but doesn't accept negative values
// let phrase = "goikebiergu lea sáltis"
// console.log(phrase.length)
// console.log(phrase.substring(6, 10))
// console.log(phrase.substring(15, 22))

// // replace - replaces one value with a new one
// let message = "Vær forsiktig når du går ut på glattisen, Det kan gjøre ondt og skli å slå seg."
// console.log(message.replace("ondt", "skikkelig digg"))

// // regular expression - a pattern that is used to match characters or character combinations
// // in a string. You can use it to replace all instances of the same word by wrapping the word
// // in two forward slashes (//), and give the flags g (global flag, changes out all instances
// // of the word) and i (case insensitive flag, ignores case irregularities)

// let message2 = "Det er fint å reise for FERIE, fordi å reise på ferie er spennende og avslappende."
// console.log(message2.replace("ferie", "tur"))
// console.log(message2.replace(/ferie/gi, "skitur"))

// // split - converts a string into an array
// let statement = "Når dagen er over er det godt og legge seg ned i senga si."
// console.log(statement.split(" "))

// // includes - checks if the string includes another string and returns a true or false
// let joke = "Det var en gang to tomater som skulle gå over vegen, men så ble den ene tomaten påkjørt."
// console.log(joke.includes("tomat"))
// console.log(joke.includes("bli"))

////////////////////////////////////////////////

// Array methods

// length
let women = ["Judy", "Panam", "River"]
console.log(women.length)

// pop
let leagueItems = ["Infinity Edge", "Bloodthirster", "Guardian angel"]
leagueItems.push("Rabadon's Deathcap")
console.log(leagueItems)

// pop
let leagueLastItem = leagueItems.pop()
console.log(leagueLastItem)
console.log(leagueItems)

// shift
let leagueChamps = ["Ahri", "Jinx", "Yasuo", "Lux"]
let firstChamp = leagueChamps.shift()
console.log(firstChamp)
console.log(leagueChamps)

// unshift
leagueChamps.unshift("Ahri")
console.log(leagueChamps)

// Splice - cuts out a portion of the array AND changes it.
let helldivers = ["Drop Pod", "Bile Titan", "Charger", "Democracy"]
console.log(helldivers.splice(0,3))
console.log(helldivers)

// indexof
console.log(helldivers.indexOf("Charger"))
console.log(leagueItems.indexOf("Infinity Edge"))

// Reverse function with methods

function reverseString(str) {
    let characterArray = str.split("");
    let reversedArray = characterArray.reverse();
    let reversedString = reversedArray.join("");
    return reversedString
    
}
let originalString = "The weakest hunter of all mankind became the strongest hunter - Solo Leveling"
let reversed = reverseString(originalString)
console.log(reversed)