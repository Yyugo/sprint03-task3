// function mOver(obj) {
// 	obj.innerHTML = "Mouse on me!";
// }
 
// function mOut(obj) {
// 	obj.innerHTML = "Mouse isn't on me!";
// }
 
// function mDown(obj) {
// 	obj.style.backgroundColor = "#1ec5e5";
// 	obj.innerHTML = "I was pressed";
// }
 
// function mUp(obj) {
// 	obj.style.backgroundColor="#D94A38";
// 	obj.innerHTML="Mouse on me!";
// }


const butt = document.getElementById('butt');

butt.addEventListener("click", function(){
	document.getElementById("window").innerText += 'I was pressed' + "\n";
	console.log("I was pressed");
});

butt.addEventListener("mouseover", function(){
	document.getElementById("window").innerText += 'Mouse on me'+ "\n";
	console.log("Mouse on me");
});

butt.addEventListener("mouseout", function(){
	document.getElementById("window").innerText += 'Mouse is not on me!'+ "\n";
	console.log("Mouse on me");
}); 

