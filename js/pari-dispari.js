// scegliere pari o dispari
// inserire numero da 1 a 5
// generare numero random
// stabilire se somma dei due numeri è pari o dispari
// dichiarare il vincitore

const declaration = prompt('Scegli tra pari o dispari').toLowerCase()
const user= parseInt(prompt('inserisci un numero da 1 a 5'))
const computer= getRandomBetween(1,5)
console.log(declaration, user, computer)

function getRandomBetween(min, max) {
	const minCeiled = Math.ceil(min)
	const maxFloored = Math.floor(max)
	return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled) // The maximum is inclusive and the minimum is inclusive
}

let result = ''

function IsTheWinner(a,b){
    const sum = a + b
    if(sum %2 === 0){
        result = 'pari'
    }
    else{
        result='dispari'
    }
    return result
}

IsTheWinner(user,computer)
console.log(result)

if(result === declaration){
    console.log('Hai vinto!!')
}
else{
    console.log('Ha vinto il computer')
}