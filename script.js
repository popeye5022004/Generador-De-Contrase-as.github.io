document.getElementById('generate').addEventListener('click', (event) => {
    generatePassword();
    createParticles(event);
});

document.getElementById('copy').addEventListener('click', (event) => {
    copyPassword();
    createParticles(event);
});

document.getElementById('language').addEventListener('change', (event) => {
    setLanguage(event.target.value);
    localStorage.setItem('language', event.target.value);
    updateLabels();
});

function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characters = lowercase;
    if (includeUppercase) characters += uppercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById('password').value = password;
    updateStrengthMeter(password);
}

function copyPassword() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    alert('Contraseña copiada al portapapeles');
}

function createParticles(event) {
    const button = event.target;
    const rect = button.getBoundingClientRect();
    const particles = document.createElement('div');
    particles.className = 'particles';
    particles.style.top = `${event.clientY - rect.top}px`;
    particles.style.left = `${event.clientX - rect.left}px`;
    button.appendChild(particles);

    setTimeout(() => {
        button.removeChild(particles);
    }, 600);
}

function updateStrengthMeter(password = '') {
    const strengthMeter = document.getElementById('strength-meter');
    let strength = 0;

    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    const strengthWidth = (strength / 5) * 100;
    strengthMeter.style.width = `${strengthWidth}%`;

    if (strength <= 2) {
        strengthMeter.style.backgroundColor = 'red';
    } else if (strength <= 4) {
        strengthMeter.style.backgroundColor = 'yellow';
    } else {
        strengthMeter.style.backgroundColor = 'green';
    }
}

