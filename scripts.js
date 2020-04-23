//The Third Part

let name = 'Adam';

console.log(name + "'s apples");
console.log('Hello World!');

$('h1').text('We are having a 10 minute break until 17:05');
$('p').html('StayAtHome Coding Camp');

$('strong').css('background', 'lime')

let color = 'blue';

$('h2').toogleClass('color');
$('h2').toogleClass('color');

$('ul').append('<li>My name is ' + name + '</li>');
$('ul').append('<li id="special-list-item">Removable ' + name + '</li>');

$('li').remove();

let addButtonHandler = () => {
    if ($('li').lenght < 5) {
        $('ul').append('<li>My name is ' + name + '</li>');
    }

$('#add-button').click(AddButtonHandler);

$('#remove-button').click(() => {
    $('li:last-child').remove();
})

// This is fourth part

let age = 12;

console.log('Starting the if');
console.log('This is a Sentence'.toLowerCase());

if (age < 18) {
    console.log('Not old enough to drive')
} else {
    console.log('Old enough to drink')
}

console.log('This is after the if')


// This a JavaScript comment

/*
This is a multiline
JavaScript comment.
*/

// This is the first part:

//name + 'else' + name + age
//"somethingelsesomething12"
//'adam' - 'apple'
//NaN
//true && true
//true
//false && true
//false
//false && false
//false
//true && false
//false
//true || true
//true
//false || true
//true
//false || false
//false
//true || false
//true
//"true && (false || (true && false))"
//"true && (false || (true && false))"
//"true && (false || (true && false))"
//true && (false || (true && false))
//false
//!true
//false
//!false
//true
//oldEnoughTiDrive
//true
//!oldEnoughTiDrive
//false
//let color1 = 'orange'
//undefined
//let color = 'blue'
//undefined
//let color2 = 'blue'
//undefined
//let colors = ['orange', 'blue', 'green', 'purple']
//undefined
//colors
//(4) ["orange", "blue", "green", "purple"]0: "orange"1: "blue"2: "green"3: "purple"length: 4__proto__: Array(0)concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}__proto__: Object
//color [0]
//"b"
//colors [0]
//"orange"
//colors [2]
//"green"
//colors.length
//4
//[12, 54, 1212]
//(3) [12, 54, 1212]
//[true, false, true]
//(3) [true, false, true]
//[colors, colors, colors]
//(3) [Array(5), Array(5), Array(5)]
//colors
//(5) ["orange", "blue", "green", "purple", "yellow"]
//colors [2]
//"green"
//colors [2] = 'lime'
//"lime"
//colors
//(5) ["orange", "blue", "lime", "purple", "yellow"]
//[33, 'Adam', true]
//(3) [33, "Adam", true]
//let person = {}
//undefined
//let person = {
//name: 'Adam',
//age: 33,
//oldEnoughTiDrive: true
//}
//undefined
//person
//{name: "Adam", age: 33, oldEnoughToDrive: true}
//person.name
//"Adam"
//person.age
//33
//person.age + 10
//43
//person.name = 'Peti'
//"Peti"
//person
//{name: "Peti", age: 33, oldEnoughToDrive: true}
//name
//"something"
//age
//12
//oldEnoughTiDrive
//true
//person.favoriteColors = ['lime', 'green']
//(2) ["lime", "green"]
//person
//{name: "Peti", age: 33, oldEnoughToDrive: true, favoriteColors: Array(2)}