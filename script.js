document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('temperatureForm');
    const resultContainer = document.getElementById('resultContainer');
    const resultDisplay = document.getElementById('conversionResult');
    const explanationDisplay = document.getElementById('conversionExplanation');
    const celsiusInput = document.getElementById('celsiusInput');
    const convertButton = document.getElementById('convertButton');
    const resetButton = document.getElementById('resetButton');
    const reverseButton = document.getElementById('reverseButton');

  
    let isCelsiusToFahrenheit = true;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const temperatureInput = parseFloat(celsiusInput.value);

        if (isNaN(temperatureInput)) {
            alert('Masukkan suhu dalam angka!');
            return;
        }

      
        let conversionResult;
        let conversionExplanation;
        if (isCelsiusToFahrenheit) {
            conversionResult = (temperatureInput * 9/5) + 32;
            conversionExplanation = `Formula: Celsius ke Fahrenheit = (Celsius * 9/5) + 32`;
        } else {
            conversionResult = (temperatureInput - 32) * 5/9;
            conversionExplanation = `Formula: Fahrenheit ke Celsius = (Fahrenheit - 32) * 5/9`;
        }

  
        resultDisplay.textContent = `${temperatureInput} °${isCelsiusToFahrenheit ? 'C' : 'F'} = ${conversionResult.toFixed(2)} °${isCelsiusToFahrenheit ? 'F' : 'C'}`;
        explanationDisplay.textContent = conversionExplanation;
        resultContainer.style.display = 'block';
    });

  
    resetButton.addEventListener('click', function() {
        celsiusInput.value = '';
        resultContainer.style.display = 'none';
    });

  
    reverseButton.addEventListener('click', function() {
        isCelsiusToFahrenheit = !isCelsiusToFahrenheit;
        resultContainer.style.display = 'none';
    });
});
