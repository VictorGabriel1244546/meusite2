// Importa e inicializa o Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyCcEL2HPZYPkb9JZJF3heXeS7UNFuHyMgw",
    authDomain: "vg-sport.firebaseapp.com",
    projectId: "vg-sport",
    storageBucket: "vg-sport.appspot.com",
    messagingSenderId: "346733324533",
    appId: "1:346733324533:web:your-app-id"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('Login bem-sucedido!');
            window.location.href = '/loja/index.html'; // Redireciona para a página inicial ou onde preferir
        })
        .catch((error) => {
            alert('Erro: ' + error.message);
        });
});
