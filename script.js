const checkboxElement = document.getElementById('menu-checkbox');
const logoElement = document.getElementById('searchButton');
const titleNavElement = document.getElementById('titleNav');    
const navbarlistElement = document.getElementById('listDer');
const navWrapperElement = document.getElementById('nav-wrapper');
const newliElement = document.createElement('li');
newliElement.innerHTML = "MyLovelyTrack";
const searchLiElement = document.getElementById('searchLi');

let burgerClose = true;


checkboxElement.addEventListener('click',function(){
    if (burgerClose){
        logoElement.remove();
        titleNavElement.remove();
        searchLiElement.remove();
        const navbarlistElement = document.getElementById('listDer');
        let nextSibling = document.getElementById("firstLi");
        navbarlistElement.insertBefore(newliElement, nextSibling);
        newliElement.style.fontSize = "2rem";
        burgerClose = false
    }
    else{
        navWrapperElement.appendChild(titleNavElement);
        navWrapperElement.appendChild(logoElement);
        newliElement.remove();
        burgerClose = true;
    }     
})
