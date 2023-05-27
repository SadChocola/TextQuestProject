//---------Getting elements.
let images = document.getElementById("images");
let txt = document.getElementById("text");
let input = document.getElementById("input");
let btnbox = document.getElementById("btnbox");
let box = document.querySelector(".box") || document.querySelector(".box_active")
let app = document.querySelector(".app")
let body = document.querySelector("body")

//-----------Creating a variables.
let name;

//-----------Scenario
let scen = {
    first: {
        image: "https://s3.amazonaws.com/colorslive/png/110903-JjAQ4L9_tW4JLy-s.png",
        text: "Вы перенеслись в другую вселенную, вы не знаете тут никого, всё вам незнакомо. К вам подбежала маленькая девочка с яблоком в руках, судя по всему с добрым настроем и спросила: \"Как вас зовут?\""
    },

    second: {
        image: "https://s3.amazonaws.com/colorslive/png/110903-JjAQ4L9_tW4JLy-s.png",
        text: "<br> Девочка: Хмм, у вас очень интересное имя, Твоё Имя! Надеюсь мы с вами подружимся. </br> <br> Вы: Думаю да, ведь я тут всё равно ничего не знаю.</br> <br> Девочка: Идёмте ко мне в школу, у нас скоро начнётся урок математики. </br> <br> Вы: Ноо...</br> <br> Девочка: Если заинтересованы, то идёмте скорее! </br>",
        buttons: [["Ладно,пошли.", "moveNextStep(scen.third)"], ["Нет. (Концовка: Быстро сдаться?)", "moveNextStep(scen.questFail)"]]
    },

    third: {
        image: "https://puzzleit.ru/files/puzzles/219/219048/_original.jpg",
        text: "<br> По дороге в школу этой загадочной девочки вы хотели спросить её имя, но вы никак не могли подобрать момент. </br> <br> Внезапно, вы увидели как кот залез на дерево и не может слезть. </br> <br> Девочка: О боже, бедный котик! </br> <br> Вы: И вправду, залез и слезть не может. </br> <br> Девочка: Твоё Имя, давайте поможем ему? </br>",
        buttons: [["Конечно, давай поможем!", "moveNextStep(scen.fourth)"], ["Нет. (Концовка: Непомощник(-ца))", "moveNextStep(scen.questFail)"]]
    },

    fourth: {
        image: "https://i09.fotocdn.net/s120/0a66a6fb1fd83773/public_pin_l/2747726188.jpg",
        text: "<br> Вы спасли котика и он очень быстро убежал в непонятном направлении. </br> <br> Девочка: Эх... Убежал, даже погладится не дал. </br> <br> Вы: Как тебя зо... </br> <br> Девочка: Вот мы и пришли к моей школе! Урок через минуту, надо поторопится. </br> <br> Вы (В мыслях): Странно это всё, какая-то другая вселенная, маленькая девочка, не говорящая мне своё имя, урок математики... Сколько мне вообще лет в этой вселенной? </br> <br> *Звонок* </br> <br> Девочка: О нет, мы опаздываем, быстрее идите за мной! </br>",
        buttons: [["Идём!", "moveNextStep(scen.fifth)"], ["Я передумал(-а). Нет! (Концовка: Быстро сдаться?)", "moveNextStep(scen.questFail)"]]
    },

    fifth: {
        image: "https://idei.club/uploads/posts/2022-11/1667251561_1-idei-club-p-dizain-kabineta-matematiki-krasivo-1.jpg",
        text: "<br> Вы вошли в класс и увидели полный класс обычных детей и учителя. </br> <br> Учитель: Эмилия! Почему опаздываем на урок?! </br> <br> Девочка(Эмилия): Мы с моим новым другом Твоё Имя спасали котика, который застрял на дереве, извините! </br> <br> Учитель: Раз так, то отделаетесь контрольной работой в паре. </br> <br> Учитель положил листок с контрольной и выдал два листика вам и Эмилии.</br> <br> На листке был вопрос: 9*9-(2*√9+√9) = ? </br>",
        buttons:[["Ответ 72!", "moveNextStep(scen.sixth)"], ["Ответ 69!", "moveNextStep(scen.mathfail)"]]
    },

    sixth: {
        image: "https://idei.club/uploads/posts/2022-11/1667251561_1-idei-club-p-dizain-kabineta-matematiki-krasivo-1.jpg",
        text: "<br> Вы ответили на вопрос вместе с Эмилией, но следом было ещё немного вопросов на которые вам пришлось ответить. </br> <br> 11*11+(100:10*50) </br>",
        buttons:[["Ответ 621!", "moveNextStep(scen.seventh)"], ["Ответ 123!", "moveNextStep(scen.mathfail)"]]
    },

    seventh: {
        image: "https://idei.club/uploads/posts/2022-11/1667251561_1-idei-club-p-dizain-kabineta-matematiki-krasivo-1.jpg",
        text: "<br> Вы ответили на вопрос вместе с Эмилией, но следом был очередной вопрос. </br> <br> 100:(10*10)+(50+59) </br>",
        buttons:[["Ответ 109!", "moveNextStep(scen.eighth)"], ["Ответ 0,47!", "moveNextStep(scen.mathfail)"]]
    },

    eighth: {
        image: "https://idei.club/uploads/posts/2022-11/1667251561_1-idei-club-p-dizain-kabineta-matematiki-krasivo-1.jpg",
        text: "<br> Вы ответили на вопрос вместе с Эмилией, но следом был последний вопрос. </br> <br> 50:25*10 </br>",
        buttons:[["Ответ 250!", "moveNextStep(scen.nineth)"], ["Ответ 0,2!", "moveNextStep(scen.mathfail)"]]
    },

    nineth: {
        image: "https://idei.club/uploads/posts/2022-11/1667251561_1-idei-club-p-dizain-kabineta-matematiki-krasivo-1.jpg",
        text: "<br> Вы сдали парную контрольную работу вместе с Эмилией. </br> <br> Эмилия: Фух, наконец-то мы сдали контрольную. </br> <br> Вы: И правда, вопросы были довольно сложными. </br> <br> Эмилия: Надо бы сидеть тихо, лучше не злить учителя. </br> <br> Вы: Думаю да. </br>",
        buttons:[["Сидеть тихо.", "moveNextStep(scen.tenth)"]]
    },

    tenth: {
        image: "https://idei.club/uploads/posts/2022-11/1667251561_1-idei-club-p-dizain-kabineta-matematiki-krasivo-1.jpg",
        text: "<br> Учитель рассказывал тему из курса алгебры. </br> <br> Тема казалась вам довольно знакомой, но вы будто не могли вспомнить её. </br>",
        buttons:[["Послушать учителя", "moveNextStep(scen.eleventh)"]]
    },

    eleventh: {
        image: "https://idei.club/uploads/posts/2022-11/1667251561_1-idei-club-p-dizain-kabineta-matematiki-krasivo-1.jpg",
        text: "<br> Вы слушали учителя и не заметили как прошёл урок. </br> <br> Из-за того что вы внимательно слушали учителя, вы смогли вспомнить тему, которую преподавал учитель. </br> <br> Это была тема из курса алгебры 8 класса: Квадратные уравнения. </br>",
        buttons:[["Позвать Эмилию прогуляться по коридорам школы.", "moveNextStep(scen.twelfth)"]]
    },

    twelfth: {
        image: "https://idei.club/uploads/posts/2022-11/1667251561_1-idei-club-p-dizain-kabineta-matematiki-krasivo-1.jpg",
        text: "<br> Эмилия: Я не против, всё равно делать нечего, у нас всего 1 урок сегодня. </br> <br> Вы: Странно это, почему у вас только 1 урок? </br> <br> Эмилия: Многие учителя стали заболевать, не знаю чем, но мне кажется это странным. </br>",
        buttons:[["Соглашусь.", "moveNextStep(scen.thirteenth)"]]
    },

    thirteenth: {
        image: "http://kartinkin.net/uploads/posts/2020-07/1595713933_39-p-fon-shkolnii-koridor-55.jpg",
        text: "<br> Вы: Смотри, Эмилия! Маркер и бумажка. </br> <br> Эмилия: Интересно, кто здесь это оставил? В прочем не важно. Слушай, Твоё Имя, давай поиграем в крестики-нолики? У нас как раз есть бумажка и маркер. </br>",
        buttons:[["Давай!.", "moveNextStep(scen.fourteenth)"], ["Нет, не хочу.", "moveNextStep(scen.emiliabegging)"]]
    },

    fourteenth: {
        image: "",
        text: "",
        buttons: [["Начать игру.", "startGame()"]]
    },
    
    fifteenth: {
        image: "http://kartinkin.net/uploads/posts/2020-07/1595713933_39-p-fon-shkolnii-koridor-55.jpg",
        text: "<br> Эмилия: Эх, неприятно проигрывать. </br> <br> Вы: С кем не бывает, проигрывать - значит учится на своих ошибках. </br> <br> Эмилия: Эх... Ладно. </br>",
        buttons: [["Успокоить.", "moveNextStep(scen.sixteenth)"]]
    },

    fifteenth2: {
        image: "http://kartinkin.net/uploads/posts/2020-07/1595713933_39-p-fon-shkolnii-koridor-55.jpg",
        text: "<br> Вы: Эх, неприятно проигрывать. </br> <br> Эмилия: Ура, я победила! </br> <br> Вы: С кем не бывает. </br> <br> Эмилия: Чем займёмся дальше? </br>",
        buttons: [["Пойдём дальше гулять.", "moveNextStep(scen.seventeenth)"]]
    },

    fifteenth3: {
        image: "http://kartinkin.net/uploads/posts/2020-07/1595713933_39-p-fon-shkolnii-koridor-55.jpg",
        text: "<br> Вы: Ну, ничья - так ничья. С кем не бывает. </br> <br> Эмилия: Да, думаю ничья чаще всего происходит в крестиках-ноликах. </br> <br> Вы: Пожалуй соглашусь. </br> <br> Эмилия: Чем займёмся дальше? </br>",
        buttons: [["Пойдём дальше гулять.", "moveNextStep(scen.seventeenth)"]]
    },

    sixteenth: {
        image: "http://kartinkin.net/uploads/posts/2020-07/1595713933_39-p-fon-shkolnii-koridor-55.jpg",
        text: "<br> Вы: Не переживай, Эмилия. Проигрывать это правда нормально, да и в крестиках-ноликах нужно везение в какой то степени </br> <br> Эмилия: Чтож, пожалуй Твоё Имя ты прав(-а). Чем займёмся дальше? </br>",
        buttons: [["Пойдём дальше гулять.", "moveNextStep(scen.seventeenth)"]]
    },

    seventeenth: {
        image: "http://kartinkin.net/uploads/posts/2020-07/1595713933_39-p-fon-shkolnii-koridor-55.jpg",
        text: "<br> Спустя минуту пути. </br> <br> Вы: Эмилия, я чувствую себя странно. </br> <br> Эмилия: Что то случилось? </br> <br> Вы: Да вроде бы нет. Просто ощущение какое то странное появилось, будто я тут нахожусь не по настоящему. </br> <br> Эмилия: Это довольно странно... </br>",
        buttons: [["Ничего страшного, пошли дальше.", "moveNextStep(scen.eighteenth)"]]
    },

    eighteenth: {
        image: "https://mykaleidoscope.ru/uploads/posts/2022-08/1660567865_70-mykaleidoscope-ru-p-spalnaya-komnata-nochyu-dizain-krasivo-fot-74.jpg",
        text: "<br> Практически спустя 10 секунд после конца разговора вы проснулись у себя дома. </br> <br> Вы: Что произошло? Почему я здесь? </br> <br> Вы (В мыслях): Неужели та игра в крестики-нолики и была точкой возврата меня домой? </br> <br> После этого вы просто продолжили жить обычной жизнью, в прочем как и было до этого. (Концовка: [Вселенная Стремится К Порядку]) </br>",
        buttons: [["Завершить игру.", "moveNextStep(scen.final)"]]
    },

    final: {
        image: "https://i.pinimg.com/originals/bf/19/06/bf1906ac80e4318b08bcf2517bdb10e5.jpg",
        text: "Вы прошли Текстовый квест! Надеюсь вам понравилось, кодил я довольно много времени, жаль что не смог сделать больше математики, не было времени.<br> Разработчик квеста: Денис Жариков, 3-JSKB-1.<br> Спасибо за игру!"
    },

    mathfail: {
        image: "https://i.ytimg.com/vi/ZRmDp007M28/maxresdefault.jpg",
        text: "Девочка: Хмм.. Мне кажется это неправильный ответ. Давайте подумаем хорошенько?",
        buttons: [["Хорошо, давай попробуем.", "moveNextStep(scen.fifth)"], ["Нет, я уверен(-а) что ответ правильный", "moveNextStep(scen.mathfailsecond)"]]
    },

    mathfailsecond: {
        image: "https://pro-dachnikov.com/uploads/posts/2023-01/1673081531_pro-dachnikov-com-p-interer-kabineta-v-shkole-foto-71.jpg",
        text: "Учитель: Вы ответили неправильно, ещё и шумите! К директору, живо! (Концовка: Поход к Директору)",
        buttons: [["Идёмте.", "moveNextStep(scen.questFail)"], ["Нет.", "moveNextStep(scen.questFail)"]]
    },

    emiliabegging: {
        image: "",
        text: "<br> Эмилия: Ну пожа-а-алуйста, Твоё Имя! Мне так скучно... </br>",
        buttons: [["Ладно, давай.", "moveNextStep(scen.thirteenth)"], ["Нет. (Концовка: Обидеть Эмилию)", "moveNextStep(scen.questFail)"]]
    },

    questFail: {
        image: "",
        text: "Вы проиграли. Попробовать снова?",
        buttons: [["Да", "moveNextStep(scen.second)"]]
    }
};

