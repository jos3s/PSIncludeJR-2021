function definirCor(elemento, cor){
	elemento.style.color=cor
}

function colorindoTitulos(div) {
	const titles=div.parentElement.querySelectorAll("h3")
	const title=div.querySelector(".info").querySelector("h3")
	if (!document.documentElement.classList.contains("night")){
		titles.forEach(element => {
			definirCor(element,"hsl(237, 12%, 33%)")
		})
		definirCor(title,"hsl(238, 29%, 16%)")
	}else{
		titles.forEach(element => {
			definirCor(element,"#dcdcdc")
		})
		definirCor(title, "white")
	}
	return title
}

function activeQuestion(video, arrow) {
	video.classList.remove("no-open")
	video.classList.add("active")
	arrow.classList.add("rotate")
}

function disableQuestion(video, title, arrow) {
	video.classList.remove("active")
	if (!document.documentElement.classList.contains("night")){
		definirCor(title, "hsl(237, 12%, 33%)")
	}else{
		definirCor(title,"#dcdcdc" )
	}
	title.classList.remove("info")
	title.classList.add("info")
	arrow.classList.remove("rotate")
}

export {
	definirCor,
	colorindoTitulos,
	activeQuestion,
	disableQuestion,
}