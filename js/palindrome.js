// inserire una parola
// funzione per capire se palindroma
    let name= prompt('Inserisci una parola').toLowerCase()

function reverse (word){
    let reversedWord=''
    for(let i=word.length -1; i>=0; i--){
        reversedWord += word[i]
        }
    return reversedWord
    }


function isPalindroma (word){
    const reversedWord= reverse(word)
    if(reversedWord=== word){
        return true
    }
    else{
        return false
    }
}

const declaration= isPalindroma(name)

if(declaration === true){
    console.log(`la parola ${name} è palindroma` )
}
else{
    console.log(`la parola ${name} non è palindroma`)
}




