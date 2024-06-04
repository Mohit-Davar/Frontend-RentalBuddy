//Navbar Floating Elelments
const floatingNavElements = document.querySelectorAll(".floatingNavElement")
floatingNavElements.forEach(Element => {
    const NavButton = Element.querySelector(".section")
    const Original = {
        left: NavButton.style.left,
        top: NavButton.style.top,
        transform: NavButton.style.transform
    }
    const strengthx = 20
    const strengthy = 20
    Element.addEventListener("mousemove", (e) => {
        let rect = Element.getBoundingClientRect();
        let Rect = NavButton.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        if (Rect.x + Rect.width > rect.x + strengthx && Rect.x + strengthx < rect.x + rect.width && Rect.y + strengthy < rect.y + rect.height && Rect.y + Rect.height > rect.y + strengthy) {
            gsap.to(`.${NavButton.classList[0]}`, {
                x: x - 30,
                y: y - 30,
                ease: "power1.out"
            })
        }

    })
    Element.addEventListener("mouseleave", (e) => {
        gsap.to(`.${NavButton.classList[0]}`, {
            x: Original.left,
            y: Original.top,
            duration: 1.5,
            ease: Elastic.easeOut
        })
    })
})


//Hmaburger Menu
let button = document.querySelector(".button-three");
function handleSVGAnimation(){
    const currentState = button.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
        button.setAttribute("data-state", "opened");
        button.setAttribute("aria-expanded", "true");
    } else {
        button.setAttribute("data-state", "closed");
        button.setAttribute("aria-expanded", "false");
    }
}
button.addEventListener("click", () => {
    handleSVGAnimation()
});

let mobileNav = document.querySelector(".mobile");

// Function to toggle mobile navigation
function toggleMobileNav() {
    const isOpen = mobileNav.style.top === '0px';
    mobileNav.style.top = isOpen ? '-100vh' : '0';
    button.style.position = isOpen ? 'absolute' : 'fixed';
}

// Event listener for the hamburger button
button.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent event bubbling
    toggleMobileNav();
});

// Event listener for mobile navigation links
document.querySelectorAll('.mobile .Home, .mobile .Rent, .mobile .Rentable, .mobile .AboutUs, .mobile .ContactUs')
    .forEach(link => {
        link.addEventListener('click', () => {
            toggleMobileNav();
            handleSVGAnimation();
        });
    });

// Event listener to close mobile navigation when clicking outside of it
document.addEventListener('click', (e) => {
    if (mobileNav.style.top === '0px' && !mobileNav.contains(e.target) && e.target !== button) {
        toggleMobileNav();
        handleSVGAnimation();
    }
});
