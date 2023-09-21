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
    const setHTML = document.createElement('tbody');
    setHTML.innerHTML = `
        <tr>
                <td class="one">${data.userId ?? "-"}</td>
                <td class="two">${data.id ?? "-"}</td>
                <td class="three">${data.title ?? "-"}</td>
                <td class="four">${data.body ?? "-"}</td>
            </tr>
    `

    pointTemplate.appendChild(setHTML);
}