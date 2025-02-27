function showPage(pageId) {
    let pages = document.querySelectorAll(".page");
    let contentBox = document.getElementById("content");
    let selectedPage = document.getElementById(pageId);

    // Piilotetaan kaikki sivut
    pages.forEach(page => {
        page.style.display = "none";
    });

    // Jos valittu sivu löytyy, tehdään siitä näkyvä
    if (selectedPage) {
        selectedPage.style.display = "block";
        selectedPage.style.opacity = "1"; 
        selectedPage.style.visibility = "visible";
        selectedPage.style.color = "black";
    }

    // *** KORJATAAN MOBIILI-NÄKYMÄ ***
    if (window.innerWidth <= 768) {  
        document.querySelector("header").style.display = "none";
        document.querySelector("nav").style.display = "none";

        // Näytetään valittu sivu oikein
        selectedPage.style.display = "flex";
        selectedPage.style.flexDirection = "column";
        selectedPage.style.alignItems = "center";
        selectedPage.style.justifyContent = "flex-start";
        selectedPage.style.width = "100vw";
        selectedPage.style.height = "100vh";

        // *** PAKOTETAAN SISÄLTÖ NÄKYVIIN ***
        let title = selectedPage.querySelector("h2");
        let content = selectedPage.querySelector("p");

        if (title) {
            title.style.display = "block";
            title.style.color = "black";
        }
        if (content) {
            content.style.display = "block";
            content.style.color = "black";
        }
 // *** Pakotetaan otsikon näkyvyys mobiilissa ***
 if (title) {
    title.classList.add("title-box");
    title.style.display = "block";
    title.style.opacity = "1";
    title.style.visibility = "visible";
}

if (content) {
    content.style.display = "block";
    content.style.opacity = "1";
    content.style.visibility = "visible";
    content.style.color = "black";
}
        // Näytetään myös sisältölaatikko
        contentBox.style.display = "block";
        contentBox.style.width = "100%";
        contentBox.style.height = "100%";
        contentBox.style.padding = "10px";
        contentBox.style.overflowY = "auto";
    } else {
        // Tietokonenäkymä
        document.querySelector("header").style.display = "block";
        document.querySelector("nav").style.display = "flex";
        contentBox.style.display = "block";
    }

    // Vieritetään ylös
    window.scrollTo(0, 0);
}

