const price = Number(prompt('Доход'))
const range = prompt('Промежуток времени (month, day, week)')

// TODO добавить проверки валидности данных
if (!Number.isFinite(price)){
    throw new Error("Доход введен некорректно")
}
const formattedPrice = price.toLocaleString('ru', {
    style: "currency",
    currency: "RUB"
})

// TODO добавить преобразование range в переведенный аналог
if ((range !== 'month') && (range !== 'day') && (range !== 'week')){
    throw new Error("промежуток времени введен некорректно")
}

let formattedRange;
if (range === 'month'){
    formattedRange = 'месяц'
}
else if (range === 'day'){
    formattedRange = 'день'
}
else if (range === 'week'){
    formattedRange = 'неделю'
}
const result = `${formattedPrice} в ${formattedRange}`
console.log(result)