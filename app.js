let btnAdd=document.getElementById('add');
console.log(btnAdd);

let showAlert=()=>{
    alert('Hi guys!');
}

btnAdd.addEventListener('click',showAlert);

let btnRemove=document.getElementById('remove');

btnAdd.removeEventListener('click',showAlert);