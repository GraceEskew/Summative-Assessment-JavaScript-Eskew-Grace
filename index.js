/*CREATE AN ARRAY OF BOOK OBJECTS OUTSIDE OF EVERYTHING
YOU WILL NEED TO LOOP THROUGH (FOR LOOP) TO DISPLAY
LOOK INTO .MAP
CALL DOWN THE INDEX IN BOOKLISTCOMP. REMEBER - TITLE: Norse..
CONSOLE - E TO REVIEW*/

//ARRAY OF BOOK OBJECTS
let Books = [
    {
        id: 1,
        title: "Norse Mythology",
        cover: "NorseMythology.jpg",
        plot: "NORSEPLOT"
    },

    {
        id: 2,
        title: "Fables The Deluxe Edition Book One",
        cover: "Fables.jpg",
        plot: "FablesPlot"
    },

    {
        id: 3,
        title: "Le Morte D'Arthur",
        cover: "leMorte.jpg",
        plot: "ArthurPlot"
    },

    {
        id: 4,
        title: "The Hunt for Red October",
        cover: "RedOctober.jpg",
        plot: "OctoberPlot"
    },

    {
        id: 5,
        title: "The Fellowship of The Ring",
        cover: "Fellowship.jpg",
        plot: "RingPlot"
    }
]

//Array.map(i(aka the whole object) => console.log(${}))
// prints all info to console, but in groups of 5
// Books.map(i => console.log(Books[0])) 



class HeaderComponent {
    constructor() {
        this.template = `
    <header>    
        <div class="jumbotron">
            <h1 class="display-4">My Favorite Books!</h1>
        </div>  
    </header>
        `
    }
}

class BtnComponent {
    constructor(id) {
        this.template = `
        <a href="#" id = showButton class="btn btn-primary">Show Plot</a>
        `
    }
}


document.addEventListener("click", function(e) {
    console.log(e) // CONSOLE LOG E HERE IF YOU WANT TO REVIEW INSPECT
    if(e.target && e.target.id == "showButton") {
        this.template = `
        <a href="#" id = "showButton" class="btn btn-danger">Hide Plot</a>
        `
    } else if(e.target && e.target.id !== this.id){
        this.template = `
        <a href="#" id = "hideButton" class="btn btn-primary">Show Plot</a>
        `
    }
})

class PlotComponent {
    constructor(plot) {
        this.plot = plot;
        this.template = `
    
        <div class=descript">
            <h4> Description </h4>
            <p class="card-text">${this.plot}</p>   
        </div>
        `
    }
}
        
class BookComponent {
    
    constructor(id, cover, title) {
        this.id = id;
        this.cover = cover;
        this.title = title;
        this.template = `
        <div class="card" style="width: 14rem;">
        <img class="card-img-top" src=${this.cover} alt="coverArt"> 
            <div class="card-body">
            <h5 class="card-title">${this.title}</h5>
            ${new BtnComponent(this.id).template}
            </div>
        `
    }
}

class BookListComponent {
    
    template = `
      <div>
            
      ${new BookComponent(Books[0].id, Books[0].cover, Books[0].title).template}
      ${new BookComponent(Books[1].id, Books[1].cover, Books[1].title).template}
      ${new BookComponent(Books[2].id, Books[2].cover, Books[2].title).template}
      ${new BookComponent(Books[3].id, Books[3].cover, Books[3].title).template}
      ${new BookComponent(Books[4].id, Books[4].cover, Books[4].title).template}

      </div>
    `
}

//Error Msg - cannot read property
//${Books.map(i => new BookComponent(i).template).join('')}
//${this.Books.map(i => new BookComponent(i).template).join('')}




//USE FILTER WITH ID TO PICK WHICH PLOT TO GRAB

// class PlotListComponent {
//     template = `
//     <div>
//     ${new PlotComponent("TEST 1").template}
//     ${new PlotComponent("TEST 2").template}
//     ${new PlotComponent("TEST 3").template}
//     ${new PlotComponent("TEST 4").template}
//     ${new PlotComponent("TEST 5").template}
//     </div>
//     `
// }
   
  document.getElementById('root').innerHTML = `${new HeaderComponent().template} ${new BookListComponent().template}`;
  
  document.getElementById('descript').innerHTML = `${new PlotComponent(this.plot).template}`















  // //INITIAL PAGE LOAD - ALL BOOKS (Code is demo'ing the very, very long way)
