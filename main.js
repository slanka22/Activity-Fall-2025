const addHeaderContent = () => {
    const header = document.querySelector("#title-block-header");

    const h1 = document.createElement("h1");
    h1.textContent = "PWA for HCDD 340";
    h1.setAttribute("class", "title");
    header.appendChild(h1);

    const p = document.createElement("p");
    p.setAttribute("class", "subtitle");
    const t = document.createTextNode("Progressive Web App");
    p.appendChild(t);
    header.appendChild(p);

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

const createAListElement = (text) => {

    const li = document.createElement("li");
    const p = document.createElement("p");
    const t = document.createTextNode(text);

    p.appendChild(t);
    li.appendChild(p);

    return li;
};

const addObjectiveContent = () => {
    const section = document.createElement("section");

    const h2 = document.createElement("h2");
    h2.id = "learning-objectives";
    h2.textContent = "Learning Objectives";
    section.appendChild(h2);

    const ul = document.createElement("ul");
    let li = createAListElement("Become familiar with processes and tools for PWA design and development");
    ul.appendChild(li);

    li = createAListElement("Understand design requirements and guidelines for PWAs");
    ul.appendChild(li);

    li = createAListElement("Translate design ideas into functional prototypes and applications");
    ul.appendChild(li);

    li = createAListElement("Learn to use generative AI tool to support PWA design and development");
    ul.appendChild(li);

    section.append(ul);

    const sectionOverview = document.querySelector("#section-overview");
    sectionOverview.after(section);

}

document.querySelector("#btn_header")
    .addEventListener("click", addHeaderContent);

document.querySelector("#btn_overview")
    .addEventListener("click", addOverviewContent);

document.querySelector("#btn_objectives")
    .addEventListener("click", addObjectiveContent);
