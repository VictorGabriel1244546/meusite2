// Configuração do Firebase
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_AUTH_DOMAIN",
    projectId: "SEU_PROJECT_ID",
    storageBucket: "SEU_STORAGE_BUCKET",
    messagingSenderId: "SEU_MESSAGING_SENDER_ID",
    appId: "SEU_APP_ID"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Lógica de login
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Login bem-sucedido
            alert('Login bem-sucedido!');
            window.location.href = 'index.html'; // Redireciona para a página inicial ou onde preferir
        })
        .catch((error) => {
            // Erro no login
            alert(`Erro: ${error.message}`);
        });
});
const productContainer = document.querySelector('.product-container');

let isDown = false;
let startX;
let scrollLeft;

productContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    productContainer.classList.add('active');
    startX = e.pageX - productContainer.offsetLeft;
    scrollLeft = productContainer.scrollLeft;
});

productContainer.addEventListener('mouseleave', () => {
    isDown = false;
    productContainer.classList.remove('active');
});

productContainer.addEventListener('mouseup', () => {
    isDown = false;
    productContainer.classList.remove('active');
});

productContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - productContainer.offsetLeft;
    const walk = (x - startX) * 3; // Velocidade do arraste
    productContainer.scrollLeft = scrollLeft - walk;
});