//--------------Code + Functions
input.onkeypress = function(event) {
    if (event.key == "Enter" || event.keyCode == 13) {
        name = input.value
        input.parentNode.removeChild(input)
        moveNextStep(scen.second)
    }
}

let moveNextStep = function(s) {
    changeText(s.text)
    changeImage(s.image)
    changeButtons(s.buttons)
}

let changeText = function(words) {
    text.innerHTML = words.replace("Твоё Имя", name)
}

let changeImage = function(img) {
    images.style.backgroundImage = "url("+ img +")"
}

let changeButtons = function(buttonlist) {
    btnbox.innerHTML = "";

    if (buttonlist != undefined) {
        for (let i = 0; i < buttonlist.length; i++) {
            btnbox.innerHTML += "<button onClick=" + buttonlist[i][1] + ">" + buttonlist[i][0] + "</button>"
        }
    }
}

let startGame = function() {
    box.classList.remove("box_active")
    box.classList.add("box")
    app.classList.add("activeApp")
    body.classList.add("activeBody")
}

//---------Tic-Tac-Toe Game
let items = document.getElementsByClassName("app_block")
let movePlayer = true
let moveBot = false
let game = true

//-------------Step (clicking the box)
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() {
        if (!this.classList.contains("active")) {
            if (movePlayer) {
                if (this.innerHTML == "") {
                    this.classList.add("active")
                    this.classList.add("active_x")
                    this.innerHTML = "x"
                }

                let result = checkMap()


                if (result.val) {
                    game = false
                    setTimeout(function() {
                        exit(result)
                    }, 1);
                }

                movePlayer = !movePlayer
                moveBot = !moveBot
            }
            if (game && moveBot && movePlayer == false) {
                setTimeout(function() {
                    botMove()
                }, 1000);
            }
        }
    })
}

