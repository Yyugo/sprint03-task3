function mOver(obj) {
	obj.innerHTML = "Mouse on me!";
}
 
function mOut(obj) {
	obj.innerHTML = "Mouse isn't on me!";
}
 
function mDown(obj) {
	obj.style.backgroundColor = "#1ec5e5";
	obj.innerHTML = "I was pressed";
}
 
function mUp(obj) {
	obj.style.backgroundColor="#D94A38";
	obj.innerHTML="Mouse on me!";
}