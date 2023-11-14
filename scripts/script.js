const toggleButton = document.getElementById('btnimg');
const targetContainer = document.getElementById('mblmn');
var mobileButtonsContainers = document.querySelectorAll('.button-of-mobile-menu');

toggleButton.addEventListener('click', function() {
    if (targetContainer.style.display === 'none') {
        targetContainer.style.display = 'block';
        mobileButtonsContainers.forEach(function(container){
            container.style.display = 'block';
        })
    } else {
        targetContainer.style.display = 'none';
        mobileButtonsContainers.forEach(function(container){
            container.style.display = 'none';
        })
    }
});

