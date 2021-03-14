const conteudo=document.querySelectorAll(".contend")

window.addEventListener("DOMContentLoaded", function (el) {
    const video=conteudo[0]
    const title=conteudo[0].parentElement.querySelector('.titleq')
    title.style.color="hsl(238, 29%, 16%)"

    const arrow=conteudo[0].parentElement.querySelector('.arrowDown')
    if(video.classList.contains('no-open')){
        video.classList.remove('no-open')
        video.classList.add('active')
        arrow.classList.add('rotate')
    }
})


window.addEventListener("click", function(el) {
    e=el.target;
    if(e.classList.contains('questionT') || e.classList.contains('arrowDown')){
        const div=e.parentElement.parentElement
        const video=div.querySelector(".contend")
        conteudo.forEach(element => {
            element.classList.add('no-open')
        });
        const titles=div.parentElement.querySelectorAll('.titleq')
        titles.forEach(element => {
            element.style.color="hsl(237, 12%, 33%)"
        });
        const title=div.querySelector('.titleq')
        title.style.color="hsl(238, 29%, 16%)"

        const arrows=div.parentElement.querySelectorAll('.arrowDown')
        arrows.forEach(element => {
            element.classList.remove('rotate')
        });
        const arrow=e.parentElement.querySelector('.arrowDown')
        if(!video.classList.contains('active')){
            if(video.classList.contains('no-open')){
                video.classList.remove('no-open')
                video.classList.add('active')
                arrow.classList.add('rotate')
            }
        }else{
            video.classList.remove('active')
            title.style.color="hsl(237, 12%, 33%)"
            title.classList.remove('titleq')
            title.classList.add('titleq')
            arrow.classList.remove('rotate')
        }

    }
})