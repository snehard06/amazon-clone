document.addEventListener("DOMContentLoaded", function () {

    const allButton = document.getElementById("all-menu-button");

    const sideMenu = document.getElementById("side-menu");

    const overlay = document.getElementById("menu-overlay");

    const closeButton = document.getElementById("close-menu");


    console.log("All button:", allButton);
    console.log("Side menu:", sideMenu);
    console.log("Overlay:", overlay);


    // OPEN MENU
    allButton.addEventListener("click", function () {

        sideMenu.classList.add("active");

        overlay.classList.add("active");

    });


    // CLOSE MENU
    closeButton.addEventListener("click", function () {

        sideMenu.classList.remove("active");

        overlay.classList.remove("active");

    });


    // CLICK OUTSIDE MENU
    overlay.addEventListener("click", function () {

        sideMenu.classList.remove("active");

        overlay.classList.remove("active");

    });


    // ESC KEY
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            sideMenu.classList.remove("active");

            overlay.classList.remove("active");

        }

    });

});