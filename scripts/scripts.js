const pointTemplate = document.getElementById("data-here");

async function getDataAll() {
    await fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then((data) => {
            console.log(data);

            data.forEach(lists => {
                getUser(lists);
            });

        })
        .catch((error) => {
            console.log(error);
        });
}

getDataAll()

function getUser(data) {
    const template = document.getElementById("data");

    const setElement = template.content.cloneNode(true);
    setElement.querySelector('.one').textContent = `${data.userId ?? "-"}`;
    setElement.querySelector('.two').textContent = `${data.id ?? "-"}`;
    setElement.querySelector('.three').textContent = `${data.title ?? "-"}`;
    setElement.querySelector('.four').textContent = `${data.body ?? "-"}`;

    // когда вы вызываете document.body.appendChild, содержимое DocumentFragment перемещается в DOM и из фрагмента. Фрагмент не сохраняет ссылку. Идея заключается в том, что у узла не может быть двух родителей. Это означает, что к тому времени, когда вы вызываете addEventListener, не существует никаких узлов, с которыми могли бы происходить события! Решение состоит в том, чтобы подключить прослушиватель событий перед вызовом .appendChild.
    pointTemplate.appendChild(setElement);

}



let tbody = document.querySelector("#data-here tbody");
let rows = [...tbody.querySelectorAll("tr")];
let columns = [...document.querySelectorAll("#data-here thead th")];
for (let e of columns) e.onclick = td_click;

function td_click() {
    let i = columns.indexOf(this);
    rows.sort((a, b) => a.cells[i].textContent.localeCompare(b.cells[i].textContent));
    for (let e of rows) tbody.appendChild(e);
}