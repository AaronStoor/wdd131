
if (input.value.trim() !== '') {
    const input = document.querySelector("#favchap");
    const button = document.querySelector("#button");
    const list = document.querySelector("_______");
    const li = document.querySelector("li");
    const deleteButton = document.querySelector("button");
    input.value = '';
    li.textContent = input.value;
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    list.append(li);

    button.addEventListener("click", function () {
        list.removeChild(li);
        input.focus();
    });
}