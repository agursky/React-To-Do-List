var listOfTasks = ['get food', 'get gas', 'pay bills', 'make appointment'];

function ToDoList(props) {
    return (<ul>
              {props.tasks.map(function(item, ind) {
                return <li key={ind}>{item}</li>
               })}
        </ul>);
}

function AddTaskForm(props) {
    return (
            <form>
                <input type='text' placeholder="Add Task Here..." onChange={props.inputChange} value={props.inputValue}/>
                <button type='submit' onClick={props.onAdd}>Add Item</button>
            </form>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            set: listOfTasks,
            inputValue: ""
        };
        this.addItem = this.addItem.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }
    
    addItem(e) {
        e.preventDefault();
        listOfTasks.push(this.state.inputValue);
        this.setState({set: listOfTasks, inputValue: ''});
    }
    
    inputChange(e) {
        this.setState({inputValue: e.target.value});
    }
    
    render() {
        return (
            <div>
                <h3>To Do List</h3>
                <ToDoList tasks={this.state.set}/>
                <AddTaskForm onAdd={this.addItem} inputChange={this.inputChange} inputValue={this.state.inputValue}/>
            </div>
        );
    }
}

ReactDOM.render(
        <App />,
        document.getElementById('root')
      );