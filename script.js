function calculateGearParameters() {
    const teeth = parseInt(document.getElementById('teeth').value);
    const module = parseFloat(document.getElementById('module').value);
    const helixAngle = parseFloat(document.getElementById('helixAngle').value);

    const pitchDiameterMM = module * teeth; // Pitch Diameter in mm
    const baseDiameterMM = pitchDiameterMM * Math.cos(Math.radians(helixAngle)); // Base Diameter in mm
    const outerDiameterMM = pitchDiameterMM + (2 * module); // Outer Diameter in mm

    // Convert dimensions to inches (1 inch = 25.4 mm)
    const pitchDiameterInches = pitchDiameterMM / 25.4;
    const baseDiameterInches = baseDiameterMM / 25.4;
    const outerDiameterInches = outerDiameterMM / 25.4;

    document.getElementById('pitchDiameter').innerText = `Pitch Diameter (mm): ${pitchDiameterMM.toFixed(2)} | (inches): ${pitchDiameterInches.toFixed(2)}`;
    document.getElementById('baseDiameter').innerText = `Base Diameter (mm): ${baseDiameterMM.toFixed(2)} | (inches): ${baseDiameterInches.toFixed(2)}`;
    document.getElementById('outerDiameter').innerText = `Outer Diameter (mm): ${outerDiameterMM.toFixed(2)} | (inches): ${outerDiameterInches.toFixed(2)}`;

    document.getElementById('results').style.display = 'block';
}

// Function to convert degrees to radians
Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
};
