import React, { Component } from "react";
import { Container } from "../components/Grid";
import { Link } from "react-router-dom";
import API from "../utils/API";
import axios from "axios";


class Tasks extends Component {
	constructor(props) {
    super(props);
    this.state = {
      participant: [],
      tasks: []
    };
}

componentDidMount(){
	this.setState({
          participant: ["Company 1", "Company 2"],
          tasks: ["Task A", "Task B", "Task C", "Task D", "Task E"]
        });
}

testing= (event) => {
	// axios.post('/api', {
	
	// })

	console.log(this.props)
	console.log(this.state)
	
	API.getParticipants({

	}).then(res => {
		console.log(res)
	})

	
}

listTasks= () => {
	for (var i=0; i<this.state.tasks.length; i++) {
		console.log(this.state.tasks[i])

	var node = document.createElement("button");
	var textnode = document.createTextNode(this.state.tasks[i]);
    node.appendChild(textnode);
	document.getElementById("space").appendChild(node);
	document.getElementById("firstBtn").style.display = 'none';
	}
}

openTask = () => {
	alert("Task Completed")
	//send an email or notification to the next task holder	
	//append on main screen
	var node = document.createElement("li");
	var textnode = document.createTextNode("Task A has been completed");
    node.appendChild(textnode);
	document.getElementById("space").appendChild(node);
}


render() {
    return (
    	<Container>
    	<div className="row">
	        <div className="col-md-8">
	        <button id= "test" onClick={ this.testing }> TEST </button>
				<button id="firstBtn" onClick={ this.listTasks }>Show Project Tasks</button>
			</div>
			<div className="col-md-4">
			<h2>Welcome {this.state.participant[0]}</h2>
			</div>
		</div>
		<div>
		 <ol id="space">
		 </ol>
		</div>
      </Container>
    )
  }
}

export default Tasks;
