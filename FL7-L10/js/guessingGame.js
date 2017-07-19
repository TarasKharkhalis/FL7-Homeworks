function guessingGame() {

    var conf = confirm("Бажаєте почати гру?");

    if (conf === false) {
        console.log("Сьогодні ви не виграли мільйон, а могли...");
    } else {
        gameStart(conf);
    }
}



function gameStart(conf) {
    var range = 5;
    var gameResult = 0;
    var winFirstTry = 10;
    var winSecondTry = 5;
    var winThirdTry = 2;
    while (conf === true) {

        i = 0;
        gameNum = Math.floor(Math.random() * range + 1);
        console.log(gameNum);

        playerNum = parseInt(prompt(`Введіть число в проміжку 0-${range}:`));

        switch (i) {
            case 0:
                if (playerNum === gameNum) {
                    gameResult += winFirstTry;
                    conf = confirm(`Неймовірно! Ви виграли з першої спроби! Ваш виграш становить ${gameResult}$! Спробувати знову?`);
                    conf = false;
                    break;
                } else {
                    playerNum = parseInt(prompt(`Введіть число в проміжку 0-${range}:`));
                }

            case 1:
                if (playerNum === gameNum) {
                    gameResult += winSecondTry;
                    conf = confirm(`Ви виграли з другої спроби! Ваш виграш становить ${gameResult}$! Спробувати знову?`);
                    conf = false;
                    break;
                } else {
                    playerNum = parseInt(prompt(`Введіть число в проміжку 0-${range}:`));
                }

            case 2:
                if (playerNum === gameNum) {
                    gameResult += winThirdTry;
                    conf = confirm(`Ви виграли з третьої спроби! Ваш виграш становить ${gameResult}$! Спробувати знову?`);
                    conf = false;
                    break;
                } else {
                    conf = confirm("Сума виграшу становить 0$! Почати гру з початку?");
                    break;
                }

            default:
                break;
        }
        if (conf === false) {
            break;
        }
    }
    gameContinue(conf);

    function gameContinue(conf) {
        conf = true;

        do {

            winFirstTry *= 3;
            winSecondTry *= 3;
            winThirdTry *= 3;
            range *= 2;

            i = 0;
            gameNum = Math.floor(Math.random() * range + 1);
            console.log(gameNum);

            playerNum = parseInt(prompt(`Введіть число в проміжку 0-${range}:`));

            switch (i) {
                case 0:
                    if (playerNum === gameNum) {
                        gameResult += winFirstTry;
                        conf = confirm(`Неймовірно! Ви виграли з першої спроби! Ваш виграш становить ${gameResult}$! Спробувати знову?`);
                        break;
                    } else {
                        playerNum = parseInt(prompt(`Введіть число в проміжку 0-${range}:`));
                        conf = false;
                    }

                case 1:
                    if (playerNum === gameNum) {
                        gameResult += winSecondTry;
                        conf = confirm(`Ви виграли з другої спроби! Ваш виграш становить ${gameResult}$! Спробувати знову?`);
                        break;
                    } else {
                        playerNum = parseInt(prompt(`Введіть число в проміжку 0-${range}:`));
                        conf = false;
                    }

                case 2:
                    if (playerNum === gameNum) {
                        gameResult += winThirdTry;
                        conf = confirm(`Ви виграли з третьої спроби! Ваш виграш становить ${gameResult}$! Спробувати знову?`);
                        break;
                    } else {
                        confNewGame = confirm("Сума виграшу становить 0$! Почати гру з початку?");
                        conf = false;
                        if (confNewGame === true) {
                            alert("Щоб почати нову гру - перезавантажте сторінку!");
                        }
                        break;
                    }

                default:
                    break;

            }

        } while (conf === true)
    }
}


guessingGame();