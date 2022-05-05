function buttonClick(buttonElement) {
    alert("Hey you clicked " + buttonElement.textContent);
    console.log("Hey you clicked " + buttonElement.textContent);
}

window.addEventListener("DOMContentLoaded", function()m{}
    var buttonsList = document.getElementsByClassName("button");

    for( const button of buttonsList){
        button.addEventListener("click", function(event) {}
            buttonClick(event.target);
        })
    }
});