// document.getElementById("root").innerHTML= `

//     <div class="card" style="width: 14rem;">
//         <img class="card-img-top" src="NorseMythology.jpg" alt="norseCover">
//         <div class="card-body">
//             <h5 class="card-title">${this.title}<br><br></h5>
//             <a href="#" id = "plotBtn1" class="btn btn-primary">Show Plot</a>
//         </div>
//     </div>

//     <div class="card" style="width: 14rem;">
//         <img class="card-img-top" src="Fables.jpg" alt="fablesCover">
//         <div class="card-body">
//             <h5 class="card-title">Fables: The Deluxe Edition Book One</h5>
//             <a href="#" id = "plotBtn3" class="btn btn-primary">Show Plot</a>
//         </div>
//     </div>

//     <div class="card" style="width: 14rem;">
//         <img class="card-img-top" src="leMorte.jpg" alt="leMorteCover">
//         <div class="card-body">
//             <h5 class="card-title">Le Morte D'Arthur<br><br></h5>
//             <a href="#" id = "plotBtn5" class="btn btn-primary">Show Plot</a>
//         </div>
//     </div>

//     <div class="card" style="width: 14rem;">
//         <img class="card-img-top" src="RedOctober.jpg" alt="RedOctoberCover">
//         <div class="card-body">
//             <h5 class="card-title">The Hunt for <br>Red October</h5>
//             <a href="#" id = "plotBtn7" class="btn btn-primary">Show Plot</a>
//         </div>
//     </div>

//     <div class="card" style="width: 14rem;">
//         <img class="card-img-top" src="Fellowship.jpg" alt="FellowshipCover">
//         <div class="card-body">
//             <h5 class="card-title">The Fellowship of The Ring</h5>
//             <a href="#" id = "plotBtn9" class="btn btn-primary">Show Plot</a>
//         </div>
//     </div>

//     <h4>Description</h4>
// `

// //CLICK EVENT - BOOK 1 NORSE MYTHOLOGY ******************************************************************************

// document.addEventListener("click", function(e) {
//     if(e.target && e.target.id == "plotBtn1"){
//         document.getElementById("root").innerHTML = `
//             <div class="card" style="width: 14rem;">
//                 <img class="card-img-top" src="NorseMythology.jpg" alt="norseCover">
//                 <div class="card-body">
//                     <h5 class="card-title">Norse Mythology<br><br></h5>
//                     <a href="#" id="plotBtn2" class="btn btn-danger">Hide Plot</a>
//                 </div>
//             </div>

//             <div class="card" style="width: 14rem;">
//                 <img class="card-img-top" src="Fables.jpg" alt="fablesCover">
//                 <div class="card-body">
//                     <h5 class="card-title">Fables: The Deluxe Edition Book One</h5>
//                     <a href="#" id = "plotBtn4" class="btn btn-primary">Show Plot</a>
//                 </div>
//             </div>

//             <div class="card" style="width: 14rem;">
//                 <img class="card-img-top" src="leMorte.jpg" alt="leMorteCover">
//                 <div class="card-body">
//                     <h5 class="card-title">Le Morte D'Arthur<br><br></h5>
//                     <a href="#" id = "plotBtn6" class="btn btn-primary">Show Plot</a>
//                 </div>
//             </div>

//             <div class="card" style="width: 14rem;">
//                 <img class="card-img-top" src="RedOctober.jpg" alt="RedOctoberCover">
//                 <div class="card-body">
//                     <h5 class="card-title">The Hunt for <br>Red October</h5>
//                     <a href="#" id = "plotBtn8" class="btn btn-primary">Show Plot</a>
//                 </div>
//             </div>

//             <div class="card" style="width: 14rem;">
//                 <img class="card-img-top" src="Fellowship.jpg" alt="FellowshipCover">
//                 <div class="card-body">
//                     <h5 class="card-title">The Fellowship of The Ring</h5>
//                     <a href="#" id = "plotBtn10" class="btn btn-primary">Show Plot</a>
//                 </div>
//             </div>

