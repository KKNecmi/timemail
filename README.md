# ⏳ TimeMail

> Send messages to your future self — like a digital time capsule 💌  
> Built with Node.js, Express, JSON storage, and Gmail SMTP integration.

[![GitHub release](https://img.shields.io/github/release/KKNecmi/timemail?include_prereleases=&sort=semver&color=blue)](https://github.com/KKNecmi/timemail/releases/)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)
[![issues - timemail](https://img.shields.io/github/issues/KKNecmi/timemail?color=darkgreen)](https://github.com/KKNecmi/timemail/issues)

---

## 📸 Demo

📬 Kullanıcı formu doldurur  
💾 Mesaj `.json` dosyasına kaydedilir  
⏰ `cron` görevi zamanı geldiğinde mesajı e-posta olarak gönderir.

---

## 🚀 Özellikler

- HTML5 form arayüzü
- JSON dosyasıyla veri kaydetme
- `node-cron` ile zamanlama
- `nodemailer` ile Gmail SMTP mail gönderimi
- `.env` ile güvenli yapılandırma
- Tek tıkla `install.bat` ve `run.bat` başlatma

---

## ⚙️ Kurulum

```bash
git clone https://github.com/KKNecmi/timemail.git
cd timemail

🔧 Usage

### Option 1: Manual Run

```bash
npm install
node structure.js       # Starts the Express server
node mail-sender.js     # Starts the cron + mail system
```

### Option 2: One-Click Run

```bash
install.bat     # Installs dependencies and creates .env
run.bat         # Starts both backend and mail sender
```

> Visit: [http://localhost:3000/main.html](http://localhost:3000/main.html) to use the form

---

## 📜 License

MIT License © [KKNecmi](https://github.com/KKNecmi)

---