{
    const tasks = [
        {
            content: "do the laundry",
            done: false,
        },
        {
            content: "make my girl happy",
            done: true,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="tasks__item">
           <button class="tasks__button tasks__button--toggleDone js-toggleDone">
           ${task.done ? "✔" : ""}
           </button>
           <span class="tasks-content${ task.done ? "tasks__content--done" : ""}">${task.content}</span>
           <button class="tasks__button tasks__button--remove js-remove">
           🗑️
           </button>
            </li>
            `
            document.querySelector(".js-tasks").innerHTML = htmlString;
        }


    };

    const init = () => {
        render()
    };

    init();
}