module MyModule {
    export class CalculatorClass {
        static calculate(firstNumber: any, operator: any, secondNumber: any) {
            firstNumber = parseFloat(firstNumber)
            secondNumber = parseFloat(secondNumber)

            if (operator === 'plus') return firstNumber + secondNumber
            if (operator === 'minus') return firstNumber - secondNumber
            if (operator === 'times') return firstNumber * secondNumber
            if (operator === 'divide') return firstNumber / secondNumber
        }
    }

    const calculator: HTMLElement = <HTMLElement>document.querySelector('.calculator')
    const keys: HTMLElement = <HTMLElement>calculator.querySelector('.buttons')
    const display: HTMLElement = <HTMLElement>calculator.querySelector('#display')

    keys.addEventListener('click', event => {
        let tar = event.target as HTMLElement;
        if (!tar.closest('button')) return

        const key = tar
        const keyValue: string = <string>key.textContent
        const displayValue: string = <string>display.textContent
        const { type } = key.dataset
        const { previousKeyType } = calculator.dataset

        if (type === 'number') {
            if (displayValue === '0' || previousKeyType === 'operator') {
                display.textContent = keyValue
            } else {
                display.textContent = displayValue + keyValue
            }
        }

        if (type === 'operator') {
            const operatorKeys = keys.querySelectorAll('[data-type="operator"]')
            operatorKeys.forEach((el) => (el as HTMLElement).dataset.state = '')
            key.dataset.state = 'selected'

            calculator.dataset.firstNumber = displayValue
            calculator.dataset.operator = key.dataset.key
        }

        if (type === 'equals') {
            const firstNumber = calculator.dataset.firstNumber
            const operator = calculator.dataset.operator
            const secondNumber = displayValue

            display.textContent = CalculatorClass.calculate(firstNumber, operator, secondNumber)
        }

        if (type === 'clear') {
            display.textContent = '0'
            delete calculator.dataset.firstNumber
            delete calculator.dataset.operator
        }

        calculator.dataset.previousKeyType = type
    })
}