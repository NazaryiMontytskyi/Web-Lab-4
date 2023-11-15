document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("mobile-menu-button-id");
    var menu = document.getElementById("mobile-menu-id");
    var void_component = document.getElementById("void-component-id");

    toggleButton.addEventListener("click", function() {
        if (menu.style.display === "none" || menu.style.display === "") {
            menu.style.display = "flex";
            void_component.style.display = "block";
        } else {
            menu.style.display = "none";
            void_component.style.display = "none";
        }
    });

    void_component.addEventListener("click",function(){
        if(void_component.style.display === "block")
        {
            menu.style.display = "none";
            void_component.style.display = "none";
        }
    })
});