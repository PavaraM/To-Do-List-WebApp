# 📝 To-Do List Web App

A clean, minimalist task management web application built with vanilla JavaScript. Keep track of your daily tasks with a beautiful dark-themed interface and persistent storage.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

- **Task Management** - Add, complete, and clear tasks with ease
- **Persistent Storage** - Tasks are saved in browser local storage
- **Completion Tracking** - Mark tasks as complete with visual feedback
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Dark Theme** - Easy on the eyes with a modern dark color scheme
- **Back to Top** - Smooth scroll button for long task lists
- **Zero Dependencies** - Pure vanilla JavaScript, no frameworks needed

## 🚀 Live Demo

Check out the live application: [To-Do List Demo](https://dumb-todolist.netlify.app/)

## 📸 Preview

<img width="1867" alt="To-Do List Application Screenshot" src="https://github.com/user-attachments/assets/02b0ece8-598d-4bc4-bba2-9b41b1a59fba" />

## 🛠️ Built With

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with custom properties
- **JavaScript (ES6+)** - Dynamic functionality and DOM manipulation
- **Local Storage API** - Client-side data persistence

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/pavaram/To-Do-List-WebApp.git
```

2. Navigate to the project directory:
```bash
cd To-Do-List-WebApp
```

3. Open `index.html` in your web browser:
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

That's it! No build process or dependencies required.

## 💻 Usage

1. **Add a Task**: Type your task in the input field and click "Add" or press Enter
2. **Complete a Task**: Click the "Complete" button next to any task
3. **Clear All Tasks**: Click the "Clear" button to remove all tasks from the list
4. **Scroll to Top**: Use the ↑ button that appears when you scroll down

## 🎨 Customization

### Changing Colors

Edit the color values in `style.css`:

```css
/* Primary colors */
h1, p { color: gold; }           /* Accent color */
body { color: #d8d8d8; }         /* Text color */
.header { background: rgba(0, 0, 0, 0.626); }  /* Header background */
```

### Background Image

Replace `src/background.jpg` with your own image, or modify the CSS:

```css
body {
  background-image: url("your-image.jpg");
}
```

## 📁 Project Structure

```
To-Do-List-WebApp/
├── index.html              # Main HTML file
├── style.css               # Stylesheet
├── script.js               # JavaScript logic
├── src/
│   ├── background.jpg      # Background image
│   └── fav.png            # Favicon
├── CNAME                   # Custom domain configuration
├── README.md               # Project documentation
└── To-Do_List_WebApp.code-workspace  # VS Code workspace
```

## 🔧 How It Works

The application uses the browser's Local Storage API to persist tasks:

```javascript
// Save tasks
localStorage.setItem("tasks", JSON.stringify(tasks));

// Retrieve tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
```

Each task is stored as an object with:
- `id` - Unique timestamp identifier
- `name` - Task description
- `completed` - Boolean completion status

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

## 📝 Future Enhancements

- [ ] Task editing functionality
- [ ] Task categories/tags
- [ ] Due dates and reminders
- [ ] Task priority levels
- [ ] Dark/Light theme toggle
- [ ] Export/Import tasks
- [ ] Search and filter functionality
- [ ] Keyboard shortcuts

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Pavara Mirihagalla**

- GitHub: [@pavaram](https://github.com/pavaram)

## 🙏 Acknowledgments

- Developed as a school project
- Thanks to ChatGPT for development assistance
- Inspired by the need for simple, effective task management

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub.

---

<div align="center">
Made with ❤️ by Pavara Mirihagalla
</div>
