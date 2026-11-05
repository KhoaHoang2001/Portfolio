function load_content_from_file(file, element) {
    fetch(file)
        .then(response => response.text())
        .then(data => {element.innerHTML = data;})
        .catch(error => {
            console.error("Error fetching content:", error);
            element.innerHTML = "<p>Error loading content.</p>"
        })
}

function display_content(content) {
    switch(content) {
        case "home":
            contentFile = "home.html";
            break;
        case "resume":
            contentFile = "resume.html";
            break;
        case "projects":
            contentFile = "projects.html";
            break;
        case "about":
            contentFile = "about.html";
            break;
        case "contact":
            contentFile = "contact.html";
            break;
        default:
            contentFile = "home.html";
    }
    load_content_from_file(contentFile, document.getElementById("content_section"))
}

load_content_from_file("navbar.html", document.getElementById("navbar"))
display_content("projects")