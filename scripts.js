
var modalLinks = document.getElementsByClassName('modal-link');

for (var i = 0; i < modalLinks.length; i++) {
    modalLinks[i].onclick = modalOpenClick;
}

var modalCloseBtns = document.getElementsByClassName('modal-close-btn');

for (var i = 0; i < modalCloseBtns.length; i++) {
    modalCloseBtns[i].onclick = modalCloseClick;
}

function modalOpenClick(event) {
    event.preventDefault();
    
    var linkElem = event.currentTarget;
    
    var modalTargetId = linkElem.getAttribute('data-modal-target');
    
    var modalTarget = document.getElementById(modalTargetId);
    
    modalTarget.classList.add('active');
}

function modalCloseClick(event) {
    event.preventDefault();
    
    var linkElem = event.currentTarget;
    
    var modalTarget = linkElem.closest('.modal-container');
    
    modalTarget.classList.remove('active');
}


