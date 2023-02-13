const projects = [

    {
   class1:"firsttDetail",
   class2:"first",
   name:"House Exhibitions",
   class3:"tonic",
   url:"https://yilikal250.github.io/House-Expo/",
  },
  {
    class1:"secondtDetail",
    class2:"second",
    name:"Cars",
    class3:"multi",
    url:"https://earnest-chaja-d0f74b.netlify.app",
   },
   {
    class1:"thirdDetail",
    class2:"third",
    name:"Tables",
    class3:"tonic",
    url:"https://endearing-mousse-a1efdf.netlify.app",
   },
   {
    class1:"fourthDetail",
    class2:"fourth",
    name:"Interests",
    class3:"multi",
    url:"https://scintillating-pony-e1bf5b.netlify.app",
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

        <p class="detail">A daily selection of privately 
           personalized reads; no accounts 
           or sign-ups required.</p>
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
 
