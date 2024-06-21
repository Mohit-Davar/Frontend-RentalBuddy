//Generation of About Me
const container = document.querySelector('.container')
function generateAboutMe(number, color, text, socialMediaOne, socialMediaTwo, socialMediaOneUrl, socialMediaTwoUrl, name, bgImage) {
    return (
        container.innerHTML = container.innerHTML + `<div id="page${number}" class="h-screen page bg-transparent relative flex items-end justify-center text-white">
               <div class="bg-[${color}] rounded-t-3xl z-10 flex flex-col px-5 lg:px-4 h-[550px] md:h-[70vh] w-svw py-5 lg:py-7">
                   <div class="pagination text-xl hidden lg:block">
                       0${number}/06 
                   </div>
                   <div class="main-body xl:px-10 h-full flex md:flex-row flex-col-reverse xl:justify-center justify-between gap-3">
                       <div class="text xl:w-2/3 xl:justify-between lg:text-xl h-full flex flex-col gap-4">
                           <div class="description w-full flex flex-col gap-[clamp(5px,2vw,10rem)] ">
                               <div class="aboutme xl:w-2/3 ">
                                   ${text}
                               </div>
                               <div class="social-media flex sm:flex-col gap-5 sm:gap-0">
                                   <a href="${socialMediaOneUrl}" class="underline">${socialMediaOne}</a>
                                   <a href="${socialMediaTwoUrl}" class="underline">${socialMediaTwo}</a>
                               </div>
                           </div>
                           <div class="name text-[clamp(1.25rem,3vw,100rem)]">
                               ${name}
                           </div>
                       </div>
                       <div class="image ">
                           <div class="imagecontainer w-[clamp(100px,15vw,100rem)] md:self-center bg-no-repeat bg-center bg-cover aspect-square rounded-full"
                               style="background-image: url(${bgImage});">
                           </div>
                       </div>
                   </div>
               </div>
           </div>`
    )
}
//Declaring Class About
class About {

    constructor(number, color, text, socialMediaOne, socialMediaTwo, socialMediaOneUrl, socialMediaTwoUrl, name, bgImage) {
        this.number = number
        this.color = color
        this.text = text
        this.socialMediaOne = socialMediaOne
        this.socialMediaTwo = socialMediaTwo
        this.socialMediaOneUrl = socialMediaOneUrl
        this.socialMediaTwoUrl = socialMediaTwoUrl
        this.name = name
        this.bgImage = bgImage
    }
}

//Database of Different ClientReviews
const AboutMes = [
    new About("1", "#ffdd00", "Passionate B.Tech IT student at Panjab University with a keen interest in web development and game development. Eager to channel my skills and creativity into crafting immersive gaming experiences while exploring the dynamic world of web technologies. Excited to connect with professionals in  industry and web development community to learn, grow, and contribute to innovative projects.", "LinkedIn", "Github", "https://www.linkedin.com/in/mohit-davar-b85958281/", "https://github.com/Mohit-Davar", "Mohit Davar", "Images/Mohit.jpg"),
    // https://static.wixstatic.com/media/f99c1b_607015b40c5b4ad6b8e10e417debecad~mv2.jpg/v1/fill/w_230,h_230,fp_0.45_0.39,q_80,usm_0.66_1.00_0.01,enc_auto/Kole%20jain.jpg
    new About("2", "#072ac8", "Tech enthusiast | Frontend Developer | Turning code into cool creations | Always ready to learn and eager to work, I'm a first-year student currently diving into backend development. Passionate about solving problems and exploring the digital world, I'm excited to broaden my skills and create impactful solutions from front to back. Let's make tech awesome and accessible for everyone!", "LinkedIn", "Instagram", "https://www.linkedin.com/in/mudit-kumar-80ab63255/", "https://www.instagram.com/arora._.mudit/", "Mudit Arora", "Images/Mudit.jpg "),
    new About("3", "#ffc600", "As a passionate and detail-oriented front-end developer, I specialize in creating visually appealing and highly functional user interfaces. With knowledge in HTML, CSS and JavaScript,  I bring a blend of creativity and technical expertise to projects. My focus is on delivering seamless user experiences, optimizing performance. I thrive in collaborative environments, continuously learning and adapting to new technologies.", "LinkedIn", "Instagram", "https://www.linkedin.com/in/hritik-pundir-a0a556299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "https://www.instagram.com/hritikpundir_?igsh=ajYyeHR6ZWI4cnFt", "Hritik Pundir", "Images/Hritik.jpg "),
    new About("4", "#00296b", "As a passionate technology enthusiast, I am deeply interested in the latest advancements and innovations in the tech world. In my role on a car rental project, I loved working with my teammates and embraced the opportunity to learn new things. I handled documentation, report generation, and contributed to some features of UI/UX design.I am always ready to tackle new challenges.", "LinkedIn", "Instagram", "https://www.linkedin.com/in/gourav-50070a2a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "https://www.instagram.com/_gourav_2006_/", "Gourav Juneja", "Images/Gourav.png"),
    new About("5", "#f77f00", "I'm an enthusiastic web developer who has recently embarked on this exciting journey. With a solid foundation in HTML, CSS. I have been honing my skills in website design and development. I have a keen eye for detail and a passion for crafting user-friendly interfaces. My goal is to continuously learn and improve.", "LinkedIn", "Instagram", "https://www.linkedin.com/in/meenansh-chauhan-835b4a2b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "https://www.instagram.com/__meenansh?igsh=MXV6ZXNtNDFvajI0OQ==", "Meenansh Chauhan", "Images/Meenansh.jpg "),
    new About("6", "#3d0066", "Hello! I'm a friendly and outgoing student currently pursuing my IT studies at Panjab University. With a passion for creativity and technology, I've honed my skills in video editing, UI/UX design, and 3D modeling. I also enjoy playing cricket and engaging in various campus activities. Recently, I’ve embarked on an exciting journey into full stack web development, and I'm eager to collaborate and learn with my peers.", "Youtube", "Instagram", "https://www.youtube.com/@hitanshubansal9871", "https://www.instagram.com/hitanshu.bansal45/", "Hitanshu Bansal", "Images/Hitanshu.jpg"),

]
AboutMes.forEach(AboutMe => {
    generateAboutMe(AboutMe.number, AboutMe.color, AboutMe.text, AboutMe.socialMediaOne, AboutMe.socialMediaTwo, AboutMe.socialMediaOneUrl, AboutMe.socialMediaTwoUrl, AboutMe.name, AboutMe.bgImage)
})


const pages = document.querySelectorAll(".page")
options = {
    root: null,
    threshold: 0,
    rootMargin: "0px"
};
pages.forEach(page => {
    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return
            } else {
                page.style.top = "0px"
                page.style.position = "sticky"
            }
        })
    }, options)
    observer.observe(page.nextElementSibling)
})