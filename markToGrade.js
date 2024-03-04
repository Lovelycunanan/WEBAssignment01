// @Name: Assignment 1
// @Course Code: SODV1201
// @Class: Software Development Diploma Program
// @Author: Florica Lovely Mae Cunanan  

function convertMarkToGrade() {
    //Get entered value in the input box
    var markInput = document.getElementById('markInputBox').value;

    try {
        //Convert the input value to an integer
        var mark = parseInt(markInput);

        //Check if input is empty
        if (isNaN(mark)) {
            throw "Invalid mark: Please enter a number.";
        }

        //Check if input is valid
        if (mark < 0 || mark > 100) {
            throw "Invalid mark: Mark must be between 0 and 100.";
        }

        //Convert the mark to a letter grade
        var grade = '';
        if (mark >= 90) {
            grade = 'A';
        } else if (mark >= 80) {
            grade = 'B';
        } else if (mark >= 70) {
            grade = 'C';
        } else if (mark >= 50) {
            grade = 'D';
        } else {
            grade = 'F';
        }

        //Display the letter grade
        document.getElementById('gradeResult').innerText = "Your grade is: " + grade;
        document.getElementById('validationMessage').innerText = ""; 
    } catch (error) {
        //Display error
        document.getElementById('validationMessage').innerText = error;
        document.getElementById('gradeResult').innerText = ""; 
    }
}