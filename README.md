# Random Color Background Changer

A tiny, responsive web app that randomly changes the page background and text/button palette on click.

## 🚀 Features

- Single-button interaction: changes the body background to a random color.
- Title and button color update independently for a vibrant multicolor experience.
- Smooth transition animation for style updates.
- Fully responsive layout for desktop, tablet, and mobile.

## 📁 Project Structure

- `index.html`: HTML structure and main button.
- `style.css`: Minimal styling with transitions and responsive breakpoints.
- `script.js`: JavaScript color generation & click handler.

## 🛠️ How it works

1. Button click triggers `getRandomColor()` and `getRandomColor2()`.
2. `Math.random()` + `toString(16)` creates a hex color code.
3. `document.body.style.backgroundColor` updates the background.
4. `titleName.style.color` and `btnPrimary.style.backgroundColor` update the title/button colors.

## ▶️ How to run

1. Open this link:
2. Click **Change Colour**.
----
Or, you can just copy and paste it into your own code, then run it.

## 💡 Customization ideas

- Add a color history log or copy button.
- Add a “lock color” toggle for title/button or background.
- Add color contrast checks for accessible text.
- Animate gradients instead of flat colors.

## 🧰 Requirements

- Modern browser (Chrome, Edge, Firefox, Safari)
- No build step needed (vanilla HTML/CSS/JS)

## 📬 Notes

This is intended as a learning project for DOM manipulation, color math, and responsive UI design.
