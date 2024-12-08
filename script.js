// Elements
const loginButton = document.getElementById('loginButton');
const createAccountButton = document.getElementById('createAccountButton');
const createAccountModal = document.getElementById('createAccountModal');
const loginModal = document.getElementById('loginModal');
const errorMessage = document.getElementById('error-message');
const loginErrorMessage = document.getElementById('loginErrorMessage');

// Show create account modal
createAccountButton.addEventListener('click', () => {
    createAccountModal.style.display = 'flex'; // Відображення модального вікна
});

// Show login modal
loginButton.addEventListener('click', () => {
    loginModal.style.display = 'flex'; // Відображення модального вікна
});

// Close create account modal
function closeModal() {
    createAccountModal.style.display = 'none'; // Закрити модальне вікно
}

// Close login modal
function closeLoginModal() {
    loginModal.style.display = 'none'; // Закрити модальне вікно
}
// Ініціалізація Supabase
const supabaseUrl = 'https://hnhllvzqvvcabbgcusww.supabase.co';  // Замініть на ваш URL проекту Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuaGxsdnpxdnZjYWJiZ2N1c3d3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM2MDc1ODYsImV4cCI6MjA0OTE4MzU4Nn0.Q_mEYyocT-fK9Nn8B8yT5RgzwOz1Tl5aKKTfg9wygCw'; // Замініть на ваш публічний ключ
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// create account 
const createAccountForm = document.getElementById('createAccountForm');
createAccountForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;

    // Перевірка чи паролі співпадають
    if (password1 !== password2) {
        errorMessage.textContent = 'Hasła nie pasują!';
        return;
    }

    // Реєстрація нового користувача
    try {
        const { user, error } = await supabase.auth.signUp({
            email: username,  // Ви можете використовувати email як username
            password: password1,
        });

        if (error) {
            errorMessage.textContent = error.message;
        } else {
            errorMessage.textContent = 'Konto zostało utworzone!';
// Ініціалізація Supabase
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://your-supabase-url', 'your-anon-key');

// Elements
const loginButton = document.getElementById('loginButton');
const createAccountButton = document.getElementById('createAccountButton');
const createAccountModal = document.getElementById('createAccountModal');
const loginModal = document.getElementById('loginModal');
const errorMessage = document.getElementById('error-message');
const loginErrorMessage = document.getElementById('loginErrorMessage');

// Show create account modal
createAccountButton.addEventListener('click', () => {
    createAccountModal.style.display = 'flex';
});

// Show login modal
loginButton.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

// Close modals
function closeModal() {
    createAccountModal.style.display = 'none';
}

function closeLoginModal() {
    loginModal.style.display = 'none';
}

// Реєстрація
document.getElementById('createAccountForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;

    if (password1 !== password2) {
        errorMessage.textContent = "Паролі не співпадають!";
        return;
    }

    const { user, session, error } = await supabase.auth.signUp({
        email: username,
        password: password1,
    });

    if (error) {
        errorMessage.textContent = error.message;
    } else {
        alert("Реєстрація успішна!"); 
        window.location.href = "main.html"; // Перенаправлення на main.html
    }
});

// Логін
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const { user, session, error } = await supabase.auth.signIn({
        email: loginUsername,
        password: loginPassword,
    });

    if (error) {
        loginErrorMessage.textContent = error.message;
    } else {
        alert("Логін успішний!");
        window.location.href = "main.html"; // Перенаправлення на main.html
    }
});

// Логін через Google
async function signInWithGoogle() {
    const { user, session, error } = await supabase.auth.signIn({ provider: 'google' });
}

// Додайте кнопку для логіну через Google у ваш HTML
