function convertMarkToGrade() {
    var markInput = document.getElementById('mark-input-box').value;

    try {
        var mark = parseInt(markInput);
        if (isNaN(mark)) {
            throw "Invalid mark: Please enter a number.";
        }
        if (mark < 0 || mark > 100) {
            throw "Invalid mark: Mark must be between 0 and 100.";
        }

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

        document.getElementById('grade-result').innerText = "Your grade is: " + grade;
        document.getElementById('validation-message').innerText = ""; // Clear validation message
    } catch (error) {
        document.getElementById('validation-message').innerText = error;
        document.getElementById('grade-result').innerText = ""; // Clear grade result
    }
}