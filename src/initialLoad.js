

function loadPage(){
    console.log("Inital Page Load");

    let contents = document.querySelector('#content');

    let welcome = document.createElement('div');
    welcome.classList.add('welcome');
    welcome.textContent = 'Welcome to my Restaurant'

    contents.appendChild(welcome);
}

export {loadPage}