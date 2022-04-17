//switch case to loop through data from employees arr
function generateCards(employees) {
    return employees
        .map(employeesRole => {
            let role = employeesRole.getRole();
            switch (role) {
                case 'Manager':
                    return generateMngrCard(employeesRole);
                    break;
                case 'Engineer':
                    return generateEng(employeesRole);
                    break;
                case 'Intern':
                    return generateInt(employeesRole);
                    break;
            }
        })
        .join('');
};

//generate manager card
function generateMngrCard(manager) {
    return `
    <div class="card">
        <div class="card-body">
            <h4 class="card-title" id="empTitle">Manager</h4>
                <p class="card-text">Name: <span>${manager.name}</span></p>
                <p class="card-text">ID: <span>${manager.id}</span></p>
                <p class="card-text">Contact through: <span><a href='email1@gmail.com'>${manager.email}</a></span></p>
                <p class="card-text">Office: <span>${manager.office}</span></p>
            </div>
        </div>
    `;

};

//generate engineer/intern cards if there are any
function generateEng(engineer) {

    if (!engineer) {
        return '';
    }

    return `
    <div class="card">
        <div class="card-body">
            <h4 class="card-title" id="empTitle">Engineer</h4>
                <p class="card-text">Name: <span>${engineer.name}</span></p>
                <p class="card-text">ID: <span>${engineer.id}</span></p>
                <p class="card-text">Contact through: <span><a href='email1@gmail.com'>${engineer.email}</a></span></p>
                <p class="card-text">GitHub: <span><a href="https://github.com/twitter">${engineer.github}</a></span></p>
        </div>
    </div>
    `;
};

function generateInt(intern) {

    if(!intern) {
        return '';
    }

    return `
    <div class="card">
        <div class="card-body">
            <h4 class="card-title" id="empTitle">Intern</h5>
                <p class="card-text">Name: <span>${intern.name}</span></p>
                <p class="card-text">ID: <span>${intern.id}</span></p>
                <p class="card-text">Contact through: <span><a href='email1@gmail.com'>${intern.email}</a></span></p>
                <p class="card-text">School: <span>${intern.school}</span></p>
        </div>
    </div>
    `;
};

//template html here!
function generateHTML(employees) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Team Roster!</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;1,300&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="../src/style.css">
</head>
<body>
    <!--header here-->
    <header>
        <div class="mx-auto">
            <h1 id="h1header" class="text-center p-3">Your Team</h1>
        </div>
    </header>
    <!--cards/main content here-->
    <main class="container my-auto mt-5 d-inline-flex justify-content-around">
        <!--generate cards here-->
            ${generateCards(employees)}
    </main>
    <!--finito-->
</body>
</html>
    `
};

module.exports = generateHTML;