const clock = document.getElementById("clock");
// const clock = document.querySelector('#clock')
clock.addEventListener('click',()=>{
    setInterval(() => {
        let date = new Date();
        clock.innerHTML = date.toLocaleTimeString()
      }, 1000);
})

