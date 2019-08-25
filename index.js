class bookComponent {

    constructor(title) {
        this.title;

        template = `
            <div class="card">
                <div class="card-body">
                    ${this.title}
                </div>
            </div>
        `
    }
}

//BOOK LIST
class bookListComponent {
    template = 
        <dv>
            ${new bookComponent("Norse Mythology").template}
            ${new bookComponent("Fables #1").template}
            ${new bookComponent("Le Morte D'Arthur").template}
            ${new bookComponent("The Hunt for Red October").template}
            ${new bookComponent("The Fellowship of the Ring").template}
        </dv>
}

//BUTTONS
document.addEventListener('click', function(e) {
    if(e.targer && e.targer.id == "plotBtn") {
        if(document.getElementById("plotBtn").textContent == "Hide Plot") {
            document.getElementById("card-text").innerHTML = ""
            document.getElementById("plotBtn").innerHTML = "Show Plot"
        } else {
            document.getElementById("card-text").innerHTML = "Words go here."
            document.getElementById("plotBtn").innerHTML = "Hide Plot"
        }
    }
})


document.getElementById("root").innerHTML = `${new bookListComponent().template}`
