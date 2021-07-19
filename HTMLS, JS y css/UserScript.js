let localURL =  'http://localhost:8000/user'

async function retrieveAll() {
    let response = await fetch(localURL,{
        headers: '{{key:"'+localStorage.getItem("key")+'"}}'
        
    })
    let returnedData = response.json();
}

async function retrieveOne(userID) {
    let response = await fetch(localURL+userID,{
        headers: '{{key:"'+localStorage.getItem("key")+'"}}'
        
    })
    let returnedData = response.json();
}

async function createUser(userID,userdata) {
    let response = await fetch(localURL+userID,{
        method: 'POST', //aclaro para que quede ordenado
        headers: '{{key:"'+localStorage.getItem("key")+'"}}',
        body: userdata // a definir
    })
    let returnedData = response.json();
}

async function modifyUser(userID, userdata) {
    let response = await fetch(localURL+userID,{
        method: 'PUT', //aclaro para que quede ordenado
        headers: '{{key:"'+localStorage.getItem("key")+'"}}',
        body: userdata // a definir
    })
    let returnedData = response.json();
}

async function deleteUser(key,userID) {
    let response = await fetch(localURL+userID,{
        method: 'DELETE', //aclaro para que quede ordenado
        headers: '{{key:"'+localStorage.getItem("key")+'"}}',
    })
    let returnedData = response.json();
}


function modify(){

}

function eliminar(){
    
}