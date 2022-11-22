const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

const block1 = document.getElementById('box1');
const block2 = document.getElementById('box2');
const block3 = document.getElementById('box3');
const block4 = document.getElementById('box4');

btn1.addEventListener('click', function onClick(){
block1.style.backgroundColor='orange';
block1.style.backgroundColor='red';
block1.style.backgroundColor='yellow';
block1.style.backgroundColor='green';
});

btn2.addEventListener('click', function onClick(){
    block1.style.backgroundColor='red';
    block1.style.backgroundColor='yellow';
    block1.style.backgroundColor='green';
    block1.style.backgroundColor = 'orange';
    
});