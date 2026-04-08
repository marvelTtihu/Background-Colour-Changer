# Random Color Background Changer

A tiny, responsive web app that randomly changes the page background and text/button palette on click.

## 🚀 Features

- Single-button interaction: changes the body background to a random color.
- Smooth transition animation for style updates.
- Fully responsive layout for desktop, tablet, and mobile.
- A color name.

## 🛠️ How it works

1. Button click triggers `getRandomColor()` and `getRandomColor2()`.
2. `Math.random()` + `toString(16)` creates a hex color code.
3. `document.body.style.backgroundColor` updates the background.
4. `titleName.style.color` and `btnPrimary.style.backgroundColor` update the title/button colors.

## ▶️ How to run

1. Open this link: [Here](https://marvelttihu.github.io/Background-Colour-Changer/)
2. Click **Change Colour**.
----
Or,
1. Download or clone this repository
2. Navigate to the ```Background-Colour-Changer``` folder
3. Open index.html in your web browser
4. Click **Change Colour**

## 📬 Notes

This is intended as a learning project for DOM manipulation, color math, and responsive UI design.
