function queryS(){
    console.log('here')
    const div = document.querySelectorAll('.inner')
    for(let i = 0; i< div.length; i++){
        div[i].style.borderColor = 'red'
    }
    
}

function elementByTag(){
    console.log('anoter')
    const div = document.getElementsByTagName('div')
    console.log(div)
   // div[4].getElementsByTagName('div')[0].style.borderColor = 'red'
    for (let i = 0; i < div.length; i++){
        console.log(div[i].getElementsByTagName('div')[0] !== undefined)

        if (div[i].getElementsByTagName('div')[0] !== undefined ){
            let temp = div[i].getElementsByTagName('div')
            console.log('temp = ' + temp + temp.length)

            for (let j = 0; j < temp.length; j++){
                temp[j].style.borderColor = 'green'
            }
        }
    }
}

function toConsole(){
    console.log(document.getElementById('text').value)
}

function changeColor(){
    const color = document.getElementById('color').value
    console.log(color)
    document.getElementsByTagName('body')[0].style.backgroundColor = color
}

//5

function hasProperty(obj, property){
    return obj.hasOwnProperty(property)
}

function property(){
    const property = document.getElementById('text2').value
    console.log(property)
    const obj = {
        name: 'test',
        age: 33,
        phone: 123456789
    }
    document.getElementById('property').innerHTML = hasProperty(obj, property)
}

function find(){
    let persons = [
        { firstName : "Gosho", lastName: "Petrov", age: 32 },
        { firstName : "Bay", lastName: "Ivan", age: 81 },
        { firstName : "B1", lastName: "I1", age: 100 },
        { firstName : "Gosho2", lastName: "Petrov2", age: 12 },
        { firstName : "Gosho3", lastName: "Petrov3", age: 3 },
      ];
      console.log(persons)
      const obj = persons.reduce((previous, current) => current.age < previous.age ? current : previous)
      document.getElementById('find').innerHTML = `${obj.firstName} ${obj.lastName} ${obj.age}`
}