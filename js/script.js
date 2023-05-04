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
            <li>
            ${task.content}
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