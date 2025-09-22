const word = prompt("Ваше слово")

const wordLength = word.length //длина
wordLength ** 0.5 //корень
Math.pow(wordLength, 0.5) //корень
Math.sqrt(wordLength) //корень

let result

if(Math.trunc(wordLength ** 0.5) === wordLength ** 0.5)
{
    result = 1
}
else
{
    result = 0
}
 //дописать логику []:

console.log(result)