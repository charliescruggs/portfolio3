var title = document.querySelector(".title");
var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

// This function works with the tabbed container
function showPanel(panelIndex,colorCode) {

    title.style.color = colorCode;

    // cycle through tab buttons to add colors and make them selectable
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
    
}

showPanel(0,'#85bf87');

//This function works with the pop up window
let preveiwContainer = document.querySelector('.project-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.column .card').forEach(card =>{
  card.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = card.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.project-preview .preview i').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});