
$('.modal-link').each(function(idx, linkElem) {
    $(linkElem).click(modalOpenClick);
});

$('.modal-close-btn').each(function(idx, closeBtnElem) {
    $(closeBtnElem).click(modalCloseClick);
});

function modalOpenClick(event) {
    event.preventDefault();
    
    var modalTargetId = $(this).data('modal-target');
    
    var modalTarget = $('#' + modalTargetId);
    
    modalTarget.addClass('active');
}


function modalCloseClick(event) {
    event.preventDefault();
    
    var modalTarget = $(this).closest('.modal-container');
    
    modalTarget.removeClass('active');
}