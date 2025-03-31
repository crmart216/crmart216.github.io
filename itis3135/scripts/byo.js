document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("introForm");
    const output = document.getElementById('formOutput');
    const addCourseBtn = document.getElementById('addCourseButton');
    const coursesDiv = document.getElementById('courses');

    addCourseBtn.addEventListener('click', () => {
        const courseDiv = document.createElement('div');
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Enter course name';
        input.required = true;

        const delButton = document.createElement('button');
        delButton.type = 'button';
        delButton.textContent = 'Delete';
        delButton.onclick = () => courseDiv.remove();

        courseDiv.appendChild(input);
        courseDiv.appendChild(delButton);
        coursesDiv.appendChild(courseDiv);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // const formData = new FormData(form);
        let outputHTML = `<h2>Your Intro Page:</h2>`;
        
        const formValues = form.querySelectorAll('input[name="notCourse"]');
        const formFiles = form.querySelectorAll('input[type="file"]');
        

        for (let i = 0; i < formValues.length; i++) {
            console.log(formValues[i]);
        }
        
        outputHTML += `<p><strong>Name:</strong> ${formValues[0].value}</p>`;
        outputHTML += `<p><strong>Mascot:</strong> ${formValues[1].value}</p>`;
        outputHTML += `<img id="displayImage" src="#" alt="Uploaded Image" style="display:none; max-width: 400px; margin-top:10px;">`;
        outputHTML += `<p><strong>Image Caption:</strong> ${formValues[2].value}</p>`;
        outputHTML += `<p><strong>Personal Background:</strong> ${formValues[3].value}</p>`;
        outputHTML += `<p><strong>Professional Background:</strong> ${formValues[4].value}</p>`;
        outputHTML += `<p><strong>Academic Background:</strong> ${formValues[5].value}</p>`;
        outputHTML += `<p><strong>Web Development Background:</strong> ${formValues[6].value}</p>`;
        outputHTML += `<p><strong>Primary Platform:</strong> ${formValues[7].value}</p>`;
        
        const courseInputs = coursesDiv.querySelectorAll('input[type="text"]');
        outputHTML += `<p><strong>Courses Currently Taking:</strong><ul>`;
        courseInputs.forEach((input) => {
            outputHTML += `<li>${input.value}</li>`;
        });
        outputHTML += `</ul></p>`;

        outputHTML += `<p><strong>Funny thing:</strong> ${formValues[8].value}</p>`;
        outputHTML += `<p><strong>Anything else:</strong> ${formValues[9].value}</p>`;


        output.innerHTML = outputHTML + '<br><a href="#" onclick="location.reload()">Reset Form</a>';
        form.style.display = 'none';
        /*Loading image into file*/
        const file = formFiles[0].files[0]; // Assumes first file input is your target

        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                const displayImage = document.getElementById('displayImage');
                displayImage.src = e.target.result;
                displayImage.style.display = 'block';
            };

            reader.readAsDataURL(file);
        }

    });

    form.addEventListener('reset', () => {
        coursesDiv.innerHTML = '<button type="button" id="addCourseButton">Add Course</button><br><br>';
    });
});
