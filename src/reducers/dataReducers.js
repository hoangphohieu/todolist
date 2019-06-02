const uuidv4 = require('uuid/v4');

let data2 = [{
        name: 'Yến Báo chí và tuyên truyền',
        level: 0,
        id: uuidv4()
    },
    {
        name: 'dại học Hà Nội',
        level: 2,
        id: uuidv4()
    },
    {
        name: 'Bách khoa hà nội',
        level: 2,
        id: uuidv4()
    },
    {
        name: 'bưu chính  viễn thông',
        level: 2,
        id: uuidv4()
    },
    {
        name: 'Công nghiệp mỹ thuật Hà Nội',
        level: 1,
        id: uuidv4()
    },
];

var data;
if (localStorage.localData) { data = JSON.parse(localStorage.localData) } else { data = data2; }

if (typeof(Storage) == "undefined") {
    localStorage.localData = JSON.stringify(data);
}
 function searchTodo(state = data, action) {
    console.log('reduver')
    switch (action.type) {
        case 'searchTodo':

            if (action.dataSearch == null) state = [...data]
            else {
                state = data.filter(
                    (value) => {
                        return (value.name.toLowerCase().indexOf(action.dataSearch.toLowerCase().trim()) !== -1);
                    }
                )
            }
            return [...state];

        case 'sortName':
            {
                if (action.dataSearch == null) state = [...data];
                else {
                    state = data.filter(
                        (value) => {
                            return (value.name.toLowerCase().indexOf(action.dataSearch.toLowerCase().trim()) !== -1);
                        }
                    )
                }
                state.sort((a, b) => {
                    var x = a.name.toLowerCase();
                    var y = b.name.toLowerCase();
                    if (x < y) { return -1; }
                    if (x > y) { return 1; }
                    return 0;
                });
                return [...state];
            }

        case 'sortLevel':
            {
                if (action.dataSearch == null) state = [...data];
                else {
                    state = data.filter(
                        (value) => {
                            return (value.name.toLowerCase().indexOf(action.dataSearch.toLowerCase().trim()) !== -1);
                        }
                    )
                }
                let data3 = state.sort((a, b) => b.level - a.level);
                return data3;
            }

        case 'addSubmit':
            {
                let a = {
                    name: action.taskName,
                    level: action.level,
                    id: uuidv4()
                }
                data = [...state, a]
                localStorage.localData = JSON.stringify(data);
                return data;
            }
        case 'changeItems':
            let searchId = action.id;
            for (let variable in data) {
                if (searchId === data[variable].id) {
                    data[variable].name = action.changeName;
                    if (action.changeLevel !== null) { data[variable].level = action.changeLevel };
                }
            }
            localStorage.localData = JSON.stringify([...data]);
            return [...data];
        case 'deleteItems':
            for (let variable in data) {
                if (action.id === data[variable].id) { data.splice(variable, 1) }
            }
            localStorage.localData = JSON.stringify([...data]);
            console.log(localStorage.localData)
            return [...data];
        default:


            return state;
    }

}export default searchTodo;