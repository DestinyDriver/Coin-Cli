<div align="center">

# 🪙 Coin CLI

✨ A beautifully simple Node.js CLI to fetch live cryptocurrency prices using the CoinGecko Pro API ✨

[![Node.js](https://img.shields.io/badge/Node.js-green)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![CLI Tool](https://img.shields.io/badge/Type-CLI-informational)]()

</div>

---

## 📦 Features

- 🔐 **Securely store your CoinGecko API key**
- 💱 **Get real-time crypto prices** for one or multiple coins
- 🌍 **Convert prices into any currency** (USD, INR, etc.)
- 📖 Clean help, about, and support commands

---

## 🚀 Getting Started

### 📥 Clone & Install

```bash
git clone https://github.com/DestinyDriver/Coin-Cli.git
cd Coin-Cli
npm install
```

### 🔑 Set your API key

```bash
coin key set
```

> 👉 Get a FREE demo API key from [CoinGecko](https://www.coingecko.com/en/api)

---

## 💡 Usage Examples

```bash
# 🔑 Set your API key
coin key set

# 🧾 Show stored API key
coin key show

# ❌ Delete stored API key
coin key delete

# 💰 Check price of Bitcoin
coin check price --coin=bitcoin --cur=usd

# 💹 Check price of multiple coins
coin check price --coin=bitcoin,ethereum --cur=inr

# 🧠 About this CLI
coin about

```

---

## 🛠️ Tech Stack

- **Node.js**
- **Commander.js** – for CLI commands
- **Axios** – for API requests
- **Configstore** – for saving API keys locally
- **Inquirer** – for interactive user input
- **Colors** – for styled terminal output
- **Figlet** – ASCII art banner


---

## 📬 Support

- 🐞 Found a bug? [Report an issue](https://github.com/DestinyDriver/Coin-Cli/issues)
- 📧 Contact: destinydriverx@gmail.com

---

## 👨‍💻 Author

**Made with ❤️ by [Destinydriver](https://github.com/DestinyDriver)**

---

## ⭐ Show Some Love

If this CLI made your crypto tracking easier, give it a ⭐ on [GitHub](https://github.com/DestinyDriver/Coin-Cli)

