const checkboxElement = document.getElementById('menu-checkbox');
const logoElement = document.getElementById('searchButton');
const titleNavElement = document.getElementById('titleNav');    
const navbarlistElement = document.getElementById('listDer');

let burgerClose = true;

checkboxElement.addEventListener('click',function(){
    if (burgerClose){
        logoElement.remove();
        titleNavElement.remove();
        const newliElement = document.createElement('li');
        newliElement.innerHTML = "MyLovelyTrack";
        const navbarlistElement = document.getElementById('listDer');
        let nextSibling = document.getElementById("firstLi");
        navbarlistElement.insertBefore(newliElement, nextSibling);
        newliElement.style.fontSize = "2rem";
        burgerClose = false;
        const newTitle = document.createElement('h2');
        newliElement.innerHTML = "MyLovelyTrack";
    }
    else{
        newliElement.remove();
        
        burgerClose = true;
    }     
})
