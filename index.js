const express = require('express');
const path = require('path');
const app = express();

// Устанавливаем статическую папку для public
app.use(express.static(path.join(__dirname, 'public')));

// Маршрут для главной страницы (Section 1)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'section1.html'));
});

// Маршрут для разделов
app.get('/section/:name', (req, res) => {
    const sectionName = req.params.name;
    res.sendFile(path.join(__dirname, `${sectionName}.html`));
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});