let str = document.getElementById("inputStr");
let btnReverse = document.getElementById("btn-reverse");
let reversed = document.getElementById("displayReversed")


const reverseStr = function (){
	const splitStr =(str.value).split("")
	const show = splitStr.reverse()
	const text = show.join("")
	reversed.innerHTML = text;
}

btnReverse.addEventListener("click",reverseStr)

