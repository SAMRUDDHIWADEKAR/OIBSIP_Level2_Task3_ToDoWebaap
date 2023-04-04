const input = document.getElementById("input");
const list = document.getElementById("list");

function addItem() {
    const text = input.value;
    if (text !== "") {
        const item = document.createElement("li");
        const span = document.createElement("span");
        span.innerText = text;
        const button = document.createElement("button");
        button.innerText = "Delete";
        button.addEventListener("click", () => {
            item.remove();
        });
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("click", () => {
            span.classList.toggle("completed");
        });
        item.appendChild(checkbox);
        item.appendChild(span);
        item.appendChild(button);
        list.appendChild(item);
        input.value = "";
    }
}