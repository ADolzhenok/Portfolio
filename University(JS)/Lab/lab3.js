
function reverse(){
    document.getElementById('rev').innerHTML = document.getElementById('string').value.split("").reverse().join('')
}

function check(){
    let mas = []
    const string = document.getElementById('expression').value.split("")
    let result = null
    string.forEach(element => {
        switch(element){
            case "(":
                mas.push(1)
                break
            case ")":
                if (mas[mas.length - 1] != 1){
                    result = `Скобки помещены неверно`
                }
                mas.pop()
                break
            default:
                break
        }
    });
    if (!result){
        result = `Скобки помещены верно`
    }
    document.getElementById('outcome1').innerHTML = result

}
function count(){
    const text = document.getElementById('text').value.toLowerCase().split("")
    const substr = document.getElementById('substr').value
    let count = 0
    const lenSubstr = substr.length
    let temp = null
    for(let i = 0; i < text.length; i++)
        if (substr.length === 1){
            if (text[i] === substr){
                count++
            }
        }
        else{
            if(text[i] === substr[0]){
                temp = text.slice(i, i+lenSubstr).join('')
                if(temp === substr){
                    count++
                }
            }
        }
    document.getElementById('outcome2').innerHTML = count
}
function change(){
    function mixcase(string){
        var newValue = '';
        for (var i = 0; i < string.length; i++) {
            if(Math.random() > .5){
            newValue += string.charAt(i).toUpperCase();
            } else {
            newValue  += string.charAt(i).toLowerCase();
            }
        }
        return newValue
    }
    function selectCase(string){
        let fullString = ''
        switch (string[1].toLowerCase()){
            case 'u':
                fullString += string.toUpperCase()
                break;
            case 'l':
                fullString += string.toLowerCase()
                break
            case 'm':
                fullString += mixcase(string)
        }
        return fullString
    }
    let str = document.getElementById("text2").value;
    let mas = str.split(' ');
    const oldMas = mas
    let tagName = '';
    let fullString = '';
    let oldIndex = -1
    let len = mas.length
    let newMas = []
    let unusedIndex = []

    console.log(mas)
    for(let i = 0; i < len; i++){
        if (i >= mas.length) {
            mas = mas.concat(oldMas.slice(i))
            fullString += ' '
        }
        console.log(mas)
        console.log(i)
        if (unusedIndex.includes(i)){
            continue;
        }
        if(mas[i][0] === '<' && (mas[i][mas[i].length-1] === '>' || mas[i][mas[i].length-2] === '>')){
            console.log(mas[i])
            mas[i] = selectCase(mas[i])
            fullString += selectCase(mas[i]) + ' '
            console.log('FIRST = ' + fullString)

        }
        else if (mas[i][0] === '<' && (mas[i][mas[i].length-1] !== '>' || mas[i][mas[i].length-2] !== '>')){
            if(oldIndex === -1){
                switch (mas[i][1].toLowerCase()){
                    case 'u':
                        tagName = 'pcase'
                        break;
                    case 'l':
                        tagName = 'wcase'
                        break
                    case 'm':
                        tagName = 'xcase'
                        break
                }
                if (!unusedIndex.includes(oldIndex)){
                    oldIndex = i
                }

            }
                newMas.push(mas[i])
        }
        else if (mas[i][0] !== '<' && (mas[i][mas[i].length-1] === '>' || mas[i][mas[i].length-2] === '>')){
            if ((mas[i].slice((mas[i].length - 6), mas[i].length - 1)).toLowerCase() === tagName ||
            (mas[i].slice((mas[i].length - 7), mas[i].length - 2)).toLowerCase() === tagName){
                console.log('HERE   ' + mas[i].slice(0,(mas[i].length - tagName.length + 5)))
                newMas.push(mas[i].slice(0,(mas[i].length - tagName.length + 5)))
                console.log(newMas)
                console.log(oldIndex)
                let m = mas.slice(0, oldIndex)
                m.push(selectCase(newMas.join(' ')))
                fullString = m.join(' ')
                if (mas.length-1 !== i || fullString === ''){
                    fullString = m.join(' ') + ' ' + (mas.slice(i+1, i+2).join(' '))
                }
                console.log('END = ' + fullString)
                unusedIndex.push(i)
                endIndex = i
                mas = fullString.split(' ')
                i = oldIndex
                oldIndex = -1
                newMas = []
            }
            else{
                newMas.push(mas[i])
            }
        }
        else{
            if (oldIndex === -1)
                fullString += mas[i] + ' '
            else{
                newMas.push(mas[i])
            }
        }
    }
    console.log (fullString)
    fullString = fullString.replace(/(<([^>]+)>)/gi, "")
    document.getElementById('outcome3').innerHTML = fullString

}
function replace(){
    let string = document.getElementById('text3').value
    string = string.replace(/\s/g, '&nbsp;'); 
    document.getElementById('outcome4').innerHTML = string
}

