const menuContainer = document.getElementById('contentContainer');

menuContainer.addEventListener('click', function(event) {
    event.stopPropagation();
    menuContainer.style.display = 'block';
});

document.addEventListener('click', function(event){
    if(menuContainer.contains(event.target))
    {
        menuContainer.style.display = 'none';
    }
})