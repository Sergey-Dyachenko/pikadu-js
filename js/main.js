// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию 
menuToggle.addEventListener('click', function (event) {
  // отменяем стандартное поведение ссылки
  event.preventDefault();
  // вешаем класс на меню, когда кликнули по кнопке меню 
  menu.classList.toggle('visible');
})

const loginElem = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginSignup = document.querySelector('.login-signup');


const userElem = document.querySelector('.user');
const userNameElem = document.querySelector('.user-name')



const listUsers = [
  {
    id: 1,
    email: 'serhio@mail.com',
    password: '12345',
    displayName: 'SerhioJs'
  },
  {
    id: 2,
    email: 'elena@mail.com',
    password: '1234567',
    displayName: 'Elena Love Serhio'
  }
]

const setUsers = {
  user: null,

  logIn(email, password, handler){
    const user = this.getUser(email);
    if (user && user.password === password){
      this.authorizedUser(user);
      handler();
    }
    else{
        alert('Пользователь с такими данными не найден');
    }
  },

  logOut(){
    сonsole.log('выход');
  },
  
  validateEmail(email){
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(email).search (filter) != -1;
  },

  signUp(email, password, handler){
    const user = this.getUser(email);
    if(this.validateEmail(email)){
      if (!this.getUser(email)){
        
      
        
        listUsers.push({email, password, displayName: this.getDisplayName(email)})
        this.authorizedUser(user)
        handler();
        console.log(listUsers);
      } else{
        alert('Пользователь с таким e-mail уже зарегестирован')
      }
    }
    else{
      alert('Введенный e-mail не валидный')
    }
  },
  getUser(email){
    console.log(email);
    return listUsers.find(item => item.email === email)
  },
  authorizedUser(user){
    this.user = user;
  },
  getDisplayName(email) {
    return email.split('@')[0]
  }

}

const toggleAuthDom = () => {
  const user = setUsers.user;
  console.log('user:', user );
  if(user){
    loginElem.style.display = 'none';
    userElem.style.display = '';
    userNameElem.textContent = user.displayName;
  }
  else{
    loginElem.style.display = '';
    userElem.style.display = 'none';
  }
}

console.log(loginForm);

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  setUsers.logIn(emailValue, passwordValue, toggleAuthDom);
});

loginSignup.addEventListener('click', event => {
  event.preventDefault();
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  setUsers.signUp(emailValue, passwordValue, toggleAuthDom);
})


toggleAuthDom();