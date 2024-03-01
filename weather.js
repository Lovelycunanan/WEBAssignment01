//@Name: Assignment 1
// @Course Code: SODV1201
// @Class: Software Development Diploma Program
// @Author: Florica Lovely Mae Cunanan 

$(document).ready(function() {
    function convertToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }

    function convertToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }

    function convertToKelvin(celsius) {
        return celsius + 273.15;
    }

    $('#convertToFahrenheit').click(function() {
        var fahrenheit = $('#fahrenheit').val();
        if (!isNaN(fahrenheit)) {
            var celsius = convertToCelsius(fahrenheit);
            var kelvin = convertToKelvin(celsius);
            $('#celsiusOutput').text(celsius.toFixed(2));
            $('#kelvinOutput').text(kelvin.toFixed(2));
        } else {
            alert('Please enter a valid temperature in Fahrenheit.');
        }
    });
});