// inserire una parola
// funzione per capire se palindroma
    let name= prompt('Inserisci una parola').toLowerCase()
    let result=false
    let reversedWord=''

function reverse (word){
    for(let i=word.length -1; i>=0; i--){
        reversedWord += word[i]
    }
}

reverse(name)

function isPalindroma (word1,word2){
    if(reversedWord=== name){
        return result = true
    }
    else{
        return result
    }
}

const declaration= isPalindroma(name,reversedWord)

if(declaration === true){
    console.log(`la parola ${name} è palindroma` )
}
else{
    console.log(`la parola ${name} non è palindroma`)
}
console.log(name, reversedWord, result)



