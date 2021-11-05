const button = document.getElementById('toggled');

button.addEventListener('click', function(){
    const list = document.getElementById('navlist')
    if (list.classList.contains('navbar-links')) {
        list.classList.remove('navbar-links');
    } else {
        list.classList.add('navbar-links');
    }
});




const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling
        if(accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight +"px"
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }
    })
})


const contact = document.getElementById("contact");
const list = document.getElementById("dropdown");

list.style.display = "none"

contact.addEventListener("click", () => {
    if (list.style.display == "none") {
        list.style.display = "block"
    } else {
        list.style.display ="none"
    }
})


