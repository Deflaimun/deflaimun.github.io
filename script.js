function updateSecondSelect() {
    // Get the selected value from the first select element
    var firstSelect = document.getElementById("numberSelect");
    var selectedValue = parseInt(firstSelect.value);

    var excess = document.getElementById("excess");
    var excessValue = parseInt(excess.value);

    if(isNaN(excessValue))
        excessValue = 0;

    let total =0;
    if(selectedValue == 1){
        total = 2
    } else if (selectedValue == 2){
        total = 4
    } else if (selectedValue == 3){
        total = 7
    }else if (selectedValue == 4){
        total = 11
    } else if (selectedValue == 5){
        total = 16
    }
    total+= excessValue;
    const result = 16 - total;

    // Clear existing options in the second select element
    excess.innerHTML = "";

    // Create options for the second select based on the selected value
    for (var i = 0; i <= result; i++) {
        option = document.createElement("option");
        option.value = i;
        option.text = i;
        excess.appendChild(option);
    }
}

function updateCardArt() {
    var selector = document.getElementById("cardSelect");
    var selectedValue = selector.value;
    var imageElement = document.getElementById("cardArt");

    // Define a mapping of values to image file paths
    var imageMap = {
        "wei": "cards/wei.png",
        "nineveh": "cards/nineveh.png",
        "azena": "cards/azena.png",
        "balthor": "cards/balthor.png",
        "kadan": "cards/kadan.png",
        "thirain": "cards/thirain.png"
    };

    // Set the image source based on the selected value
    if (selectedValue in imageMap) {
        imageElement.src = imageMap[selectedValue];
    } else {
        imageElement.src = "card.jpg"; // Display a default image if the value doesn't match
    }
}


// Get the select element
const select = document.getElementById("numberSelect");
const excess = document.getElementById("excess");
const resultElement = document.getElementById("result");

// Add an event listener to the select element
[ select, excess ].forEach(function(e) {
    e.addEventListener("change", function () {
        // Get the selected value and convert it to a number
        const selectedValue = parseInt(select.value);
        const excessValue = parseInt(excess.value);

        if(selectedValue == 1){
            total = 2
        } else if (selectedValue == 2){
            total = 4
        } else if (selectedValue == 3){
            total = 7
        }else if (selectedValue == 4){
            total = 11
        } else if (selectedValue == 5){
            total = 16
        }

        total+= excessValue;
        const result = 16 - total;
        var selector = document.getElementById("cardSelect");
        return string.charAt(0).toUpperCase() + string.slice(1);
        var card = selector.value.toUpperCase();
        

        if(result <= 0) {
            resultElement.textContent = `Congratulations! You closed this.`;    
        }
        else{
            resultElement.textContent = `To complete ${card} you need ${result} cards`;
        }

    });
});