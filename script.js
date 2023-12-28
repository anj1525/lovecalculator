window.onload = function() {
    let button = document.getElementById("calculate");
    button.addEventListener("click", calculateLove);
}

function calculateLove() {
    let yourName = document.getElementById("your-name").value;
    let crushName = document.getElementById("crush-name").value;

    if (yourName !== "" && crushName !== "") {
        let percentage;
    
        if (yourName.toLowerCase() === "anjani" && crushName.toLowerCase() === "casey") {
            percentage = 100; 
        }else if (yourName === "jagdeep" && crushName === "shalini") {
                percentage = 100;
         
        } else {
            percentage = Math.floor(Math.random() * 101);
        }
    
        document.getElementById("result-message").innerText = yourName + " and " + crushName + "'s chance of love:";
        document.getElementById("result-percentage").innerText = percentage.toString() + "%";
    }
    
}    