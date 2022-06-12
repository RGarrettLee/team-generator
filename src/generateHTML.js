const managerIco = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup" viewBox="0 0 16 16">
<path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8zM13 2H2v10.5A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V2z"/>
</svg>`;

const engineerIco = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
<path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
<path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
</svg>`;

const internIco = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
<path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
<path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
</svg>`;

function generateCards(data) { // run a for loop to generate card html to a long string and append it to the generate html func
    let members = [];
    let ico = '';
    let uniqueData = '';
    members.push(data.manager);
    data.engineers.forEach(engineer => members.push(engineer));
    data.interns.forEach(intern => members.push(intern));

    let cards = ``;

    for (let i = 0; i < members.length; i++) { // set variables to handle unique member roles
        switch (members[i].getRole()) {
            case 'Manager':
                ico = managerIco;
                uniqueData = `<li class="listTable list-group-item">Office Number: ${members[i].officeNumber}</li>`;
                break;
            case 'Engineer':
                ico = engineerIco;
                uniqueData = `<li class="listTable list-group-item">Github: <a href="${members[i].getGithub()}">${members[i].github} target="_blank"</a></li>`
                break;
            case 'Intern':
                ico = internIco;
                uniqueData = `<li class="listTable list-group-item">School: ${members[i].getSchool()}</li>`
                break;
        }

        cards += `<div class="card col-3 bg-warning m-3 text-center">
<div class="card-header mt-3">
    <h3 class="card-title">${members[i].getName()}</h3>
    <h4>${ico} ${members[i].getRole()}</h4>
</div>
<div class="card-body">
    <ul class="list-group list-group-flush">
        <li class="listTable list-group-item bold">ID: ${members[i].getId()}</li>
        <li class="listTable list-group-item">Email: <a href="mailto: ${members[i].getEmail()}">${members[i].getEmail()}</a></li>
        ${uniqueData}
    </ul>
</div>
</div>

`;
    }

    return cards;
}

function generateHTML(data) { // generate main html file to show off the team profile
    return `<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Team Profile</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="style.css">
    </head>
    <body class="bg-secondary">
        <header class="hero text-center p-5 bg-dark text-light">
            <h1 class="app-title">Team Profile</h1>
        </header>

        <section class="container-fluid mt-5"> <!-- setup bootstrap grid layout -->
            <div class="row justify-content-center">
                ${generateCards(data)}
            </div>
        </section>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
    </body>
</html>`;
}

module.exports = generateHTML;

