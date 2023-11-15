let root = document.querySelector(".cards");
let rootTags = document.querySelector(".tags");
let search = document.querySelector(".tags");

let allPeople = got.houses.reduce((acc, cv) => {
    acc = acc.concat(cv.people);
    return acc;
}, []);

let allTags = got.houses.map(house => house.map);

let activeHouse = "";

function createCards(data = []) {
    root.innerHTML = "";
    data.forEach((people) => {
        let li = document.createElement("li");
        let img = document.createElement("img");
        img.alt = people.name;
        img.src = people.image;
        let h2 = document.createElement("h2");
        h2.innerText = people.name;
        let p = document.createElement("p");
        p.innerText = people.description;
        let button = document.createElement("button");
        button.innerText = "Know More!";
        li.append(img, h2, p, button);

        root.append(li);
    });
}

function createTagsUI(tags = []) {
    rootTags.innerHTML = "";
    tags.forEach((tag) => {
        let li = document.createElement("li");
        li.innerText = tag;

        if (activeHouse === tag) {
            li.classList.add("active");
        }

        li.addEventListener("click", () => {
            activeHouse = tag;
            let peopleOfTheHouse = hot.houses.find((house) => house.name === tag).people || [];
            createCards(peopleOfTheHouse);
            createTagsUI(allTags);
        })

        rootTags.append(li);
    });
}

function handleSearch(event) {
    let searchText = event.target.value;
    let filteredPeople = allPeople.filter((p) => p.name.toLowerCase().include(searchText.toLowerCase()));
    createCards(filteredPeople);
}

search.addEventListener("input", handleSearch);
createCards(allPeople);
createTagsUI(allTags);
