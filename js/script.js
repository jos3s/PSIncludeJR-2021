import modoNoturno from "./nightMode.js"
import {definirCor, colorindoTitulos, activeQuestion,disableQuestion,} from "./utils.js"
import {nightMode,nightModeStorage,windowsDark,conteudo} from "./elements.js" 


window.addEventListener("DOMContentLoaded", ()=> {
	const video=conteudo[0]
	const title=conteudo[0].parentElement.querySelector(".info")
	if(document.documentElement.classList.contains("night")){
		definirCor(title.querySelector(".questao"),"#ffffff")
	}else{
		definirCor(title,"hsl(238, 29%, 16%)")
	}
	const arrow=conteudo[0].parentElement.querySelector(".arrowDown")
	if(video.classList.contains("no-open")){
		activeQuestion(video, arrow)
	}
})


window.addEventListener("click", function(el) {
	const e=el.target
	if(e.classList.contains("questao") || e.classList.contains("arrowDown")){
		const div=e.parentElement.parentElement
		const video=div.querySelector(".contend")
		conteudo.forEach(element => {
			element.classList.add("no-open")
		})
		
		let iframe=div.querySelector("iframe")
		iframe.contentWindow.postMessage("{\"event\":\"command\",\"func\":\"" + "pauseVideo" + "\",\"args\":\"\"}", "*")

		const title=colorindoTitulos(div)

		const arrows=div.parentElement.querySelectorAll(".arrowDown")
		arrows.forEach(element => {
			element.classList.remove("rotate")
		})
		const arrow=e.parentElement.querySelector(".arrowDown")
		if(!video.classList.contains("active")){
			if(video.classList.contains("no-open")){
				activeQuestion(video,arrow)
			}
		}else{
			disableQuestion(video,title,arrow)
		}

	}
})


if(nightModeStorage=="false"){
	nightMode.checked = false
}else if(windowsDark && nightModeStorage=="true" || !windowsDark && nightModeStorage=="true" || windowsDark && (nightModeStorage=="false" || nightModeStorage==null)){
	modoNoturno()
	nightMode.checked = true
}

nightMode.addEventListener("click", () => {
	modoNoturno()
	if (document.documentElement.classList.contains("night")) {
		localStorage.setItem("gmtNightMode", true)
	}else{
		localStorage.setItem("gmtNightMode", false)
	}
})