//---------------Functions

function getRandomInt(value) {
    return Math.floor(Math.random() * Math.floor(value))
}

function checkMap() {
    let block = document.querySelectorAll(".app_block")
    let items = []

    for (let i = 0; i < block.length; i++) {
        items.push(block[i].innerHTML)
    }

    if (items[0] == "x" && items[1] == "x" && items[2] == "x" ||
    items[3] == "x" && items[4] == "x" && items[5] == "x" ||
    items[6] == "x" && items[7] == "x" && items[8] == "x" ||
    items[0] == "x" && items[3] == "x" && items[6] == "x" ||
    items[1] == "x" && items[4] == "x" && items[7] == "x" ||
    items[2] == "x" && items[5] == "x" && items[8] == "x" ||
    items[0] == "x" && items[4] == "x" && items[8] == "x" ||
    items[6] == "x" && items[4] == "x" && items[2] == "x") {
        return {val: true, win: "Вы"}
    } else if (items[0] == "o" && items[1] == "o" && items[2] == "o" ||
               items[3] == "o" && items[4] == "o" && items[5] == "o" ||
               items[6] == "o" && items[7] == "o" && items[8] == "o" ||
               items[0] == "o" && items[3] == "o" && items[6] == "o" ||
               items[1] == "o" && items[4] == "o" && items[7] == "o" ||
               items[2] == "o" && items[5] == "o" && items[8] == "o" ||
               items[0] == "o" && items[4] == "o" && items[8] == "o" ||
               items[6] == "o" && items[4] == "o" && items[2] == "o") {
        return {val: true, win: "Эмилия"}
    } else if (items.includes("") == 0) {
        return {val: true, win: "Ничья"}
    }
    return {val: false}
}

