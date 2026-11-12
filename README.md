# Impossible Login Button

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/impossible-login-button/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable reconstruction of the uploaded 13.5-second screen recording, titled **Impossible Login Button**.

## Video observations

The recording shows a dark, grid-textured page with a centered heading and a compact neon-edged login card. The card contains:
- Welcome back heading
- Email and password inputs
- Forgot link and remember-me checkbox
- A pill-shaped purple Sign in button
- A small sign-up prompt

The button moves away when approached while the credentials are incomplete, then becomes usable after valid-looking details are entered. The video includes a small HTML source preview, but the text is too compressed to transcribe verbatim. This project recreates the visual design and interaction rather than claiming to be the original source.

## Features

- Responsive dark login card with purple neon accents.
- Impossible/dodging login button while credentials are incomplete.
- Button unlocks when email is valid and password has at least 6 characters.
- Show/hide password toggle.
- Remember-me checkbox.
- Forgot password helper message.
- Demo success state.
- Keyboard-friendly form controls.
- No dependencies or build step.

## Run locally

```bash
python -m http.server 8000
```

Open http://localhost:8000

## Demo

Enter a valid email address and a password of at least 6 characters. The button stops dodging and can be clicked.

## Project structure

```text
impossible-login-button/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Production note

This is a front-end interaction demo. It does not authenticate users or store passwords. Connect the form submit handler to a secure backend, use HTTPS, hash passwords server-side, and implement real password-reset and session handling before production use.