function show(){
    let string = document.getElementById('text4').value
    const doc = new DOMParser().parseFromString(string, "text/xml")
    const $context = doc.querySelector('html')
    console.log($context)
    let str =  $context.textContent.toString()
    str = str.replace(/\s{2,}/g,'')
    console.log(typeof(str))
    //console.log(str.replace(/&nbsp;*\n*/,''))
    document.getElementById('outcome5').innerHTML = str.replace(/\n/g,'')
}

function splitURL(){
    let url = document.getElementById('text5').value.split('/')
    const protocol = url[0]
    const server = url [2]
    const resource = url.slice(3).join('/')
    const json = {
        protocol,
        server,
        resource
    }
    document.getElementById('outcome6').innerHTML = JSON.stringify(json)
}

function replaceTags(){
    let string = document.getElementById('text6').value
    string = string.replaceAll('<a href="', '[URL=');
    string = string.replaceAll('">', ']')
    string = string.replaceAll('</a>', '[/URL]')
    string = string.replaceAll(/(<(^>+)>)/gi, '')
    document.getElementById('outcome7').innerHTML = string
}

function selectEmails(){
    let string = document.getElementById('text7').value.split(' ')
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let emailsMas = []
    for (let i = 0; i < string.length; i++){
        if (string[i].match(regex)){
            emailsMas.push(string[i])
        }
    }
    document.getElementById('outcome8').innerHTML = emailsMas

}
function polindrom(){
    let string = document.getElementById('text8').value
    string = string.replaceAll(',', '')
    string = string.split(' ')
    console.log(string)
    let mas = []
    for(let i = 0; i < string.length; i++){
        console.log(string[i] + '  ' + [...string[i]].reverse().join(""))
        if(string[i] === [...string[i]].reverse().join("")){
            mas.push(string[i])
        }
    }
    console.log(mas)
    document.getElementById('outcome9').innerHTML = mas
}

function stringFormat(){
    var args = arguments; 

   args[0] = args[0].replace(/{([1-9]+)}/g, function (match, index) {
    return typeof args[index] == 'undefined' ? match : args[index];
  });
    document.getElementById('outcome10').innerHTML = args[0]
}

function create(){
    var people = [
        { name: "Шапокляк", age: 55 },
        { name: "Чебурашка", age: 17 },
        { name: "Крыска-Лариска", age: 18 },
        { name: "Крокодильчик", age: 26 },
        { name: "Турист- завтрак крокодильчика", age: 32 },
    ]
    var string = '<html> '+ document.getElementById("text10").value + '</html>';
    const doc = new DOMParser().parseFromString(string, "text/xml")
    const $context = doc.querySelector('html')
    string = $context.textContent.replaceAll(/\s*\n*\s*/g, '')
    let mas = ['<ul>']
    console.log(people)
    for (let i = 0; i < people.length; i++){
        let temp = string
        temp = temp.replaceAll('{name}', people[i].name)
        temp = temp.replaceAll('{age}', people[i].age)
        console.log(temp)
        mas.push('<li>'+temp+'</li>')
    }
    mas.push('</ul>')
    console.log(mas)
    let outcome = mas.join(' ')
    console.log(outcome)
	document.getElementById('outcome11').insertAdjacentHTML('afterbegin', outcome)
}
