document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cgpaForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('inputboxname').value;
        const university = document.getElementById('university').value;
        const cgpa = parseFloat(document.getElementById('cgpa').value);

        // Validate CGPA
        if (isNaN(cgpa) || cgpa < 0 || cgpa > 4.00) {
            alert("Please enter a valid CGPA between 0.00 and 4.00");
            return;
        }

        // Convert CGPA to percentage
        const percentage = convertCgpaToPercentage(university, cgpa);

        // Convert percentage to German grade
        const germanGrade = convertPercentageToGermanGrade(percentage);

        // Display the result
        const resultContainer = document.getElementById('resultContainer');
        resultContainer.innerHTML = `<p>Hello ${name}, your German grade equivalent is: ${germanGrade}</p>`;
    });

    // Function to convert CGPA to percentage
    function convertCgpaToPercentage(university, cgpa) {
        let percentage;

        if (university === 'du' || university === 'ju' || university === 'jnu') {
            if (cgpa === 4.00) percentage = 80;
            else if (cgpa >= 3.75) percentage = 75 + (cgpa - 3.75) * 20;
            else if (cgpa >= 3.50) percentage = 70 + (cgpa - 3.50) * 20;
            else if (cgpa >= 3.25) percentage = 65 + (cgpa - 3.25) * 20;
            else if (cgpa >= 3.00) percentage = 60 + (cgpa - 3.00) * 20;
            else if (cgpa >= 2.75) percentage = 55 + (cgpa - 2.75) * 20;
            else if (cgpa >= 2.50) percentage = 50 + (cgpa - 2.50) * 20;
            else if (cgpa >= 2.25) percentage = 45 + (cgpa - 2.25) * 20;
            else if (cgpa >= 2.00) percentage = 40 + (cgpa - 2.00) * 20;
            else percentage = 0;
        } 

        return percentage;
    }

    // Function to convert percentage to German grade
    function convertPercentageToGermanGrade(percentage) {
        if (percentage >= 80) return 1.0; // Sehr Gut
        else if (percentage >= 65) return 2.0; // Gut
        else if (percentage >= 50) return 3.0; // Befriedigend
        else if (percentage >= 40) return 4.0; // Ausreichend
        else return 5.0; // Mangelhaft
    }
});
