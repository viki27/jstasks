function withoutVowel() {

	var inputText ;
	inputText = document.getElementById("withVowel").value;

	inputText.toLowerCase();

	var resultForVowel = inputText.replace(/[aeiou]/ig,'');

	document.getElementById("withoutVowel").innerHTML = resultForVowel;

}

function reverseStr (){
	
	var inputString ;
	inputString = document.getElementById("originalString").value;
	var result = inputString.split("").reverse().join('');
	document.getElementById("reverseString").innerHTML = result;


}