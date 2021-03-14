const conteudo=document.querySelectorAll(".contend")

window.addEventListener("DOMContentLoaded", function (el) {
    const video=conteudo[0]
    const title=conteudo[0].parentElement.querySelector('.info')
    if(document.documentElement.classList.contains('night')){
        title.querySelector('.questao').style.color="#ffffff"
    }else{
        title.style.color="hsl(238, 29%, 16%)"
    }

    const arrow=conteudo[0].parentElement.querySelector('.arrowDown')
    if(video.classList.contains('no-open')){
        video.classList.remove('no-open')
        video.classList.add('active')
        arrow.classList.add('rotate')
    }
})


window.addEventListener("click", function(el) {
    e=el.target;
    if(e.classList.contains('questao') || e.classList.contains('arrowDown')){
        const div=e.parentElement.parentElement
        const video=div.querySelector(".contend")
        conteudo.forEach(element => {
            element.classList.add('no-open')
        });

        const titles=div.parentElement.querySelectorAll('h3')
        let title=div.querySelector('.info')
        title=div.querySelector('h3')
        if (!document.documentElement.classList.contains('night')){
            titles.forEach(element => {
                element.style.color="hsl(237, 12%, 33%)"
            });
            title.style.color="hsl(238, 29%, 16%)"
        }else{
            titles.forEach(element => {
                element.style.color="#dcdcdc"
            });
            title.style.color="#ffffff"
        }

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
            if (!document.documentElement.classList.contains('night')){
                title.style.color="hsl(237, 12%, 33%)"
            }else{
                title.style.color="#dcdcdc"
            }
            title.classList.remove('info')
            title.classList.add('info')
            arrow.classList.remove('rotate')
        }

    }
})



const nightMode = document.querySelector('#night-mode')
const nightModeStorage = localStorage.getItem('gmtNightMode')
console.log(nightModeStorage);
console.log(window.matchMedia("(prefers-color-scheme:dark").matches);
if(nightModeStorage){
    nightMode.checked = false
}else if(window.matchMedia("(prefers-color-scheme:dark").matches){
    modoNoturno()
    nightMode.checked = true
}else{
    console.log();
    modoNoturno()
    nightMode.checked = true
}


nightMode.addEventListener('click', () => {
    modoNoturno()
    if (document.documentElement.classList.contains('night')) {
        localStorage.setItem('gmtNightMode', true)
        return
    }else{
        localStorage.setItem('gmtNightMode',false)
    }
})

function modoNoturno() {
    document.documentElement.classList.toggle('night')
    conteudo.forEach(elemento => {
    if(!elemento.classList.contains("no-open")){
        const titulo=elemento.parentElement.querySelector('.questao')
        titulo.style.color="white"
    }else{
        conteudo.forEach(element => {
            const titulo=element.parentElement.querySelector('.questao')
            titulo.style.color="#dcdcdc"
        });
    }
    });
    if (!document.documentElement.classList.contains('night')){
        conteudo.forEach(element => {
            const titulo=element.parentElement.querySelector('.questao')
            titulo.style.color="hsl(237, 12%, 33%)"
            if (!element.classList.contains('no-open')){
                titulo.style.color="var(--verydark-blue)"
            }
        });
    }
}