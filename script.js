document.addEventListener("DOMContentLoaded", () => {
    // Dynamically highlights active navigation tab based on URL path
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href");
        if (linkPath === currentPath || (currentPath === "" && linkPath === "index.html")) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    console.log("Appliance Energy Consumption site initialized.");
});