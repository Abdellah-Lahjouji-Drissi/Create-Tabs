 const tabs = document.querySelectorAll('.tab-btn');
 const allContent = document.querySelectorAll('.content');
let  UnderLine = document.querySelector('.line');


 tabs.forEach(( tab ,index) => {
     tab.addEventListener("click" , (e)=>{
        tabs.forEach( tab => {
            tab.classList.remove('active');
        } );
        tab.classList.add('active');
        UnderLine.style.width = e.target.offsetWidth + "px";
        UnderLine.style.left = e.target.offsetLeft + "px";
        // allContent[index].classList.add('.active');
        allContent.forEach(content=>{
            content.classList.remove('active');
        });
        allContent[index].classList.add('active');
     })
 });