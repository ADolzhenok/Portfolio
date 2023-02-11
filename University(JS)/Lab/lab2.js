function lastNumber(){
   const numberMas =  document.getElementById("number").value.split("")
   const last = +numberMas[numberMas.length - 1]
   console.log(last)
   const mas = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
   document.getElementById('get').innerHTML = mas[last]
}
function reverse(){
    const number = document.getElementById("number2").value.split("")
    console.log(number)
    document.getElementById('rev').innerHTML = number.reverse().join("")
}
function func(){
    var len2func = [];
    for(var i=0; i<arguments.length; i++)
        if(typeof(arguments[i]) == "function")
        len2func[arguments[i].length] = arguments[i];
    return function() {
        return len2func[arguments.length].apply(this, arguments);
    }
}
let wordCount = func(
    function exist(){
        const text = document.getElementById("text").value.toLowerCase()
        const textMas = text.split(' ')
        const len = textMas.length
        const word = document.getElementById("word").value.toLowerCase()
        const count = wordCount(textMas, len, word)
        document.getElementById('find').innerHTML = `Количетво вхождений слова ${word} в текст = ${count}`
    
    },
    function exist(text, len, word){
        let count = 0
        for (let i = 0; i < len; i++){
            if (word === text[i]){
                count++
            }
        }
        console.log(`COUNT2 = ${count}`)
        return count
    }

)
function count (){
    document.getElementById('counting').innerHTML = `Количество тегов div = ${document.getElementsByTagName('div').length}`
}
function numberCount(mas = 0, num = 0, isTest = false) {
    if (!isTest){
        mas = document.getElementById("massive").value.split(' ')
        num = document.getElementById("number3").value
    }
    let count = 0
    mas.forEach(element => {
        if (element === num){
            count++
        }
    });
    if(!isTest){
        document.getElementById('outcome').innerHTML = `Количество вхождений числа ${num} в массив = ${count}`
    }
    else{
        return count
    }
    testNumberCount()
}
function testNumberCount() {
    mas = [2, 4, 5, 5, 6, 5, 8, 5]
    num = 5
    const count = numberCount(mas, num, true)
    count === 4 ? console.log('Функция работает корректно') : console.log('Произошла ошибка')
}

function check(isLast = false){
    let mas = null
    let pos = null
    if (!isLast){
        mas = document.getElementById("massive2").value.split(' ').map(Number)
        pos = +document.getElementById("pos").value
    }
    else{
        mas = document.getElementById("massive3").value.split(' ').map(Number)
    }
    console.log(mas[pos] > mas[pos - 1] && mas[pos] > mas[pos + 1])
    if (!isLast){
        if(pos === 0 || pos === (mas.length - 1)){
            document.getElementById('outcome2').innerHTML = `Данный элемент не находится мужду двумя элементами`
        }
        else{
            switch (mas[pos] > mas[pos - 1] && mas[pos] > mas[pos + 1]){
                case true:
                    document.getElementById('outcome2').innerHTML = `Данный элемент больше, чем его соседи`
                    break
                case false:
                    document.getElementById('outcome2').innerHTML = `Данный элемент меньше, чем его соседи`
                    break
            }
        }
    }
    else{
        mas.some((element, index) => {
            if (index !== 0 && index !== (mas.length - 1)){
                if (element > mas[index - 1] && element > mas[index + 1]){
                    document.getElementById('outcome3').innerHTML = `Позиция = ${index}`
                    return true
                }
            }
            else if (index === mas.length - 1) {
                document.getElementById('outcome3').innerHTML = '-1'
            }
        })
    }
    
}
