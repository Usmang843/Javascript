const btns = document.querySelectorAll('.button')
const bdy = document.querySelector('body')


btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        console.log(e.target);
        if(e.target.id === 'grey'){
            bdy.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'white'){
            bdy.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'blue'){
            bdy.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'yellow'){
            bdy.style.backgroundColor = e.target.id
        }
    });
})