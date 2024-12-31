function calculateSavings() {
      // Get the value of the input field
      var monthlyBill = parseFloat(document.getElementById('monthlyBill').value);
      
      // Check if the input is valid (i.e., not empty and positive number)
      if (isNaN(monthlyBill) || monthlyBill <= 0) {
         document.getElementById('savingsResult').innerHTML = 
            `<p class="text-danger">Please enter a valid positive number for your monthly energy bill.</p>`;
      } else {
         // Calculate annual bill
         var annualBill = monthlyBill * 12;
         
         // Calculate savings (assuming 30% savings with solar energy)
         var savings = (annualBill * 0.3).toFixed(2);
         
         // Display the results to the user
         document.getElementById('savingsResult').innerHTML = 
            `<h4 class="text-success">Estimated Annual Savings: $${savings}</h4>
             <p class="text-muted">By switching to solar energy, you can save approximately $${savings} annually on your energy bills!</p>`;
      }
   }