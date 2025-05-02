# 🔐 React Password Generator

A clean and simple **Random Password Generator** built with **React**, allowing users to generate secure passwords with customizable options including length, numbers, and special characters.

## 🚀 Features

* Real-time password generation
* Adjustable password length (6–50 characters)
* Toggle options for including numbers and special characters
* Copy password to clipboard with one click
* Responsive and minimal UI using Tailwind CSS


## 🛠️ Tech Stack

* React
* Tailwind CSS
* JavaScript (ES6+)
* HTML & CSS

## 📦 Installation & Setup

1. **Clone the repo:**

   ```bash
   git clone https://github.com/Singhaditya-sde/react-password-generator.git
   cd react-password-generator
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

## 🧠 How It Works

* Uses `useState`, `useEffect`, `useCallback`, and `useRef` hooks from React.
* Dynamically constructs a character set based on selected options.
* Password is updated automatically when settings change.
* Copy function uses `navigator.clipboard`.

## 📁 Project Structure

```
react-password-generator/
├── public/
├── src/
│   ├── App.js          # Main app logic
│   ├── App.css         # Styles (uses Tailwind CSS classes)
│   └── index.js
├── package.json
└── README.md
```


## 🙋‍♂️ Author

* Aditya Kumar(https://github.com/Singhaditya-sde)
