const selectElement = function(element){
    return document.querySelector(element);
};

let menus= selectElement('.menus');
let body= selectElement('body');

menus.addEventListener('click',function(){
    body.classList.toggle('open');
});

