// TodoBanner component
class TodoBanner extends React.Component {
    // render this component
    render (){
        return (
            <h1>Todo Example with React</h1>
        )
    }

}

// TodoList component
class TodoList extends React.Component {

    // render this component
    render () {
      return (
            <ul>
                <li></li>
            </ul>
      )
    }

}

// TodoForm component
class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {item: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    // add a new item -> call parent
    handleSubmit (e) {
        // prevent normal submit event
        e.preventDefault();
        // call parent to add a new item
		console.log(this.refs.item)
      //  this.setState = ({item: this.refs.item.value})
       var newItem = this.refs.item.value;
		if(newItem) {
		  this.props.addItem({newItem});
			document.getElementById("input").focus();
  		  }
		// remove new typed item from text input
        this.refs.item.value = "";
		// focus text input
		this.props.addItem(this.state.item)
    }

    // render component
    render (){
        return (
            <form onSubmit={this.handleSubmit}>
				<input type="text" placeholder="Your todo" ref="item" id="input"/>
				<input type="submit" value="Add"/>
			</form>
        );
    }
}

// App component
class App extends React.Component {
    // init state
    constructor(props) {
      super(props);
      this.state = {items: []};
    this.addItem = this.addItem.bind(this);
    }

    // add a new item
    addItem(newItem) {
		console.log("new item array")
		//???
        // render again
        //???
    }

    // remove item
    removeItem (index){
        // remove from items array
        //???
        // render again
        //???
    }

    // render component
    render () {
        return (
            <div>
                <TodoBanner/>
                <TodoForm onFormSubmit={this.addItem} />
                <TodoList items={this.state.items} removeItem={this.removeItem} />
            </div>
        )
    }

}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);