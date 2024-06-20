document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cgpaForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Fetch inputs
      const name = document.getElementById('inputboxname').value;
      const university = document.getElementById('university').value;
      const cgpa = parseFloat(document.getElementById('cgpa').value);
  
      // Convert CGPA to German grade
      const germanGrade = convertToGermanGrade(university, cgpa);
  
      // Display result
      displayResult(name, germanGrade);
    });
  
    // Function to convert CGPA to German grade
    function convertToGermanGrade(university, cgpa) {
      const gradeMappings = {
        du: { // Dhaka University
          'A+': 4.00,
          'A': 3.75,
          'A-': 3.50,
          'B+': 3.25,
          'B': 3.00,
          'B-': 2.75,
          'C+': 2.50,
          'C': 2.25,
          'D': 2.00,
          'F': 0.00
        },
        ju: { // Jagannath University (same mappings as Dhaka University)
          'A+': 4.00,
          'A': 3.75,
          'A-': 3.50,
          'B+': 3.25,
          'B': 3.00,
          'B-': 2.75,
          'C+': 2.50,
          'C': 2.25,
          'D': 2.00,
          'F': 0.00
        },
        jnu: { // Jahangir Nagar University (same mappings as Dhaka University)
          'A+': 4.00,
          'A': 3.75,
          'A-': 3.50,
          'B+': 3.25,
          'B': 3.00,
          'B-': 2.75,
          'C+': 2.50,
          'C': 2.25,
          'D': 2.00,
          'F': 0.00
        }
      };
  
      // Get the grade scale for the selected university
      const gradeScale = gradeMappings[university];
  
      // Determine the German grade based on CGPA
      let germanGrade;
      if (cgpa >= gradeScale['A+']) {
        germanGrade = 1; // Sehr Gut (Very good)
      } else if (cgpa >= gradeScale['A']) {
        germanGrade = 2; // Gut (Good)
      } else if (cgpa >= gradeScale['B']) {
        germanGrade = 3; // Befriedigend (Satisfactory)
      } else if (cgpa >= gradeScale['D']) {
        germanGrade = 4; // Ausreichend (Sufficient, pass)
      } else {
        germanGrade = 5; // Mangelhaft (Insufficient, fail)
      }
  
      return germanGrade;
    }
  
    // Function to display the result
    function displayResult(name, germanGrade) {
      const resultContainer = document.getElementById('resultContainer');
      const gradeWords = ['Sehr Gut', 'Gut', 'Befriedigend', 'Ausreichend', 'Mangelhaft'];
  
      // Clear previous result if any
      resultContainer.innerHTML = '';
  
      // Create and append result message
      const resultMessage = document.createElement('p');
      resultMessage.textContent = `${name}, your German grade equivalent is: ${gradeWords[germanGrade - 1]}`;
      resultContainer.appendChild(resultMessage);
    }
  });
  