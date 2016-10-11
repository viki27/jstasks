function withoutVowel()
{
	var inputText=document.getElementById("withVowel").value;
	var resultForVowel=inputText.replace(/[aeiou]/ig,'');
	document.getElementById("withoutVowel").innerHTML=resultForVowel.bold();
}

function reverseStr ()
{
	var inputString=document.getElementById("originalString").value;
	var result=inputString.split("").reverse().join('');
	document.getElementById("reverseString").innerHTML=result.bold();
}