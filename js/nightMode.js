import {definirCor} from "./utils.js"
import {conteudo} from "./elements.js" 

export default () => {
	document.documentElement.classList.toggle("night")
	conteudo.forEach(elemento => {
		if(!elemento.classList.contains("no-open")){
			const title=elemento.parentElement.querySelector(".questao")
			definirCor(title, "white")
		}else{
			conteudo.forEach(element => {
				const title=element.parentElement.querySelector(".questao")
				definirCor(title, "#dcdcdc")
			})
		}
	})
	if (!document.documentElement.classList.contains("night")){
		conteudo.forEach(element => {
			const title=element.parentElement.querySelector(".questao")
			definirCor(title, "hsl(237, 12%, 33%)")
			if (!element.classList.contains("no-open")){
				definirCor(title,"var(--verydark-blue)")
			}
		})
	}
}
