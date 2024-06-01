
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
