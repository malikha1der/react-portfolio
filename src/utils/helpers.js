
// Smooth scroll function

export function scrollToSection(id) {


    const element = document.getElementById(id);



    if(element){


        element.scrollIntoView({

            behavior:"smooth"

        });


    }


}







// Text short karne ke liye

export function truncateText(
    text,
    limit
){


    if(text.length <= limit){

        return text;

    }



    return text.substring(0, limit) + "...";


}







// Current year return karega

export function getCurrentYear(){


    return new Date().getFullYear();


}







// External links open karne ke liye

export function openLink(url){


    window.open(

        url,

        "_blank"

    );


}