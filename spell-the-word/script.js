const init = function() {
    //Array containing the list of values which are going to be shown to spell the names 
    let dictionary = ['apple', 'ball', 'cat', 'dog', 'elephant', 'frog', 'goat', 'hat', 'ice', 'joke', 'kite', 'love', 'monkey', 'name', 'orange', 'price', 'queue', 'right', 'site', 'tank', 'utsav', 'vine', 'white', 'xerox', 'yoyo', 'zebra'];

    document.getElementById('reset').onclick = function () {
        document.querySelectorAll('.inner p').forEach((elem) => elem.remove());
        document.getElementById('name').value = '';
    }

    document.getElementById('submit').onclick = function () {
        document.querySelectorAll('.inner p').forEach((elem) => elem.remove());
        let searchTerm = document.getElementById('name').value;
        let text = searchTerm.toLowerCase().split('');
        
        text.forEach(function(element) {
            for(let j=0; j < dictionary.length; j++) { 
                if (element == dictionary[j].substring(0, 1)) {
                    let letter = element.toUpperCase();
                    document.querySelector('.inner').innerHTML += `<p>${letter} for ${dictionary[j]}</p>`;
                    break;
                } 
            }
        })
    }
}

//Once the document has loaded initialize the function init 
document.onready = init;