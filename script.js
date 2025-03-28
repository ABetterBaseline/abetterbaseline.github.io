document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetID = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetID);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    document.querySelectorAll('h1, h2, p, a').forEach(el => {
        el.innerHTML = el.textContent.split('').map(char => {
            if (char.trim() === "") return " ";
            return `<span>${char}</span>`;
        }).join('');
    });

    console.log("Welcome to A Better Baseline — For those who see the world not as it is, but as it could be.");
});

