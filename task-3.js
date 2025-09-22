const a = Number(prompt('Число A'))
const b = Number(prompt('Число B'))
const sign = prompt('Операция(*/+-)')

    
    if (isFinite(a)) {
        throw new Error("!Некорректный ввод числа!")
    }
    if (isFinite(b)) {
        throw new Error("!Некорректный ввод числа!")
    }
    if (sign !== '*' && sign !== '/' && sign !== '+' && sign !== '-')
        {
            throw new Error("!Некорректный ввод!")
        }
    
    let result
    
    switch (sign){

        case ('/'):
            if(b === 0)
                {
                    throw new Error("!Делить на 0 нельзя!") 
                }
                
            result = a / b
            break
    
        case ('*'):
            result = a * b
            break
    
        case ('-'):
            result = a - b
            break    
        case ('+'):
            result = a + b
            break        

    }
    console.log(result)