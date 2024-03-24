const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    })
})


const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));


    alert("ENG :This is not a real bank page and is only for practicing my skills. PT: Esta não é uma página de um banco real e é apenas para fixar meu conhecimento ")