function botMove() {
    let items = document.querySelectorAll(".app_block:not(.active)")
    let step = getRandomInt(items.length)

    items[step].innerHTML = "o"
    items[step].classList.add("active")
    items[step].classList.add("active_o")
    
    let result = checkMap()
  
    if (result.val) {
        game = false
        setTimeout(function() {
            exit(result)
        }, 1);
    }
    movePlayer = !movePlayer
    moveBot = !moveBot
}

function exit(obj) {
    alert("Игра окончена. Результат игры: " + obj.win)
    onGameEnd()
}

function onGameEnd() {
    let result = checkMap()
    if (game == false && result.win == "Вы") {
        box.classList.remove("box")
        box.classList.add("box_active")
        app.parentNode.removeChild(app)
        body.classList.remove("activeBody")
        moveNextStep(scen.fifteenth)
    } else if (game == false && result.win == "Эмилия") {
        box.classList.remove("box")
        box.classList.add("box_active")
        app.parentNode.removeChild(app)
        body.classList.remove("activeBody")
        moveNextStep(scen.fifteenth2)
    } else if (game == false && result.win == "Ничья") {
        box.classList.remove("box")
        box.classList.add("box_active")
        app.parentNode.removeChild(app)
        body.classList.remove("activeBody")
        moveNextStep(scen.fifteenth3)
    }
}

//--------Starting quest
moveNextStep(scen.first)