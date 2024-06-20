let formCon = document.getElementById('form-con');
let nam = document.getElementById('name');
let age = document.getElementById('age');
let login = document.getElementById('login');

// question containers 
let q1 = document.getElementById('q1');
let q2 = document.getElementById('q2');
let q3 = document.getElementById('q3');
let q4 = document.getElementById('q4');
let q5 = document.getElementById('q5');

login.addEventListener('click', function () {
    if (nam.value === ''){
        nam.style.border = 'solid 1px red';
    }else{
        nam.style.border = 'solid 1px green';
    }

    if (age.value === ''){
        age.style.border = 'solid 1px red';
    }else{
        age.style.border = 'solid 1px green';
    }

    if (nam.value === '' || age.value === '') {
        alert('Please fill all fields appropriately');
    }else{
        alert(`Welcome, ${nam.value}. Logisuccessful !!!`)
        formCon.style.display = 'none';

        setTimeout(() => { 
            q1.style.display = 'block';
        }, 2000);
    }
});

// next and previous buttons 
function next1() {
    q1.style.display = 'none';
    q2.style.display = 'block';
}

function prev2() {
    q2.style.display = 'none';
    q1.style.display = 'block';
}

function next2() {
    q2.style.display = 'none';
    q3.style.display = 'block';
}

function prev3() {
    q3.style.display = 'none';
    q2.style.display = 'block';
}

function next3() {
    q3.style.display = 'none';
    q4.style.display = 'block';
}

function prev4() {
    q4.style.display = 'none';
    q3.style.display = 'block';
}

function next4() {
    q4.style.display = 'none';
    q5.style.display = 'block';
}

function prev5() {
    q5.style.display = 'none';
    q4.style.display = 'block';
}

// answer inputs 
let q1ans = document.getElementById('q1ans');
let q2ans = document.getElementById('q2ans');
let q3ans = document.getElementById('q3ans');
let q4ans = document.getElementById('q4ans');
let q5ans = document.getElementById('q5ans');

// question 1 options 
function q1a() {
    q1ans.value = 'Murtala Muhammad'
}

function q1b() {
    q1ans.value = 'Olusegun Obasanjo'
}

function q1c() {
    q1ans.value = 'Bola Ahmed Tinubu'
}

function q1d() {
    q1ans.value = 'Peter Obi'
}

// question 2 options

function q2a() {
    q2ans.value = 'Javascript'
}

function q2b() {
    q2ans.value = 'CSS'
}

function q2c() {
    q2ans.value = 'PHP'
}

function q2d() {
    q2ans.value = 'Java'
}

// question 3 options

function q3a() {
    q3ans.value = 'Red and Green'
}

function q3b() {
    q3ans.value = 'Yellow and Purple'
}

function q3c() {
    q3ans.value = 'Gold and Red'
}

function q3d() {
    q3ans.value = 'Yellow and Red'
}

// question 4 options

function q4a() {
    q4ans.value = '57'
}

function q4b() {
    q4ans.value = '60'
}

function q4c() {
    q4ans.value = '33'
}

function q4d() {
    q4ans.value = '48'
}

// question 5 options

function q5a() {
    q5ans.value = 'Casscade Style Sheet'
}

function q5b() {
    q5ans.value = 'Casacading Style Sheet'
}

function q5c() {
    q5ans.value = 'Cascade Styling Sheet'
}

function q5d() {
    q5ans.value = 'Cascading Style Sheet'
}

// final submit 
let submit = document.getElementById('submit');
let result = document.getElementById('result');

let counter = 0;

submit.addEventListener('click', function () {
    q5.style.display = 'none';
    alert('Submit successful !');

    result.style.display = 'block';

    if (q1ans.value === 'Bola Ahmed Tinubu') {
        counter++;
        console.log(counter);
    }

    if (q2ans.value === 'CSS') {
        counter++;
        console.log(counter);
    }

    if (q3ans.value === 'Yellow and Red') {
        counter++;
        console.log(counter);
    }

    if (q4ans.value === '33') {
        counter++;
        console.log(counter);
    }

    if (q5ans.value === 'Cascading Style Sheet') {
        counter++;
        console.log(counter);
    }

    result.innerHTML = `Calculating scores. Please wait...`

    setTimeout(() => {
        if (counter < 3) {
            result.innerHTML = `Poor result, ${nam.value}. You scored ${counter} out of 5`;
        }else{
            result.innerHTML = `Decent result, ${nam.value}. You scored ${counter} out of 5`;
        };
    }, 4000);
});