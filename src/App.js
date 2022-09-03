import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    }
  }

  /* this is Add item function */
  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({ // update state
        list: list,
        newItem: ""
      });
    }
  }

  /* This is Delete Item function*/
  deleteItem(id) {
    const list = [...this.state.list];  // append to list
    const updated_list = list.filter(item => item.id !== id); // remove item which match with id
    this.setState({
      list: updated_list
    })
  }

  // this function used to get new item  
  updateInput(input) {
    this.setState({ newItem: input });
  }

  // this function used to done/complete item  
  completedTask(id) {
    const list = [...this.state.list];  // append to list
    const updated_list = list.map(item =>{
       if(item.id === id){
         item.isDone = !item.isDone
       }
       return item;
    }); 
    this.setState({
      list: updated_list
    })
  }

  // Render complete html code
  render() {
    return (
      <div>
        <img src={logo} width="200" height="200" alt="logo" className="logo" />
        <h1 className="app-title">Kush Guglani Todo App</h1>
        <div className="container">
          Add an Item...
          <br></br>

          <input type="text"
            className="input-text"
            placeholder="Write a todo"
            value={this.state.newItem}
            onChange={e => this.updateInput(e.target.value)} />

          <button className="add-btn"
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}>Add Todo</button>

          <div className="list">

            <ul>
              {this.state.list.map(item => {
                return (
                  <li key={item.id}>
                    <input type="checkbox"
                      checked={item.isDone}
                      onChange={() => {this.completedTask(item.id) }} />
                    {item.value}
                    <button className="btn" onClick={() => this.deleteItem(item.id)}>Delete</button>
                  </li>
                );
              })}
            </ul>

          </div>
        </div>
      </div>
    );
  }
}

// export Default app
export default App; 