const array1=["a","A","b","B","c","C","d","D","e","E","f","F"];
const array2=[10,10,11,11,12,12,13,13,14,14,15,15];
let number=document.getElementById("numberBox");
let result=document.getElementById("result");
let resultBox=document.getElementById("resultBox");
let i=0;
//Описание действия кнопок с подсказкой
let prompt1Button=document.getElementById("prompt1");
prompt1Button.addEventListener("click", (e) => {
	alert("Если по нажатию на клавишу Enter ничего не происходит, нажмите на значок =>");
});
let prompt2Button=document.getElementById("prompt2");
prompt2Button.addEventListener("click", (e) => {
	alert("Для того, чтобы перевести дробное шестнадцатеричное число в десятичное, необходимо записать дробное шестнадцатеричное число, убрав точку и затем сверху расставить индексы. Индексы в дробной части числа начинаются от -1 и продолжаются на уменьшение вправо, индексы в целой части начинаются с 0 и ставятся с права на лево по возрастанию. Каждая позиция цифры (индекс) будет степенью числа 16, так как система счисления 16-ичная. Необходимо последовательно умножить каждое число на 16 в степени соответствующей позиции числа и затем сложить с последующим произведением следующего числа в степени соответствующей его позиции.");
});
//Описание функции проверяющей,является ли введённое число шеснадцатиричным
function isHEX(n){
	return(n>='0' && n<='9')||(n>='A' && n<='F')||(n>='a' && n<='f'||n=='.');
}
//Описание функции,проверяющей правильность введённого числа(валидация)
function isValid(str){
	for(i=0;i<str.length;i++){
		if(!isHEX(str[i])){
			return false;
		}
	}
	return true;
}
let part1,part2,j,fracPart,index,part2Sum;
//Описание функции перевода числа
function translate(){
	i=0,part1=0,part2=0,j=0,fracPart=0,index=0,part2Sum=0
	if(number.value.length!=0 && isValid(number.value)){
		if(number.value.includes('.')){
			i=number.value.indexOf('.');
			part1=number.value.slice(0,i);
			part1=parseInt(part1,16);
			fracPart=number.value.slice(i+1,number.value.length);
			for(j=0;j<fracPart.length;j++){
				if(array1.includes(fracPart[j])){
					index=array1.indexOf(fracPart[j]);
					part2=array2[index];
				}
				else{
					part2=fracPart[j];
				}
				part2=Number(part2);
				part2Sum+=part2*Math.pow(16,-(j+1));
			}
			result.innerHTML=part1+part2Sum;
		}
		else{
			result.innerHTML=parseInt(number.value,16);
		}
	}
	else{
		alert("Шестнадцатиричное число может содержать только цифры от 1 до 9,буквы от A до F и точку,если число не целое!");
	}
}
//Событие по нажатию на кнопку Enter
document.addEventListener("keydown", handleKeyPress);
function handleKeyPress(e) {
	// Если нажатая клавиша - Enter,то:
	if (e.which === 13) {
		translate();
		resultBox.style.boxShadow="0 0 2px rgba(202,228,225,0.92),0 0 10px rgba(202,228,225,0.34),0 0 4px rgba(30,132,242,0.52),0 0 7px rgba(30,132,242,0.92),0 0 11px rgba(30,132,242,0.78),0 0 16px rgba(30,132,242,0.92)";
		result.style.textShadow="0 0 2px rgba(202,228,225,0.92),0 0 10px rgba(202,228,225,0.34),0 0 4px rgba(30,132,242,0.52),0 0 7px rgba(30,132,242,0.92),0 0 11px rgba(30,132,242,0.78),0 0 16px rgba(30,132,242,0.92)";
		setTimeout(() => {
			resultBox.style.boxShadow="none";
			result.style.textShadow="none";
		}, 700);
	}
}
//Событие по нажатию на стрелку(на случай,если Enter не работает)
let arrow=document.getElementById("equal");
arrow.addEventListener("click", (e) => {
	translate();
	numberBox.style.boxShadow="none";
		resultBox.style.boxShadow="0 0 2px rgba(202,228,225,0.92),0 0 10px rgba(202,228,225,0.34),0 0 4px rgba(30,132,242,0.52),0 0 7px rgba(30,132,242,0.92),0 0 11px rgba(30,132,242,0.78),0 0 16px rgba(30,132,242,0.92)";
		result.style.textShadow="0 0 2px rgba(202,228,225,0.92),0 0 10px rgba(202,228,225,0.34),0 0 4px rgba(30,132,242,0.52),0 0 7px rgba(30,132,242,0.92),0 0 11px rgba(30,132,242,0.78),0 0 16px rgba(30,132,242,0.92)";
		setTimeout(() => {
			resultBox.style.boxShadow="none";
			result.style.textShadow="none";
		}, 700);
});