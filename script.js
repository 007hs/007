function calculateGearParameters() {
    const teeth = parseInt(document.getElementById('teeth').value);
    const module = parseFloat(document.getElementById('module').value);
    const helixAngle = parseFloat(document.getElementById('helixAngle').value);

    const pitchDiameter = module * teeth;
    const baseDiameter = pitchDiameter * Math.cos(Math.radians(helixAngle));
    const outerDiameter = pitchDiameter + (2 * module);

    document.getElementById('pitchDiameter').innerText = `Pitch Diameter: ${pitchDiameter.toFixed(2)}`;
    document.getElementById('baseDiameter').innerText = `Base Diameter: ${baseDiameter.toFixed(2)}`;
    document.getElementById('outerDiameter').innerText = `Outer Diameter: ${outerDiameter.toFixed(2)}`;

    document.getElementById('results').style.display = 'block';
}

// Function to convert degrees to radians
Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
};
