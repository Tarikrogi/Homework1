01

var numbers = [254, 115, 78, 25, 91, 45, 37];
for (i = 0; i <= numbers.length; i++) {
    if (numbers[i] > 50)
        console.log(numbers[i])
}

03

var a = Number(prompt('Enter number a'));
var b = Number(prompt('Enter number b'));
var c = Number(prompt('Enter number c'));
if (a < b == true) {
    if (a < c == true) {
        console.log('a', a)
    }
} else if (b < c == true) {
    if (b < a == true) {
        console.log('b:', b)
    }
}
if (c < b == true) {
    if (c < a == true) {
        console.log('c:', c)
    }
}


04

var user = {
    age: 25
};
if (user.age >= 20 && user.age < 27) {
    console.warn('Выслать повестку');
}

05

var day = 'Thursday';
var week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
if (day !== 'Saturday' && day !== 'Sunday') {
    alert('idi na rabotu')
} else {
    alert('sidi doma')
}

08

var username = prompt('Please, enter user name');
alert('Happy bithday ' + username)

10

var previousReading = Number(prompt('Введите показания счетчика электроэнергии за предидущий период'));
//Тут вводим показания счетчика за предидущий период/месяц/и тд. Для сравнения с текущими показаниями.
var currentReading = Number(prompt('Введите текушие показания счетчика электроэнергии'));
//Тут вводим показания счетчика на текущий момент.
if (currentReading - previousReading <= 100) {
    var sumkW = (currentReading - previousReading) * 0.9
    console.log('К оплате ', sumkW, 'грн');
} else if (currentReading - previousReading > 100) {
    var sumkW = (((currentReading - previousReading) - 100) * 1.68) + 90
        //Тарифы на электроэнергию на сегодняшний день: первые 100 кВ оплачиваются по тарифу 0.9грн за 1 кВ.
        //Все что выше 100кВ оплачивается отдельно по тарифу 1.68грн.  
    console.log('К оплате ', sumkW, 'грн');
    // Общая сумма к оплате за электроэнергию равна сумме начислений за первые 100кВ и начислениям за все, что
    //больше 100кв.
}