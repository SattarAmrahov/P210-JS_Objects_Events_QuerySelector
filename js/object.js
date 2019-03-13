
// var telebe1 = {
//     name: "Qeshem",
//     surname: "Qarayev",
//     age: 19,
//     fullName: function (message = "") {
//         return message + " " + this.name + " " + this.surname;
//     }
// };

// var telebe2 = {
//     name: "Elnur",
//     surname: "Hesenzade",
//     age: 24,
//     fullName: function (message = "") {
//         return message + " " + this.name + " " + this.surname;
//     }
// };

// var telebe3 = {
//     name: "Heyder",
//     surname: "Elekberli",
//     age: 24,
//     fullName: function (message = "") {
//         return message + " " + this.name + " " + this.surname;
//     }
// };

// telebe3.name = "Parvin";
// telebe3.surname = "Pashazade";
// telebe3.age = 22;

//console.log(telebe3);




// console.log(person);
// console.log(person.fullName("Hello"));
// console.log(person["fullName"]());
// console.log(person.name + " - " + person.surname);
// alert(person.name + " - " + person.surname);
// document.write(person.name + " - " + person.surname);


var telebe3 = {
    name: "Heyder",
    surname: "Elekberli",
    age: 24,
    fullName: function (message = "") {
        return message + " " + this.name + " " + this.surname;
    }
};

function Telebe(ad, soyad, yas){
    this.name = ad;
    this.surname = soyad;
    this.age = yas;
    this.fullName = function(message){
        return this.name + " " + this.surname + " " + message;
    };
}

var murad = new Telebe("Murad", "Babazade", 19);
var qeshem = new Telebe("Qeshem", "Qarayev", 19);

console.log(murad.fullName("Hello"));




