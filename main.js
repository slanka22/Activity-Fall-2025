const addHeaderContent = () => {
    console.log("Add header!");
};

const addOverviewContent = () => {
    const section = document.querySelector("#section-overview");

    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = "./icons/shield-256.png";
    img.alt = "Penn State Logo";
    figure.appendChild(img);
    section.appendChild(figure);

    const h2 = document.createElement("h2");
    h2.textContent = "Overview";
    h2.id = "overview";
    section.appendChild(h2);

    const p = document.createElement("p");

    const overviewContent = "This course will provide a hands-on introduction to different methods and tools for designing and developing mobile systems. Toward this goal, the course will focus on progressive web apps (PWA) to design interfaces, implement features, and address accessibility requirements for different devices. The course will follow a learning-by-doing approach through different class activities, assignments, and a final project. The course content will focus on using generative AI to support design and implementation tasks."
    const t = document.createTextNode(overviewContent);
    p.appendChild(t);
    section.appendChild(p);

};


const addObjectiveContent = () => {
    console.log("Add objective!");
};


document.querySelector("#btn_header")
    .addEventListener("click", addHeaderContent);

document.querySelector("#btn_overview")
    .addEventListener("click", addOverviewContent);

document.querySelector("#btn_objectives")
    .addEventListener("click", addObjectiveContent);
