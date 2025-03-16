document.addEventListener("DOMContentLoaded", function () {
    const root = document.getElementById("root");

    const container = document.createElement("div");
    container.className = "container";

    const heading = document.createElement("h1");
    heading.textContent = "안녕하세요! 저는 이도헌입니다.";

    const intro1 = document.createElement("p");
    intro1.textContent = "경성대학교 소프트웨어학과에 재학 중입니다.";

    const intro2 = document.createElement("p");
    intro2.textContent = "웹 개발과 IT 기기에 관심이 많습니다.";

    const email = document.createElement("p");
    email.innerHTML = '연락처: <a href="mailto:honey93740@gmail.com">honey93740@gmail.com</a>';

    container.appendChild(heading);
    container.appendChild(intro1);
    container.appendChild(intro2);
    container.appendChild(email);

    root.appendChild(container);
});
