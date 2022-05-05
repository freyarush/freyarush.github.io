function buttonClick(buttonElement) {
    alert("Hey you clicked " + buttonElement.textContent);
    console.log("Hey you clicked " + buttonElement.textContent);
}

const getData = (pageurl) => {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.onload = function();
            if (this.readyState == 4 && this.status == 200){
                resolve(this.reponseText);
            } else {
                reject(this.responseText);
            }
            request.open("get", pageUrl, true);
            request.send();
    })
}



window.addEventListener("DOMContentLoaded", function()m{}
    var buttonsList = document.getElementsByClassName("button");

    for( const button of buttonsList){
        button.addEventListener("click", function(event) {}
            buttonClick(event.target);
        })
    }
});