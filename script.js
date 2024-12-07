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
        }
    } catch (error) {
        errorMessage.textContent = error.message;
    }
});

// Обробка форми логіну
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();  // Запобігає перезавантаженню сторінки

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    try {
        // Логін за допомогою Supabase
        const { user, error } = await supabase.auth.signInWithPassword({
            email: username,  // Тут ми використовуємо email як логін
            password: password,
        });

        if (error) {
            // Якщо є помилка при логіні, вивести її
            loginErrorMessage.textContent = error.message;
        } else {
            // Перенаправити на головну сторінку після успішного логіну
            window.location.href = 'main.html';  // Відкриває main.html після успішного логіну
        }
    } catch (error) {
        loginErrorMessage.textContent = 'Wystąpił błąd podczas logowania.';
    }
});

// Вихід з акаунта
const logoutButton = document.getElementById('logoutButton');
logoutButton.addEventListener('click', async () => {
    try {
        await supabase.auth.signOut();
        window.location.href = 'index.html';  // Перенаправлення на сторінку логіну
    } catch (error) {
        console.error('Błąd podczas wylogowywania:', error.message);
    }
});
// Обробка кнопок меню на головній сторінці
const profileButton = document.getElementById('profileButton');
const postsButton = document.getElementById('postsButton');
const logoutButton = document.getElementById('logoutButton');

const profileSection = document.getElementById('profileSection');
const postsSection = document.getElementById('postsSection');

// Показати профіль
profileButton.addEventListener('click', () => {
    profileSection.style.display = 'block';
    postsSection.style.display = 'none';
});

// Показати пости та новини
postsButton.addEventListener('click', () => {
    postsSection.style.display = 'block';
    profileSection.style.display = 'none';
});

// Вихід з акаунта
logoutButton.addEventListener('click', logout);
