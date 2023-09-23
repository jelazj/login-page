//pretend data base of users
let usersdb = [
    {
        username: "user1@gmail.com",
        password: "admin123",
        firstName: "John",
        lastName: "Snow"
    },
    {
        username: "user2@gmail.com",
        password: "123",
        firstName: "Sansa",
        lastName: "Stark"
    },
    {
        username: "user3@gmail.com",
        password: "1234",
        firstName: "Arya",
        lastName: "Stark"
    }
];

let usernameInput = document.querySelector("input[name='username']");
let passwordInput = document.querySelector("input[name='password']");
let loginBtn = document.querySelector("button");
let errorMessage = document.querySelector(".message");


let inputUsername = null;


loginBtn.addEventListener("click", loginFunc);


function loginFunc(e) {
    e.preventDefault();
    //filter users
    let loggedUser = usersdb.filter((user) => {
        return user.username === usernameInput.value && user.password === passwordInput.value
    })
    //use case 1 (empty user name and password feild)
    if (usernameInput.value === '' || passwordInput.value === '') {
        errorMessage.innerHTML = 'User name and password can not be empty!';
    }
    //use case 2 (user is logged in. display welcome message)
    else if (loggedUser.length === 1) {
        errorMessage.innerHTML = 'Welcome ' + loggedUser[0].firstName + ' ' + loggedUser[0].lastName + '!';
        errorMessage.style.color = '#333';
        errorMessage.style.fontSize = '1rem';

    } else {
        //use case 3 (user not found)
        errorMessage.innerHTML = 'User not found. Please sign up!';
    }
}










