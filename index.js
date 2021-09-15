// Задачи 3 - 5

let input = document.getElementById('input');
let seach = document.getElementById('button');
let user = [
    { name: 'Max', age: 30 },
    { name: 'Dima', age: 32 },
    { name: 'Kate', age: 25 },
    { name: 'Donald', age: 75 }
];

seach.onclick = function () {
    if (input.value == "google") {
        setTimeout(() => {
            window.alert("Yandex круче. Но это не точно");
        }, 3000);
    } else setTimeout(() => {
        window.alert(input.value);
    }, 3000);
    window.alert(user[0].name)
}

// Задача 6

function superSum(a, b) {
    return a + b;
}
let result = superSum(+prompt("Введите первое число"), +prompt("Введите второе число"));
alert(result)

// Задача 7, 9

let numbers = [1, 2, 9, 5, 7];
let findMax = (a, b) => {
    return a > b ? a : b;
},
    findMin = (a, b) => {
        return a < b ? a : b
    };

console.log(numbers.reduce(findMax))
console.log(numbers.reduce(findMin))

// Задача 8

let a = "Dima";
let b = "Max";
let c;
c = a;
a = b;
b = c;

console.log(a)
console.log(b)



