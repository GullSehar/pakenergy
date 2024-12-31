function calculateSavings() {
            const electricityBill = parseFloat(document.getElementById('electricity-bill').value);
            const systemSize = parseFloat(document.getElementById('system-size').value);
            const sunlightHours = parseFloat(document.getElementById('sunlight-hours').value);

            if (isNaN(electricityBill) || isNaN(systemSize) || isNaN(sunlightHours)) {
                alert('Please fill in all fields with valid numbers.');
                return;
            }

            
            const efficiency = 0.8; 
            const monthlySavings = electricityBill * 0.7; 
            const paybackPeriod = (systemSize * 150000) / (monthlySavings * 12); 
            const environmentalImpact = systemSize * sunlightHours * 365 * 0.4; 
            const lifetimeSavings = monthlySavings * 12 * 25; 

            
            document.getElementById('monthly-savings').textContent = `Estimated Monthly Savings: PKR ${monthlySavings.toFixed(2)}`;
            document.getElementById('payback-period').textContent = `Estimated Payback Period: ${paybackPeriod.toFixed(1)} years`;
            document.getElementById('environmental-impact').textContent = `CO2 Emissions Saved Annually: ${environmentalImpact.toFixed(2)} kg`;
            document.getElementById('lifetime-savings').textContent = `Total Lifetime Savings: PKR ${lifetimeSavings.toFixed(2)}`;
            document.getElementById('results').style.display = 'block';
        }