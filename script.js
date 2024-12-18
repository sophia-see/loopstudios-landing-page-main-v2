let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let isMobile = vw <= 600;
let creationContent = document.getElementById("creations__cards")

let creations = [
    {
        name: "Deep Earth", 
        desktop: "images/desktop/image-deep-earth.jpg", 
        mobile: "images/mobile/image-deep-earth.jpg"
    },
    {
        name: "Night Arcade", 
        desktop: "images/desktop/image-night-arcade.jpg", 
        mobile: "images/mobile/image-night-arcade.jpg"
    },{
        name: "Soccer Team VR", 
        desktop: "images/desktop/image-soccer-team.jpg", 
        mobile: "images/mobile/image-soccer-team.jpg"
    },{
        name: "The Grid", 
        desktop: "images/desktop/image-grid.jpg", 
        mobile: "images/mobile/image-grid.jpg"
    },{
        name: "From Up Above VR", 
        desktop: "images/desktop/image-from-above.jpg", 
        mobile: "images/mobile/image-from-above.jpg"
    },{
        name: "Pocket Borealis", 
        desktop: "images/desktop/image-pocket-borealis.jpg", 
        mobile: "images/mobile/image-pocket-borealis.jpg"
    },{
        name: "The Curiosity", 
        desktop: "images/desktop/image-curiosity.jpg", 
        mobile: "images/mobile/image-curiosity.jpg"
    },{
        name: "Make It Fisheye", 
        desktop: "images/desktop/image-fisheye.jpg", 
        mobile: "images/mobile/image-fisheye.jpg"
    },
];

const creationElements = creations.map((creation) => (
    `
        <div class="creations__item">
            <img class="creations__image" src=${isMobile ? creation.mobile : creation.desktop} alt="picture of ${creation.name}">
            <div class="creations__name">${creation.name}</div>
        </div>
    `
)).join('')

creationContent.innerHTML = creationElements;

[...document.querySelectorAll('.creations__item')].forEach((item) => {
    item.addEventListener('mouseenter', () => {
        item.classList.add("active");
    });
    item.addEventListener('mouseleave', () => {
        item.classList.remove("active");
    })
})
