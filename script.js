let count = 0;

function addJoy(event) {
    event.preventDefault(); // Prevent the form from reloading the page

    const inputField = document.getElementById('positive-experience');
    const inputValue = inputField.value.trim();

    if (inputValue === '') {
        alert('Please enter a positive experience before submitting!');
        return;
    }

    const circle = document.getElementById('circle');
    const leftContainer = document.getElementById('left-container');
    const rightContainer = document.getElementById('right-container');

    // Increment the count
    count++;

    // Update circle size
    const newSize = 100 + count * 10;
    circle.style.width = `${newSize}px`;
    circle.style.height = `${newSize}px`;

    // Update circle color
    const greenIntensity = Math.min(200, 50 + count * 10);
    const circleColor = `rgb(18, ${greenIntensity}, 36)`;
    circle.textContent = count;
    document.documentElement.style.setProperty('--circle-color', circleColor);

    // Create a new div for the experience
    const newDiv = document.createElement('div');
    newDiv.textContent = inputValue;
    newDiv.className = 'experience-div';

    // Append the new div to the left or right container
    if (count % 2 === 0) {
        leftContainer.appendChild(newDiv);
    } else {
        rightContainer.appendChild(newDiv);
    }

    // Clear input field
    inputField.value = '';
}

// Attach the event listener
document.getElementById('positive-experience-form').addEventListener('submit', addJoy);

//Download the positive experiences
document.getElementById('download-btn').addEventListener('click', () => {
    if(count == 0){
        alert("Please enter an experience first.")
    }
    else{

        const captureArea = document.getElementById('content-row');
        
        html2canvas(captureArea).then((canvas) => {
            // Convert canvas to an image
            const link = document.createElement('a');
            link.download = 'screenshot.png'; // Filename for the download
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    }
});
