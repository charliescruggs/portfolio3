var title = document.querySelector(".title");
var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");


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

    //////////////////////////////////////////////////////////////////////////
    // make cards selectble
    let cards = Array.from( document.querySelectorAll('.card') ),
        elements = []

    // Add child nodes to clickable elements
    cards.forEach(card => {
        elements = elements.concat( Array.from(card.children) )
      })

    // Attach to mouse events
    elements.forEach(element => {
        // click: Disable
      element.addEventListener('click', e => e.preventDefault())
      
      // mousedown: Log the timestamp
      element.addEventListener('mousedown', e => {
        let card = e.target.closest(".card")
        card.setAttribute('data-md', Date.now())
      })

      // mouseup: Determine whether to click
      element.addEventListener('mouseup', e => {
        // Only one please
        e.stopPropagation();

        let card = (e.target.classList.contains("card")) ? e.target : e.target.closest('.card'),
            then = card.getAttribute('data-md'),
            now = Date.now()

        // Allow 200ms to distinguish click from non-click
        if(now - then < 200) {
          
            // Visit the link in the card
            // Change 'a' to a class if you have multiple links
            window.location = card.querySelector('a').href
        
            // Remove for production
            card.classList.add('visited')
            console.log(card.querySelector('a').href)
            
          }
        // Clean up
        card.removeAttribute('data-md')
      })
    })
    
}

showPanel(0,'#85bf87');