//             <div class="plotBox>
//                 <h4>Description</h4>
//                 <br>
//                 <p class="card-text">Neil Gaiman, long inspired by ancient mythology in creating the fantastical 
//                 realms of his fiction, presents a bravura rendition of the Norse gods and their world from their 
//                 origin though their upheaval in Ragnarok.
//                 <br>
//                 <br>

                
//                 &nbsp &nbsp &nbsp In Norse Mythology, Gaiman stays true to the myths in envisioning the major Norse pantheon: 
//                 <ul>
//                     <li>Odin, the highest of the high, wise, daring, and cunning;</li> 
//                     <li>Thor, Odin’s son, incredibly strong yet not the wisest of gods;</li> 
//                     <li>and Loki―son of a giant―blood brother to Odin and a trickster and unsurpassable manipulator.</li>
//                 </ul>
                
//                 &nbsp &nbsp &nbsp   Gaiman fashions these primeval stories into a novelistic arc that begins with the genesis of the legendary 
//                 nine worlds and delves into the exploits of deities, dwarfs, and giants. 
//                 <br>
//                 <br> Through Gaiman’s deft and witty prose, 
//                 these gods emerge with their fiercely competitive natures, their susceptibility to being duped and 
//                 to duping others, and their tendency to let passion ignite their actions, making these long-ago myths 
//                 breathe pungent life again.</p>
//             </div>
//             `


//     //CLICK EVENT: BOOK 2 FABLES **************************************************************************************************

//     } else if(e.target && e.target.id == "plotBtn3") {
//         document.getElementById("root").innerHTML = `
//         <div class="card" style="width: 14rem;">
//             <img class="card-img-top" src="NorseMythology.jpg" alt="norseCover">
//             <div class="card-body">
//                 <h5 class="card-title">Norse Mythology<br><br></h5>
//                 <a href="#" id="plotBtn2" class="btn btn-primary">Show Plot</a>
//             </div>
//         </div>
        
//         <div class="card" style="width: 14rem;">
//             <img class="card-img-top" src="Fables.jpg" alt="fablesCover">
//             <div class="card-body">
//                 <h5 class="card-title">Fables: The Deluxe Edition Book One</h5>
//                 <a href="#" id="plotBtn4" class="btn btn-danger">Hide Plot</a>
//             </div>
//         </div>

//         <div class="card" style="width: 14rem;">
//             <img class="card-img-top" src="leMorte.jpg" alt="leMorteCover">
//             <div class="card-body">
//                 <h5 class="card-title">Le Morte D'Arthur<br><br></h5>
//                 <a href="#" id = "plotBtn6" class="btn btn-primary">Show Plot</a>
//             </div>
//         </div>

//         <div class="card" style="width: 14rem;">
//             <img class="card-img-top" src="RedOctober.jpg" alt="RedOctoberCover">
//             <div class="card-body">
//                 <h5 class="card-title">The Hunt for <br>Red October</h5>
//                 <a href="#" id = "plotBtn8" class="btn btn-primary">Show Plot</a>
//             </div>
//         </div>

//         <div class="card" style="width: 14rem;">
//             <img class="card-img-top" src="Fellowship.jpg" alt="FellowshipCover">
//             <div class="card-body">
//                 <h5 class="card-title">The Fellowship of The Ring</h5>
//                 <a href="#" id = "plotBtn10" class="btn btn-primary">Show Plot</a>
//             </div>
//         </div>

//         <div class="plotBox">
//             <h4>Description</h4>
//             <p class="card-text">When a savage creature known only as the Adversary conquered the fabled lands of legends 
//             and fairy tales, all of the infamous inhabitants of folklore were forced into exile. 

//             <br>
//             <br>

//             Disguised among the normal citizens of modern-day New York, these magical characters created their own secret 
//             society-within an exclusive luxury apartment building on Manhattan's Upper West Side-called Fabletown. 
//             But when Snow White's party-girl sister, Rose Red, is apparently murdered, it is up to Bigby, Fabletown's sheriff, 
//             and a reformed and pardoned Big Bad Wolf, to determine if the culprit is Bluebeard, Rose's ex-lover and notorious 
//             wife killer, or Jack, her current live-in boyfriend and former beanstalk-climber.</p>
//         </div>
//         `

