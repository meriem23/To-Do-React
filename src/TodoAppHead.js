import React, { Component } from 'react'

class TodoAppHead extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: "",
            text: "",
            isChecked: false,
            todo: []
        }
    }
    handleChange = e => {
        this.setState({ inputText: e.target.value })
    }
    addText = () => {
        let newtodo = {
            text: this.state.inputText,
            isChecked: false,
        }
        this.setState({ todo: this.state.todo.concat(newtodo), inputText: "" })
    }
    check = (text) => {
        this.setState({ todo: this.state.todo.map(el => text == el.text ? { ...el, isChecked: !el.isChecked } : el) })
    }
    delete = (text) => {
        this.setState({ todo: this.state.todo.filter(el => text !== el.text) }
        )
    }
    render() {
        return (
            <div>
                <div className=" headerTodo">
                    <h1 className="title">To-Do App!</h1>
                    <h6 className="subTitle">Add new To-Do</h6>
                    <div className="addTask">
                        <input type="text" className="textTask" placeholder="Enter new task" value={this.state.inputText} name="inputText" onChange={this.handleChange} />
                        <button className="btnTask" onClick={this.addText}>Add</button>
                    </div>
                </div>
                <div className="toText">
                    <h2>Let's get some work done!</h2>
                    <div>
                        {this.state.todo.map(el => (
                            <div className="newToDo">
                                <div >
                                    <button className="newBtn" onClick={() => this.check(el.text)}>{el.isChecked ? 'Uncheck' : 'Check'}</button>
                                    <button className="newBtn" onClick={() => this.delete(el.text)}>Delete</button>
                                </div>
                                <h4 className={el.isChecked ? 'lineCheck newText' : 'newText'}>{el.text}</h4>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div >
        )
    }
}
export default TodoAppHead