const conteudo=document.querySelectorAll(".contend")

window.addEventListener("DOMContentLoaded", function (el) {
    const video=conteudo[0]
    const title=conteudo[0].parentElement.querySelector('.info')
    if(document.documentElement.classList.contains('night')){
        definirCor(title.querySelector('.questao'),"#ffffff")
    }else{
        definirCor(title,"hsl(238, 29%, 16%)")
    }
    const arrow=conteudo[0].parentElement.querySelector('.arrowDown')
    if(video.classList.contains('no-open')){
        activeQuestion(video, arrow)
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

        const title=colorindoTitulos(div)

        const arrows=div.parentElement.querySelectorAll('.arrowDown')
        arrows.forEach(element => {
            element.classList.remove('rotate')
        });
        const arrow=e.parentElement.querySelector('.arrowDown')
        if(!video.classList.contains('active')){
            if(video.classList.contains('no-open')){
               activeQuestion(video,arrow)
            }
        }else{
            disableQuestion(video,title,arrow)
        }

    }
})

function colorindoTitulos(div) {
    const titles=div.parentElement.querySelectorAll('h3')
    const title=div.querySelector('.info').querySelector('h3')
    if (!document.documentElement.classList.contains('night')){
        titles.forEach(element => {
            definirCor(element,"hsl(237, 12%, 33%)")
        });
        definirCor(title,"hsl(238, 29%, 16%)")
    }else{
        titles.forEach(element => {
            definirCor(element,"#dcdcdc")
        });
        definirCor(title, "white")
    }
    return title
}

function activeQuestion(video, arrow) {
    video.classList.remove('no-open')
    video.classList.add('active')
    arrow.classList.add('rotate')
}

function disableQuestion(video, title, arrow) {
    video.classList.remove('active')
    if (!document.documentElement.classList.contains('night')){
        definirCor(title, "hsl(237, 12%, 33%)")
    }else{
        definirCor(title,"#dcdcdc" )
    }
    title.classList.remove('info')
    title.classList.add('info')
    arrow.classList.remove('rotate')
}

function definirCor(elemento, cor) {
    elemento.style.color=cor
}


const nightMode = document.querySelector('#night-mode')
const nightModeStorage = localStorage.getItem('gmtNightMode')
windowsDark=window.matchMedia("(prefers-color-scheme:dark").matches

if(nightModeStorage=="false"){
    nightMode.checked = false
}else if(windowsDark && nightModeStorage=="true" || !windowsDark && nightModeStorage=="true"){
    modoNoturno()
    nightMode.checked = true
}

nightMode.addEventListener('click', () => {
    modoNoturno()
    if (document.documentElement.classList.contains('night')) {
        localStorage.setItem('gmtNightMode', true)
    }else{
        localStorage.setItem('gmtNightMode', false)
    }
})

function modoNoturno() {
    document.documentElement.classList.toggle('night')
    conteudo.forEach(elemento => {
    if(!elemento.classList.contains("no-open")){
        const title=elemento.parentElement.querySelector('.questao')
        definirCor(title, "white")
    }else{
        conteudo.forEach(element => {
            const title=element.parentElement.querySelector('.questao')
            definirCor(title, "#dcdcdc")
        });
    }
    });
    if (!document.documentElement.classList.contains('night')){
        conteudo.forEach(element => {
            const title=element.parentElement.querySelector('.questao')
            definirCor(title, "hsl(237, 12%, 33%)")
            if (!element.classList.contains('no-open')){
                definirCor(title,"var(--verydark-blue)")
            }
        });
    }
}