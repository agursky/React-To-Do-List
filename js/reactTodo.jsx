var listOfTasks = ['get food', 'get gas', 'pay bills', 'make appointment'];

function ToDoList(props) {
    return (<ul>
              {props.tasks.map(function(item, ind) {
                return <li key={ind}>{item}</li>
               })}
        </ul>);
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            set: listOfTasks
        };
        this.addItem = this.addItem.bind(this);
    }
    
    addItem() {
        listOfTasks.push(' new item');
        this.setState({set: listOfTasks});
    }
    
    render() {
        return (
            <div>
                <h3>To Do List</h3>
                <ToDoList tasks={this.state.set}/>
                <button onClick={this.addItem}>Add Item</button>
            </div>
        );
    }
}

ReactDOM.render(
        <App />,
        document.getElementById('root')
      );