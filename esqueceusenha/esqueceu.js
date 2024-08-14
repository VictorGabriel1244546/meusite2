// Importa o Firebase e o Auth
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getAuth, sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCcEL2HPZYPkb9JZJF3heXeS7UNFuHyMgw", // Chave da API fornecida
    authDomain: "vg-sport.firebaseapp.com", // Substitua pelo domínio correto
    projectId: "vg-sport",
    storageBucket: "vg-sport.appspot.com",
    messagingSenderId: "346733324533",
    appId: "1:346733324533:web:your-app-id" // Substitua pelo appId correto
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('forgotPasswordForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;

    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert('Link de recuperação enviado para o seu e-mail.');
            // Opcionalmente, redireciona para a página de login
            window.location.href = '/login/login.html';
        })
        .catch((error) => {
            alert('Erro ao enviar link de recuperação: ' + error.message);
        });
});