//     //CLICK EVENT: BOOK 3 LE MORTE D'ARTHUR***************************************************************************************
//     } else if(e.target && e.target.id == "plotBtn5") {
//         document.getElementById("root").innerHTML = `
//         <div class="card" style="width: 14rem;">
//             <img class="card-img-top" src="NorseMythology.jpg" alt="norseCover">
//             <div class="card-body">
//                 <h5 class="card-title">Norse Mythology<br><br></h5>
//                 <a href="#" id="plotBtn2" class="btn btn-primary">Show Plot</a>
//             </div>
//         </div>
        
//         <div class="card" style="width: 14rem;">
//             <img class="card-img-top" src="Fables.jpg" alt="fablesCover">
//             <div class="card-body">
//                 <h5 class="card-title">Fables: The Deluxe Edition Book One</h5>
//                 <a href="#" id = "plotBtn4" class="btn btn-primary">Show Plot</a>
//             </div>
//         </div>


//         <div class="card" style="width: 14rem;">
//             <img class="card-img-top" src="leMorte.jpg" alt="leMorteCover">
//             <div class="card-body">
//                 <h5 class="card-title">Le Morte D'Arthur<br><br></h5>
//                 <a href="#" id = "plotBtn6" class="btn btn-danger">Hide Plot</a>
//             </div>
//         </div>

//         <div class="card" style="width: 14rem;">
//             <img class="card-img-top" src="RedOctober.jpg" alt="RedOctoberCover">
//             <div class="card-body">
//                 <h5 class="card-title">The Hunt for <br>Red October</h5>
//                 <a href="#" id = "plotBtn8" class="btn btn-primary">Show Plot</a>
//             </div>
//         </div>

//         <div class="card" style="width: 14rem;">
//             <img class="card-img-top" src="Fellowship.jpg" alt="FellowshipCover">
//             <div class="card-body">
//                 <h5 class="card-title">The Fellowship of The Ring</h5>
//                 <a href="#" id = "plotBtn10" class="btn btn-primary">Show Plot</a>
//             </div>
//         </div>

//         <div class="plotBox">
//             <h4>Description</h4>
//             <p class="card-text">Le Morte d'Arthur is Sir Thomas Malory's compilation of English tales and stories 
//             translated from the French about the legendary King Arthur and his kingdom of Camelot. It tells of Arthur's 
//             ascent to the throne following his removal of the sword from the stone, his choosing of his most valorous 
//             knights to serve as his Knights of the Round Table, his receipt of the enchanted sword Excalibur from 
//             the Lady of the Lake, his marriage to the Lady Guenever, his adventures with Sir Lancelot, and his quest to 
//             find the Holy Grail.  This edition of Le Morte d'Arthur features the modernized text of William Caxton's 
//             original 1485 edition, as well as the classic full-color artwork of Arthur Rackham.</p>
//         </div>
//         `



//     //CLICK EVENT: BOOK 4 THE HUNT FOR RED OCTOBER*********************************************************************************
//     } else if(e.target && e.target.id == "plotBtn7") {
//         document.getElementById("root").innerHTML = `
//     <div class="card" style="width: 14rem;">
//         <img class="card-img-top" src="NorseMythology.jpg" alt="norseCover">
//         <div class="card-body">
//             <h5 class="card-title">Norse Mythology<br><br></h5>
//             <a href="#" id="plotBtn2" class="btn btn-primary">Show Plot</a>
//         </div>
//     </div>

//     <div class="card" style="width: 14rem;">
//         <img class="card-img-top" src="Fables.jpg" alt="fablesCover">
//         <div class="card-body">
//             <h5 class="card-title">Fables: The Deluxe Edition Book One</h5>
//             <a href="#" id = "plotBtn4" class="btn btn-primary">Show Plot</a>
//         </div>
//     </div>
    

//     <div class="card" style="width: 14rem;">
//     <img class="card-img-top" src="leMorte.jpg" alt="leMorteCover">
//         <div class="card-body">
//             <h5 class="card-title">Le Morte D'Arthur<br><br></h5>
//             <a href="#" id = "plotBtn6" class="btn btn-primary">Show Plot</a>
//         </div>
//     </div>

//     <div class="card" style="width: 14rem;">
//         <img class="card-img-top" src="RedOctober.jpg" alt="RedOctoberCover">
//         <div class="card-body">
//             <h5 class="card-title">The Hunt for <br>Red October</h5>
//             <a href="#" id = "plotBtn8" class="btn btn-danger">Hide Plot</a>
//         </div>
//     </div>

