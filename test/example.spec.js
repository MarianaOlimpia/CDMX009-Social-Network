// import { suma } from '../src/prueba.js';
// import auth from '../src/firebase/login.js';
const auth = {};
// import Main from '../src/Views/main.js';
// import Register from '../src/Views/register.js';
// import Recovery from '../src/Views/passwordRecovery.js';
// import Home from '../src/Views/home.js';
// import CreatePost from '../src/Views/createPost.js';

function fakeEmailLogin(email, password) {
  if (password.length < 6) return 'no cumple con 6 caracteres';
  if (!email || email === '') return 'No existe email';
}

test('Validación de emailLogIn caracteres', () => {
  const email = 'antropologia@gmail.com';
  const password = '1234';

  expect(fakeEmailLogin(email, password)).toBe('no cumple con 6 caracteres');
});

test('Validación de emailLogIn email', () => {
  const password = '123446';

  expect(fakeEmailLogin('', password)).toBe('No existe email');
});

function fakeUserAcces(user, photo) {
  if (user === '') return 'No ha ingresado un nombre';
  if (photo === '') return 'No hay foto ingresada';
}

test('Validación de userAcces', () => {
  const user = '';
  const photo = 'zzz';

  expect(fakeUserAcces(user, photo)).toBe('No ha ingresado un nombre');
});

test('Validación de userAcces photo', () => {

  const photo = '';

  expect(fakeUserAcces('zz', photo)).toBe('No hay foto ingresada');
});


// describe('suma', () => {
//   it('debería ser una función', () => {
//     expect(typeof suma).toBe('function');
//   });

//   it('sumar 1 + 2 es igual a 3', () => {
//     expect(suma(1, 2)).toBe(3);
//   });
// });

// describe('Home', () => {
//   it('debería ser una función', () => {
//     expect(typeof Home).toBe('function');
//   });
// });

// describe('Home', () => {
//   it('debería ser una función', () => {
//     expect(typeof Home).toBe('function');
//   });
// });
