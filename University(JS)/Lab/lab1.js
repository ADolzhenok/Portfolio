function mass5(){
    const massive = []
    massive.length = 20
    massive.fill(0,0,20)
    document.getElementById('massive').innerHTML = massive.map((el, index) => index * 5).join(' ')
}
function compare(){
    const string1 = document.getElementById('string1').value
    console.log(string1)
    const string2 = document.getElementById('string2').value
    console.log(string2)
    const result = string1 > string2 ? `Первая строка идет после второй (${string2}, ${string1})` : `Вторая строка идет после первой (${string1}, ${string2})`
    document.getElementById('comparing').innerHTML = result
}
function maxSeq(){
    const seq = document.getElementById('sequence').value
    console.log(seq)
    console.log(typeof(seq))
    const seqMassive = seq.split(', ')
    console.log(seqMassive)
    console.log(typeof(seqMassive))
    let number = seqMassive[0]
    let count = 0
    let obj = {}
    for (let i = 0; i <= seqMassive.length; i++){
        if (number === seqMassive[i]){
            count++
        }
        else {
            obj[i-1] = count
            count = 0
            number = seqMassive[i]
            count++
        }
        console.log(`OBJ = ${Object.keys(obj).forEach(key=> {console.log(key, obj[key])})}`)
    }
    let arr = Object.values(obj)
    let max = Math.max(...arr)
    console.log(max)
    const id = +Object.keys(obj).find(key=>obj[key] === max)
    console.log(typeof(id))
    console.log(id + ' ' + max)
    console.log('1=' + seqMassive[id-max+1])
    console.log('2=' + seqMassive[id+1])
    document.getElementById('find').innerHTML = seqMassive.slice(id-max+1, id+1)

}

function maxAscSeq(){
    const seq = document.getElementById('sequence2').value
    console.log(seq)
    const seqMassive = seq.split(', ')
    console.log(`GOT mas = ${seqMassive}`)
    let number = seqMassive[0]
    let count = 1
    let obj = {}
    for (let i = 1; i <= seqMassive.length; i++){
         if (number < seqMassive[i]){
            count++
            number = seqMassive[i]
         }
         else {
            obj[i-1] = count
            count = 1
            number = seqMassive[i]

         }
        console.log(`OBJ = ${Object.keys(obj).forEach(key=> {console.log(key, obj[key])})}`)

    }
    let arr = Object.values(obj)
    let max = Math.max(...arr)
    console.log(max)
    const id = +Object.keys(obj).find(key=>obj[key] === max)
    console.log(typeof(id))
    console.log(id + ' ' + max)
    document.getElementById('find2').innerHTML = seqMassive.slice(id-max+1, id+1)

}
function sortMassive(){
    const stringMas = document.getElementById('sMassive').value
    console.log(stringMas)
    let mas = stringMas.split(' ').map(Number)
    console.log(mas)
    for(let i = 0; i < mas.length - 1; i++){
        let min = i
        for(let j = i+1; j < mas.length; j++){
            if (mas[j] < mas[min]){
                min = j
            }
        }
            if (min != i){
                let temp = mas[i]
                mas[i] = mas[min]
                mas[min] = temp
            }
    }
    document.getElementById('sort').innerHTML = mas
}
function maxNumber(){
    const stringMas = document.getElementById('tMassive').value
    console.log(stringMas)
    let mas = stringMas.split(', ')
    console.log(mas)
    let obj = {}
    let count = 0
    for (let i = 0; i < mas.length; i++){
        if (Object.keys(obj).length === 0){
            count++
            obj[mas[i]] = count
        }
        else if(!obj[mas[i]]){
            count++
            obj[mas[i]] = count
        }
        else if(Object.keys(obj).length >= 1){
            count = obj[mas[i]]
            count++
            obj[mas[i]] = count
        }
        count = 0 
        console.log(i)
    }
    let arr = Object.values(obj)
    let max = Math.max(...arr)
    console.log(max)
    const id = +Object.keys(obj).find(key=>obj[key] === max)
    document.getElementById('find3').innerHTML = `${id} (${max} штук)`
    
}