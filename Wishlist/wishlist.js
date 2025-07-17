const input = document.getElementsByClassName("input")[0];
const button = document.getElementsByClassName("button btn-primary cursor")[0];
const add = document.getElementsByClassName("todos-container")[0];

const userList = [];

function num() {
    let id = '';
    for (let i = 0; i < 9; i++) {
        id += Math.floor(Math.random() * 10);
    }
    return id;
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    const value = input.value;

    let duplicate = false;
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].user.toLowerCase() === value.toLowerCase()) {
            duplicate = true;
            break;
        }
    }

    if (!duplicate) {
        if (value.length > 0) {
            const check = {
                id: num(),
                user: value,
                iscomplete: false,
            };
            userList.push(check);
            console.log(check);
            console.log(userList)
            print();
        }
    }
});

add.addEventListener("click", (e) => {
    const keyTarget = e.target.closest("[data-key]");
    const delTarget = e.target.closest("[data-todokey]");

    const key = keyTarget?.dataset.key;
    const delKey = delTarget?.dataset.todokey;

    
    if (key) {
        for (let i = 0; i < userList.length; i++) {
            if (userList[i].id === key) {
                userList[i].iscomplete = !userList[i].iscomplete;
                break;
            }
        }
    }
    console.log(userList);


    if (delKey) {
        for (let i = 0; i < userList.length; i++) {
            if (userList[i].id === delKey) {
                userList.splice(i, 1);
                break;
            } 
        }
    }
    print();
});


const print = () => {
    add.innerHTML = userList.map(({ id, user, iscomplete }) => `
        <div class="todo relative">
            <input class="t-checkbox t-pointer"
                id="${id}"
                type="checkbox" 
                data-key="${id}"
                ${iscomplete ? "checked" : ""}
            >
            <label 
                for="${id}" 
                class="todo todo-text t-pointer ${iscomplete ? "checked-todo" : ""}" 
                data-key="${id}">
                ${user}
            </label>
            <button class="absolute right-0 button cursor"> 
                <span data-todokey=${id} 
                class="del-btn material-icons-outlined">delete</span>
            </button>
        </div>
    `)
    
};
