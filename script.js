function generateResume() {
    // Fetch values from form inputs
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var linkedin = document.getElementById("linkedin").value;
    var github = document.getElementById("github").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var objective = document.getElementById("objective").value;
    var skills = document.getElementById("skills").value;
    var board = document.getElementById("board").value;
    var institution = document.getElementById("institution").value;
    var yearOfPassing = document.getElementById("yearOfPassing").value;
    var gpaPercentage = document.getElementById("gpaPercentage").value;
    var activities = document.getElementById("activities").value;  // Corrected variable name

    // Create a template based on user input
    var resumeTemplate = `
        <div class="box">
            <div class="header">
                <div class="header-left">
                    <div class="name">
                        <h1 class="first-name">${fullName.split(' ')[0]}</h1>
                        <h1 class="last-name">${fullName.split(' ')[1]}</h1>
                    </div>
                </div>
                <div class="header-right">
                    <div class="email">
                        <p>${email}</p>
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div class="linkedin">
                        <p>${linkedin}</p>
                        <i class="fab fa-linkedin"></i>
                    </div>
                    <div class="github">
                        <p>${github}</p>
                        <i class="fab fa-github"></i>
                    </div>
                    <div class="phone">
                        <p>${phoneNumber}</p>
                        <i class="fas fa-phone"></i>
                    </div>
                </div>
            </div>
            <hr />
            <div class="objective">
                <div class="obj-heading grey">
                    <i class="fas fa-bullseye icon"></i>
                    <h2>Objective</h2>
                </div>
                <p>${objective}</p>
            </div>
            <div class="education">
                <div class="ed-heading grey">
                    <i class="fas fa-school icon"></i>
                    <h2>Education</h2>
                </div>
                <table>
                    <tr>
                        <th>Board</th>
                        <th>Institution</th>
                        <th>Year of passing</th>
                        <th>Percentage/GPA</th>
                    </tr>
                    <tr>
                        <td>${board}</td>
                        <td>${institution}</td>
                        <td>${yearOfPassing}</td>
                        <td>${gpaPercentage}</td>
                    </tr>
                </table>
            </div>
            <div class="skills">
                <div class="skills-heading grey">
                    <i class="fas fa-tools icon"></i>
                    <h2>Skills</h2>
                </div>
                <ul>${skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
            </div>
            <div class="activities">
                <div class="act-heading grey">
                    <i class="fab fa-creative-commons-nd icon"></i>
                    <h2>Activities</h2>
                </div>
                <p>${activities}</p>
            </div>
        </div>
    `;

    // Display the generated resume in the template container
    document.getElementById("generatedResumeContainer").innerHTML = resumeTemplate;
}
