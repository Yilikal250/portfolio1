const projects = [

    {
   class1:"firsttDetail",
   class2:"first",
   name:"House Exhibitions",
   class3:"tonic",
   detail:"A house exhibition web used for selling and buying a luxury houses",
   url:"https://yilikal250.github.io/House-Expo/",
  },
  {
    class1:"secondtDetail",
    class2:"second",
    name:"Cars",
    class3:"multi",
    detail:"A Car website that shows cars that are made in Germany and Italy with their date of manufacture and details of their performance",
    url:"https://earnest-chaja-d0f74b.netlify.app",
   },
   {
    class1:"thirdDetail",
    class2:"third",
    name:"Tables",
    class3:"tonic",
    detail:"A Table made for schedule and showig the currently given course in green",
    url:"https://endearing-mousse-a1efdf.netlify.app",
   },
   {
    class1:"fourthDetail",
    class2:"fourth",
    name:"ExersixeWW3",
    class3:"multi",
    detail:"An exersice from ww3 school for practicing the semantics and tags of html ",
    url:"Exersixe.html",
   },



  ];
  
  function renderCards(i) {
    const div = document.createElement('div');
    div.className = 'DetailHolder';
  
    div.innerHTML = `   <div class="${projects[i].class1}">
            
    <div class="${projects[i].class2}">
        <p class="${projects[i].class3}">${projects[i].name}</p>
        <div class="dates">
            <p class="canopy">CANOPY</p>
            <p class="Back">Back End Dev</p>
            <p class="number">2023</p>
        </div>

        <p class="detail">${projects[i].detail}</p>
        <button>html</button> 
        
        <button>css</button>
        <button>javaScript</button> 
        <button  onclick="location.href='${projects[i].url}'" type="button" id="seeProject">See Project</button> 
    </div>

</div> `;

    document.querySelector('.DetailHolder').appendChild(div);
  }

for (let i = 0; i < 6; i += 1) {
  renderCards(i);
}
 