//     <div class="card" style="width: 14rem;">
//         <img class="card-img-top" src="Fellowship.jpg" alt="FellowshipCover">
//         <div class="card-body">
//             <h5 class="card-title">The Fellowship of The Ring</h5>
//             <a href="#" id = "plotBtn10" class="btn btn-primary">Show Plot</a>
//         </div>
//     </div>

//     <div class="plotBox">
//         <h4>Description</h4>
//         <p class="card-text">Somewhere under the freezing Atlantic, a Soviet sub commander has just made a fateful decision. 
//         e Red October is heading west. The Americans want her. The Russians want her back. The chase for the highly 
//         advanced nuclear submarine is on—and there’s only one man who can find her...
//         <br>
//         <br>
//         Brilliant CIA analyst Jack Ryan has little interest in fieldwork, but when covert photographs of Red October land 
//         on his desk, Ryan soon finds himself in the middle of a high-stakes game of hide-and-seek played by two world 
//         powers—a game that could end in all-out war.</p>
//     </div>
//     `

//     //CLICK EVENT: BOOK 5 THE FELLOWSHIP OF THE RING*******************************************************************************
//     } else if(e.target && e.target.id == "plotBtn9") {
//         document.getElementById("root").innerHTML = `
//     <div class="card" style="width: 14rem;">
//         <img class="card-img-top" src="NorseMythology.jpg" alt="norseCover">
//         <div class="card-body">
//             <h5 class="card-title">Norse Mythology<br><br></h5>
//             <a href="#" id="plotBtn2" class="btn btn-primary">Show Plot</a>
//         </div>
//     </div>

//     <div class="card" style="width: 14rem;">
//         <img class="card-img-top" src="Fables.jpg" alt="fablesCover">
//         <div class="card-body">
//             <h5 class="card-title">Fables: The Deluxe Edition Book One</h5>
//             <a href="#" id = "plotBtn4" class="btn btn-primary">Show Plot</a>
//         </div>
//     </div>

//     <div class="card" style="width: 14rem;">
//     <img class="card-img-top" src="leMorte.jpg" alt="leMorteCover">
//         <div class="card-body">
//             <h5 class="card-title">Le Morte D'Arthur<br><br></h5>
//             <a href="#" id = "plotBtn6" class="btn btn-primary">Show Plot</a>
//         </div>
//     </div>

//     <div class="card" style="width: 14rem;">
//         <img class="card-img-top" src="RedOctober.jpg" alt="RedOctoberCover">
//         <div class="card-body">
//             <h5 class="card-title">The Hunt for <br>Red October</h5>
//             <a href="#" id = "plotBtn8" class="btn btn-primary">Show Plot</a>
//         </div>
//     </div>

//     <div class="card" style="width: 14rem;">
//         <img class="card-img-top" src="Fellowship.jpg" alt="FellowshipCover">
//         <div class="card-body">
//             <h5 class="card-title">The Fellowship of The Ring</h5>
//             <a href="#" id = "plotBtn10" class="btn btn-danger">Hide Plot</a>
//         </div>
//     </div>

//     <div class="plotBox">
//         <h4>Description</h4>
//         <p class="card-text">The first volume in J.R.R. Tolkien's epic adventure THE LORD OF THE RINGS
    
//         One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them
        
//         In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, 
//         filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he 
//         sought it throughout Middle-earth, it remained lost to him. After many ages it fell into the hands of Bilbo Baggins, 
//         as told in The Hobbit. In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, 
//         as his elderly cousin Bilbo entrusts the Ring to his care. Frodo must leave his home and make a perilous journey 
//         across Middle-earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose.</p>
//     </div>
//     `

//     //CLICK EVENT: HIDE PLOT FOR ALL **********************************        
//     } else if(e.target && e.target.id == "plotBtn2" || "plotBtn4" || "plotBtn6" || "plotBtn8" || "PlotBtn10"){
//         document.getElementById("root").innerHTML = `
//             <div class="card" style="width: 14rem;">
//                 <img class="card-img-top" src="NorseMythology.jpg" alt="norseCover">
//                 <div class="card-body">
//                     <h5 class="card-title">Norse Mythology<br><br></h5>
//                     <a href="#" id="plotBtn1" class="btn btn-primary">Show Plot</a>
//                 </div>
//             </div>

