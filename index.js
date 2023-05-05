// Add your code here
const submitData = function(name, email) {
return fetch('http://localhost:3000/users', {
method: 'POST',
headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
},
body: JSON.stringify({name: name, email: email}),
})
.then(resp => resp.json())
.then(data => {
    const p = document.createElement('p');
    const id = data.id;
    p.textContent = id;
    document.querySelector('body').appendChild(p)
})
.catch(err => {
    const p = document.createElement('p');
    p.textContent = err.message;
    document.querySelector('body').appendChild(p)
})
}