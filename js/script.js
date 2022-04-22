
window.addEventListener("load", () => {
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    /*page loader*/

    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(() =>{
        document.querySelector(".page-loader").style.display = "none";


    },600);
});






//*toggle navbar*//

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () =>{
  hideSection();
  toggleNavbar();
  document.body.classList.toggle("hide-scrolling");
});
function hideSection(){
document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}

/*--active section--*/
document.addEventListener("click",(e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !==""){
        //activate overlay to prevent multiple clicks*/
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
           toggleNavbar();
        }
        else{
          hideSection();
          document.body.classList.add("hide-scrolling");
        }
        setTimeout(() =>{
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        },500);
    }
});




/*--------------portofolio------*/
document.addEventListener("click",(e) =>{
    if(e.target.classList.contains("view-project-btn")){
        toggleportfoliopopup();
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioitemdetails(e.target.parentElement);
    }

})
function toggleportfoliopopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", toggleportfoliopopup);

/*hide popup when click outside*/
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("pp-inner")){
        toggleportfoliopopup();
    }
});



function  portfolioitemdetails(portfolioitem){
    document.querySelector(".pp-thumbnail img").src=
    portfolioitem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML =
    portfolioitem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML =
    portfolioitem.querySelector(".portfolio-item-details").innerHTML;
}