//             <div class="card" style="width: 14rem;">
//                 <img class="card-img-top" src="Fables.jpg" alt="fablesCover">
//                 <div class="card-body">
//                     <h5 class="card-title">Fables: The Deluxe Edition Book One</h5>
//                     <a href="#" id = "plotBtn3" class="btn btn-primary">Show Plot</a>
//                 </div>
//             </div>
    
//             <div class="card" style="width: 14rem;">
//                 <img class="card-img-top" src="leMorte.jpg" alt="leMorteCover">
//                 <div class="card-body">
//                     <h5 class="card-title">Le Morte D'Arthur<br><br></h5>
//                     <a href="#" id = "plotBtn5" class="btn btn-primary">Show Plot</a>
//                 </div>
//             </div>
    
//             <div class="card" style="width: 14rem;">
//                 <img class="card-img-top" src="RedOctober.jpg" alt="RedOctoberCover">
//                 <div class="card-body">
//                     <h5 class="card-title">The Hunt for <br>Red October</h5>
//                     <a href="#" id = "plotBtn7" class="btn btn-primary">Show Plot</a>
//                 </div>
//             </div>
    
//             <div class="card" style="width: 14rem;">
//                 <img class="card-img-top" src="Fellowship.jpg" alt="FellowshipCover">
//                 <div class="card-body">
//                     <h5 class="card-title">The Fellowship of The Ring</h5>
//                     <a href="#" id = "plotBtn9" class="btn btn-primary">Show Plot</a>
//                 </div>
//             </div>

//             <div class="plotBox">
//                 <div class="plot-body">
//                     <h4>Description</h4>
//                 </div>
//             </div>

//             `
//     }
// })






// //BOOK 2 - INITIAL PAGE LOAD - FABLES - THE DELUXE EDITION BOOK ONE
// document.getElementById("root")= `
// <div class="card" style="width: 14rem;">
//     <img class="card-img-top" src="Fables.jpg" alt="fablesCover">
//     <div class="card-body">
//         <h5 class="card-title">Fables: The Deluxe Edition Book One</h5>
//         <a href="#" id = "plotBtn1" class="btn btn-primary">Show Plot</a>
//     </div>
// </div>
// `
// BOOK 2 CLICK EVENT: FABLES - THE DELUXE EDITION BOOK ONE
// document.addEventListener('click', function(e){
//     if(e.targer && e.target.id == "PlotBtn1"){
//         document.getElementById("root").innerHTML = `
//         <div class="card" style="width: 14rem;">
//         <img class="card-img-top" src="Fables.jpg" alt="fablesCover">
//         <div class="card-body">
//             <h5 class="card-title">Fables: The Deluxe Edition Book One</h5>
//             <p class="card-text">When a savage creature known only as the Adversary conquered 
//             the fabled lands of legends and fairy tales, all of the infamous inhabitants of 
//             folklore were forced into exile. 
//             <br><br>

//             Disguised among the normal citizens of modern-day New York, these magical characters 
//             created their own secret society-within an exclusive luxury apartment building on 
//             Manhattan's Upper West Side-called Fabletown. But when Snow White's party-girl sister, 
//             Rose Red, is apparently murdered, it is up to Bigby, Fabletown's sheriff, and a 
//             reformed and pardoned Big Bad Wolf, to determine if the culprit is Bluebeard, 
//             Rose's ex-lover and notorious wife killer, or Jack, her current live-in boyfriend 
//             and former beanstalk-climber.</p>

//             <a href="#" id="plotBtn2" class="btn btn-primary">Hide Plot</a>
//         </div>
//     </div>
//         `
//     }
// }




// //BUTTONS - back up plan
// document.addEventListener('click', function(e) {
//     if(e.target && e.target.id == "plotBtn") {
//         if(document.getElementById("plotBtn").textContent == "Hide Plot") {
//             document.getElementById("card-text").innerHTML = ""
//             document.getElementById("plotBtn").innerHTML = "Show Plot"
//         } else {
//             document.getElementById("card-text").innerHTML = "Words go here."
//             document.getElementById("plotBtn").innerHTML = "Hide Plot"
//         }
//     }
// })


// document.getElementById("root").innerHTML = `${new bookListComponent().template}`
