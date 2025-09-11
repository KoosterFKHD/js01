/**
 * 
 * 
 * 
 */
const price = Number(prompt('Доход'))
const range = prompt('Промежуток времени (month, day, week)')

// TODO добавить проверки валидности данных

const formattedPrice = price.toLocaleString('ru', {
    style: "currency",
    currency: "RUB"
})

// TODO добавить преобразование range в переведенный аналог

const result = `${formattedPrice} в ${range}`
console.log(result)