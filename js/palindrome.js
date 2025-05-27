// inserire una parola
// funzione per capire se palindroma



function reverse (word){
    let reversedWord=''
    for(let i=word.length -1; i>=0; i--){
        reversedWord += word[i]
    }
    if(word === reversedWord){
        console.log(true)
    }
    else{
        console.log(false)
    }
}

let name= prompt('Inserisci una parola')
console.log(name)
reverse(name)

