//your JS code here. If required.
const container=document.querySelector(".grid-container");
const resetBtn=document.getElementById("reset_button");
function createGridItems(){
	for(let i=1;i<=9;i++){
	 let div=document.createElement("div");
	  let para=document.createElement("p");
		para.innerText=i;
	  div.id=`${i}`;
		div.className="grid-item";
		div.appendChild(para);
	  container.appendChild(div);
	}
	
}
createGridItems();
const gridItems=document.querySelectorAll(".grid-item");
console.log(gridItems);
const form=document.getElementById("form");
form.addEventListener("submit",(e)=>{
	e.preventDefault();
	alert("submitted");
	let boxNo=document.getElementById("block_id").value;
	let color=document.getElementById("colour_id").value;
	let targetBox=document.getElementById(boxNo);
	removeBgColor();
	targetBox.style.backgroundColor=color;
	form.reset();
});

function removeBgColor(){
gridItems.forEach((grid)=>{
	grid.style.backgroundColor="transparent";
})
}
resetBtn.addEventListener("click",(e)=>{
	e.preventDefault();
removeBgColor();
})