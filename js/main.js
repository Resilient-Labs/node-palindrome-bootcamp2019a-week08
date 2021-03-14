document.querySelector('.buttonCheck').addEventListener('click', makeRequest)

document.querySelector('.buttonClear').addEventListener('click', clearInput)

document.querySelector('input').addEventListener('keypress', runMakeRequest)

function makeRequest() {

    document.querySelector('.h2Results').innerText = ""

    const word = document.querySelector('input').value;

    fetch(`/api?word=${word}`) 
    
    //https:localhost8000/api?word=cat 

        .then(response => response.json())
        //{result: true/false}
        
        .then(data => {

            document.querySelector('.h2Results').innerText = ""

            document.querySelector('#h2Word').innerText = ""

            if(data['result']) {

                setTimeout(() => {

                document.querySelector('.h2Results').innerText = "Yes, it is a palindrome."

                document.querySelector('#h2Word').innerText = data['reversedWord']
            
            }, 200)

            } else {

                setTimeout(() => {

                    document.querySelector('.h2Results').innerText = "No, it is not a palindrome."

                    document.querySelector('#h2Word').innerText = data['reversedWord']
                
                }, 200)
                
            }
        });


}

function clearInput() {

    document.querySelector('input').value = ""
    document.querySelector('.h2Results').innerText = ""
    document.querySelector('#h2Word').innerText = ""

}

function runMakeRequest(e){
    if(e.keyCode === 13){
        e.preventDefault()
        makeRequest()
    }
    
}