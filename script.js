function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    const positions = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
    const sizes = [100, 150, 200, 250, 300, 350];

    const randomIndex = Math.floor(Math.random() * positions.length);
    const randomLeft = positions[randomIndex] * window.innerWidth;

    const randomSizeIndex = Math.floor(Math.random() * sizes.length);
    const randomSize = sizes[randomSizeIndex];

    heart.style.left = `${randomLeft}px`;
    heart.style.width = `${randomSize}px`;
    heart.style.height = `${randomSize}px`;

    // Добавляем обработчик события клика
    heart.addEventListener("click", () => {
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");

        const messagebox = document.createElement("div");
        messagebox.classList.add("message-box");

        const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
        messagebox.textContent = randomWish;

        overlay.appendChild(messagebox);
        document.body.appendChild(overlay);

        // Делаем overlay активным после небольшой задержки, чтобы анимация корректно применялась
        setTimeout(() => overlay.classList.add("active"), 10);

        // Функция для закрытия overlay
        const closeOverlay = () => {
            overlay.classList.remove("active"); 
            setTimeout(() => overlay.remove(), 500); 
        };

        overlay.addEventListener("click", closeOverlay);
        setTimeout(closeOverlay, 5000);
    });

    document.getElementById("hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 1000);

// Массив пожеланий
const wishes = [
    "Счастья", "Радости", "Успехов", "Здоровья", "Удачи", "Любви", "Процветания", "Веселья", "Благополучия", "Исполнения желаний",
    "Достатка", "Мира", "Тепла", "Дружбы", "Нежности", "Терпения", "Оптимизма", "Энергии", "Вдохновения", "Сил",
    "Гармонии", "Мотивации", "Добра", "Легкости", "Спокойствия", "Верности", "Творчества", "Романтики", "Веры в себя", "Ярких эмоций",
    "Везения", "Самореализации", "Долголетия", "Фантазии", "Музыки в душе", "Понимания", "Радужного настроения", "Новогоднего настроения", "Солнечных дней", "Легкости в жизни",
    "Свободы", "Незабываемых моментов", "Сюрпризов", "Чудес", "Теплых воспоминаний", "Крепкого духа", "Смеха", "Непобедимости", "Ярких впечатлений", "Исполнения мечты"
];