var MyModule;
(function (MyModule) {
    var CalculatorClass = /** @class */ (function () {
        function CalculatorClass() {
        }
        CalculatorClass.calculate = function (firstNumber, operator, secondNumber) {
            firstNumber = parseFloat(firstNumber);
            secondNumber = parseFloat(secondNumber);
            if (operator === 'plus')
                return firstNumber + secondNumber;
            if (operator === 'minus')
                return firstNumber - secondNumber;
            if (operator === 'times')
                return firstNumber * secondNumber;
            if (operator === 'divide')
                return firstNumber / secondNumber;
        };
        return CalculatorClass;
    }());
    MyModule.CalculatorClass = CalculatorClass;
    var calculator = document.querySelector('.calculator');
    var keys = calculator.querySelector('.buttons');
    var display = calculator.querySelector('#display');
    keys.addEventListener('click', function (event) {
        var tar = event.target;
        if (!tar.closest('button'))
            return;
        var key = tar;
        var keyValue = key.textContent;
        var displayValue = display.textContent;
        var type = key.dataset.type;
        var previousKeyType = calculator.dataset.previousKeyType;
        if (type === 'number') {
            if (displayValue === '0' || previousKeyType === 'operator') {
                display.textContent = keyValue;
            }
            else {
                display.textContent = displayValue + keyValue;
            }
        }
        if (type === 'operator') {
            var operatorKeys = keys.querySelectorAll('[data-type="operator"]');
            operatorKeys.forEach(function (el) { return el.dataset.state = ''; });
            key.dataset.state = 'selected';
            calculator.dataset.firstNumber = displayValue;
            calculator.dataset.operator = key.dataset.key;
        }
        if (type === 'equals') {
            var firstNumber = calculator.dataset.firstNumber;
            var operator = calculator.dataset.operator;
            var secondNumber = displayValue;
            display.textContent = CalculatorClass.calculate(firstNumber, operator, secondNumber);
        }
        if (type === 'clear') {
            display.textContent = '0';
            delete calculator.dataset.firstNumber;
            delete calculator.dataset.operator;
        }
        calculator.dataset.previousKeyType = type;
    });
})(MyModule || (MyModule = {}));