const translations = {
    es: {
        title: 'Generador de Contraseñas Seguras',
        lengthLabel: 'Longitud de la contraseña:',
        uppercaseLabel: 'Incluir mayúsculas',
        numbersLabel: 'Incluir números',
        symbolsLabel: 'Incluir símbolos',
        generate: 'Generar Contraseña',
        copy: 'Copiar',
        languageLabel: 'Idioma:'
    },
    en: {
        title: 'Secure Password Generator',
        lengthLabel: 'Password Length:',
        uppercaseLabel: 'Include Uppercase',
        numbersLabel: 'Include Numbers',
        symbolsLabel: 'Include Symbols',
        generate: 'Generate Password',
        copy: 'Copy',
        languageLabel: 'Language:'
    },
    fr: {
        title: 'Générateur de mots de passe sécurisés',
        lengthLabel: 'Longueur du mot de passe:',
        uppercaseLabel: 'Inclure des majuscules',
        numbersLabel: 'Inclure des chiffres',
        symbolsLabel: 'Inclure des symboles',
        generate: 'Générer le mot de passe',
        copy: 'Copier',
        languageLabel: 'Langue:'
    },
    de: {
        title: 'Sicherer Passwortgenerator',
        lengthLabel: 'Passwortlänge:',
        uppercaseLabel: 'Großbuchstaben einschließen',
        numbersLabel: 'Zahlen einschließen',
        symbolsLabel: 'Symbole einschließen',
        generate: 'Passwort generieren',
        copy: 'Kopieren',
        languageLabel: 'Sprache:'
    },
    it: {
        title: 'Generatore di password sicure',
        lengthLabel: 'Lunghezza della password:',
        uppercaseLabel: 'Includi maiuscole',
        numbersLabel: 'Includi numeri',
        symbolsLabel: 'Includi simboli',
        generate: 'Genera password',
        copy: 'Copia',
        languageLabel: 'Lingua:'
    },
    pt: {
        title: 'Gerador de senhas seguras',
        lengthLabel: 'Comprimento da senha:',
        uppercaseLabel: 'Incluir maiúsculas',
        numbersLabel: 'Incluir números',
        symbolsLabel: 'Incluir símbolos',
        generate: 'Gerar senha',
        copy: 'Copiar',
        languageLabel: 'Idioma:'
    },
    zh: {
        title: '安全密码生成器',
        lengthLabel: '密码长度:',
        uppercaseLabel: '包含大写字母',
        numbersLabel: '包含数字',
        symbolsLabel: '包含符号',
        generate: '生成密码',
        copy: '复制',
        languageLabel: '语言:'
    },
    hi: {
        title: 'सुरक्षित पासवर्ड जनरेटर',
        lengthLabel: 'पासवर्ड की लंबाई:',
        uppercaseLabel: 'बड़े अक्षरों को शामिल करें',
        numbersLabel: 'संख्याओं को शामिल करें',
        symbolsLabel: 'प्रतीकों को शामिल करें',
        generate: 'पासवर्ड जनरेट करें',
        copy: 'कॉपी करें',
        languageLabel: 'भाषा:'
    },
    ar: {
        title: 'مولد كلمات المرور الآمنة',
        lengthLabel: 'طول كلمة المرور:',
        uppercaseLabel: 'تضمين الأحرف الكبيرة',
        numbersLabel: 'تضمين الأرقام',
        symbolsLabel: 'تضمين الرموز',
        generate: 'توليد كلمة مرور',
        copy: 'نسخ',
        languageLabel: 'اللغة:'
    },
    bn: {
        title: 'নিরাপদ পাসওয়ার্ড জেনারেটর',
        lengthLabel: 'পাসওয়ার্ডের দৈর্ঘ্য:',
        uppercaseLabel: 'বড় হাতের অক্ষর অন্তর্ভুক্ত করুন',
        numbersLabel: 'সংখ্যা অন্তর্ভুক্ত করুন',
        symbolsLabel: 'প্রতীক অন্তর্ভুক্ত করুন',
        generate: 'পাসওয়ার্ড তৈরি করুন',
        copy: 'কপি করুন',
        languageLabel: 'ভাষা:'
    },
    ru: {
        title: 'Генератор надежных паролей',
        lengthLabel: 'Длина пароля:',
        uppercaseLabel: 'Включить заглавные буквы',
        numbersLabel: 'Включить цифры',
        symbolsLabel: 'Включить символы',
        generate: 'Создать пароль',
        copy: 'Копировать',
        languageLabel: 'Язык:'
    },
    ur: {
        title: 'محفوظ پاس ورڈ جنریٹر',
        lengthLabel: 'پاس ورڈ کی لمبائی:',
        uppercaseLabel: 'بڑے حروف شامل کریں',
        numbersLabel: 'نمبر شامل کریں',
        symbolsLabel: 'علامات شامل کریں',
        generate: 'پاس ورڈ تیار کریں',
        copy: 'کاپی کریں',
        languageLabel: 'زبان:'
    },
    id: {
        title: 'Pembuat Kata Sandi Aman',
        lengthLabel: 'Panjang Kata Sandi:',
        uppercaseLabel: 'Sertakan Huruf Kapital',
        numbersLabel: 'Sertakan Angka',
        symbolsLabel: 'Sertakan Simbol',
        generate: 'Buat Kata Sandi',
        copy: 'Salin',
        languageLabel: 'Bahasa:'
    },
    ja: {
        title: '安全なパスワード生成器',
        lengthLabel: 'パスワードの長さ:',
        uppercaseLabel: '大文字を含める',
        numbersLabel: '数字を含める',
        symbolsLabel: '記号を含める',
        generate: 'パスワードを生成する',
        copy: 'コピー',
        languageLabel: '言語:'
    },
    yo: {
        title: 'Olùdá Ọrọigbaniwọlé To Dára',
        lengthLabel: 'Gigun Ọrọigbaniwọlé:',
        uppercaseLabel: 'Ṣafikun Lẹta Nla',
        numbersLabel: 'Ṣafikun Nọ́mbà',
        symbolsLabel: 'Ṣafikun Àpẹẹrẹ',
        generate: 'Ṣẹda Ọrọigbaniwọlé',
        copy: 'Daakọ',
        languageLabel: 'Ede:'
    },
    mr: {
        title: 'सुरक्षित पासवर्ड जनरेटर',
        lengthLabel: 'पासवर्डची लांबी:',
        uppercaseLabel: 'मोठ्या अक्षरांचा समावेश करा',
        numbersLabel: 'संख्या समाविष्ट करा',
        symbolsLabel: 'प्रतीक समाविष्ट करा',
        generate: 'पासवर्ड जनरेट करा',
        copy: 'कॉपी करा',
        languageLabel: 'भाषा:'
    },
    te: {
        title: 'సురక్షితమైన పాస్‌వర్డ్ జనరేటర్',
        lengthLabel: 'పాస్‌వర్డ్ పొడవు:',
        uppercaseLabel: 'పెద్దఅక్షరాలు చేర్చండి',
        numbersLabel: 'సంఖ్యలను చేర్చండి',
        symbolsLabel: 'సంబోళాలను చేర్చండి',
        generate: 'పాస్‌వర్డ్ ఉత్పత్తి చేయండి',
        copy: 'కాపీ చేయండి',
        languageLabel: 'భాష:'
    },
    tr: {
        title: 'Güvenli Şifre Oluşturucu',
        lengthLabel: 'Şifre Uzunluğu:',
        uppercaseLabel: 'Büyük Harfleri Dahil Et',
        numbersLabel: 'Rakamları Dahil Et',
        symbolsLabel: 'Sembolleri Dahil Et',
        generate: 'Şifre Oluştur',
        copy: 'Kopyala',
        languageLabel: 'Dil:'
    },
    ta: {
        title: 'பாதுகாப்பான கடவுச்சொல் உருவாக்கி',
        lengthLabel: 'கடவுச்சொல் நீளம்:',
        uppercaseLabel: 'பெரிய எழுத்துக்களை உள்ளிடவும்',
        numbersLabel: 'எண்களை உள்ளிடவும்',
        symbolsLabel: 'சின்னங்களை உள்ளிடவும்',
        generate: 'கடவுச்சொல்லை உருவாக்கு',
        copy: 'நகலெடுக்கவும்',
        languageLabel: 'மொழி:'
    },
    yue: {
        title: '安全密碼生成器',
        lengthLabel: '密碼長度:',
        uppercaseLabel: '包括大寫字母',
        numbersLabel: '包括數字',
        symbolsLabel: '包括符號',
        generate: '生成密碼',
        copy: '複製',
        languageLabel: '語言:'
    },
    vi: {
        title: 'Trình Tạo Mật Khẩu An Toàn',
        lengthLabel: 'Độ Dài Mật Khẩu:',
        uppercaseLabel: 'Bao Gồm Chữ Hoa',
        numbersLabel: 'Bao Gồm Số',
        symbolsLabel: 'Bao Gồm Ký Tự Đặc Biệt',
        generate: 'Tạo Mật Khẩu',
        copy: 'Sao Chép',
        languageLabel: 'Ngôn Ngữ:'
    }
};

function setLanguage(lang) {
    document.documentElement.lang = lang;
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach((element) => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[lang][key];
    });
}

function updateLabels() {
    const currentLang = localStorage.getItem('language') || 'en';
    document.getElementById('title').textContent = translations[currentLang].title;
    document.getElementById('length-label').textContent = translations[currentLang].lengthLabel;
    document.getElementById('uppercase-label').textContent = translations[currentLang].uppercaseLabel;
    document.getElementById('numbers-label').textContent = translations[currentLang].numbersLabel;
    document.getElementById('symbols-label').textContent = translations[currentLang].symbolsLabel;
    document.getElementById('generate').textContent = translations[currentLang].generate;
    document.getElementById('copy').textContent = translations[currentLang].copy;
    document.getElementById('language-label').textContent = translations[currentLang].languageLabel;
    document.getElementById('language').value = currentLang;
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
    updateLabels();
});