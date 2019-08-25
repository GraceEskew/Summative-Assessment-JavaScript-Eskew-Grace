// class bookComponent {

//     constructor(title) {
//         this.title;

//         template = `
//             <div class="card">
//                 <div class="card-body">
//                     ${this.title}
//                 </div>
//             </div>
//         `
//     }
// }

// //BOOK LIST
// class bookListComponent {
//     template = 
//         <dv>
//             ${new bookComponent("Norse Mythology").template}
//             ${new bookComponent("Fables #1").template}
//             ${new bookComponent("Le Morte D'Arthur").template}
//             ${new bookComponent("The Hunt for Red October").template}
//             ${new bookComponent("The Fellowship of the Ring").template}
//         </dv>
// }


//INITIAL HTML WHEN PAGE 1ST LOADS
document.getElementById("root").innerHTML= `
    <div class="card" style="width: 14rem;">
        <img class="card-img-top" src="NorseMythology.jpg" alt="norseCover">
        <div class="card-body">
            <h5 class="card-title">Norse Mythology</h5>
            <a href="#" id = "PlotBtn1" class="btn btn-primary">Show Plot</a>
        </div>
    </div>
`

//CLICK EVENT
document.addEventListener("click", function(e) {
    if(e.target && e.target.id == "plotBtn1"){
        document.getElementById("root").innerHTML = `
            <div class="card" style="width: 14rem;">
                <img class="card-img-top" src="NorseMythology.jpg" alt="norseCover">
                <div class="card-body">
                    <h5 class="card-title">Norse Mythology</h5>
                    <p class="card-text">Honestly, I should probably just start writing Beatles lyrics about this point. In latin. Think there's an ipsum generator that'd do that?</p>
                    <a href="#" id="PlotBtn2" class="btn btn-primary">Hide Plot</a>
                </div>
            </div>
            `
    } else if(e.target && e.target.id == "plotBtn2"){
        document.getElementById("root").innerHTML = `
            <div class="card" style="width: 14rem;">
                <img class="card-img-top" src="NorseMythology.jpg" alt="norseCover">
                <div class="card-body">
                    <h5 class="card-title">Norse Mythology</h5>
                    <a href="#" id="PlotBtn1" class="btn btn-primary">Show Plot</a>
                </div>
            </div>
            `
    }
})



// //BUTTONS - back up plan
// document.addEventListener('click', function(e) {
//     if(e.targer && e.targer.id == "plotBtn") {
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
