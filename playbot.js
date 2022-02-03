function one(x) {
    let count;
    let result = Math.floor(Math.random() * (100 - 1)) + 1;
    function two() {
        count = +prompt('Угадай число от 1 до 100');
        if (isNaN(count)) {
            alert('Введи число!');
        } if (count == false) {
            alert('Игра окончена!');
        } else if (x == 0) {
            alert("Попытки закончились, хотите сыграть еще?");
            one(9);
        }
        function three() {
            if (x != 0) {
                if (count < result && count != false) {
                    alert('Загаданное число больше, осталось попыток ' + x);
                    x--;
                } else if (count > result && count != false) {
                    alert('Загаданное число меньше, осталось попыток ' + x);
                    x--;
                } else if (count == result && count != false) {
                    alert('Поздравляю, Вы угадали!!! (Хотели бы сыграть еще?)');
                    one(9);
                }
                if (count !== result && count != false) {
                    two();
                }
            }
        }
        three();
    }
    two();
}
one(9);