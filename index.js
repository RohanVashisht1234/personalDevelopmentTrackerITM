const response = fetch("./api.json");
const mainDiv = document.getElementById("maindiv");


const addIconToH1 = (name) => {
    return `<i class="fa ${name}" aria-hidden="true"></i>`;
};


response.then((value) => value.json()).then((data) => {
    data.map((element, idx) => {
        const div = document.createElement("div");
        {
            const childDiv = document.createElement("div");
            {
                childDiv.innerHTML += (`<h1>${addIconToH1(element.icon)} ${element.name}</h1>`);
                childDiv.innerHTML += (`<p>${element.description}</p>`);
            }

            const image = document.createElement("img");
            {
                image.setAttribute("src", `images/${element.image}`);
            }
            if (idx % 2 == 0) {
                div.appendChild(childDiv);
                div.appendChild(image);
            } else {
                div.appendChild(image);
                div.appendChild(childDiv);
            }
        }
        mainDiv.appendChild(div);
    });
});