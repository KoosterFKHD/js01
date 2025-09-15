const temp = +prompt('Температура')
const weather = prompt('Погода (clear/cloudy)')

// TODO добавить проверку валидности данных
if(!Number.isFinite(temp)){
    throw new Error("Температура введена некорректно")
}
if(weather !== clear || cloudy){
    throw new Error("Погода введена некорректно")
}
let result

// TODO добавить проверки погоды и температуры
if (temp == 25 && weather === 'clear'){
    result = 'golf'
}
else if (temp == 25 && weather === 'clear'){
    result = 'golf'
}
console.log(result)