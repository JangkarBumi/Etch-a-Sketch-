 
 //create default 16x16 grid
 function sketch(size) {


   let html = document.getElementsByTagName('html')[0];
   html.style.setProperty("--size", size);

 document.getElementById('currentSize').innerHTML = "Current size " + size + "X" + size;


        for(let row=0;row<size*size;row++) {
        const childDiv = document.createElement('div');
    
        document.querySelector('.container').appendChild(childDiv);
    }
        
       let count =document.querySelector('.container').children.length;
    
       //loop through all container children and give it class of box
       for(let i=0;i<=count;i++){
       const c = document.querySelector('.container').children[i]
       
       c.setAttribute('class', 'box')

       //add event listener for hover effect
       c.addEventListener("mouseover", mouseOver);

       function mouseOver() {
           c.style.backgroundColor = "black";
       }
    }
    }

// create new grid based on user input    
    function setSize () {
      size = parseInt(prompt("Please enter your size", "16"));
      demolish()
      sketch(size)
   }

//destroy default grid   
   function demolish() {
    let count =document.querySelector('.container')
    
    // As long as container div has a child node, remove it
    while (count.hasChildNodes()) {   
        count.removeChild(count.firstChild);
    }  
   }


