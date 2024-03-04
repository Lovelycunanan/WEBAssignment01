//@Name: Assignment 1
// @Course Code: SODV1201
// @Class: Software Development Diploma Program
// @Author: Florica Lovely Mae Cunanan 

$(document).ready(function() {
    // Converts Farenheit to Celcius
    function convertToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }

    // Converts Celsius to Farenheit
    function convertToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }

    // Converts Celsius to Kelvin
    function convertToKelvin(celsius) {
        return celsius + 273.15;
    }


    //Event handler for conversion button
    $('#convertToFahrenheit').click(function() {
        var fahrenheit = $('#fahrenheit').val();
        if (!isNaN(fahrenheit)) { // Checks if input is valid
            var celsius = convertToCelsius(fahrenheit);
            var kelvin = convertToKelvin(celsius);
            $('#celsiusOutput').text(celsius.toFixed(2));
            $('#kelvinOutput').text(kelvin.toFixed(2));
        } else {
            alert('Please enter a valid temperature in Fahrenheit.');
        }
    });
});