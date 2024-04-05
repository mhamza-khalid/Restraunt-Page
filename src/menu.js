
function addMenu(){

    let contents = document.querySelector('#content');
    
    let menuTitle = document.createElement('div');
    menuTitle.classList.add('menuTitle');
    menuTitle.textContent = 'Menu';

    contents.appendChild(menuTitle);
}

export {addMenu}