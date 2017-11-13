function TodoController() {
	// new up the TodoService that has already been configured for your use
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again
	var todoService = new TodoService()

	// Use this getTodos function as your callback for all other edits
	function getTodos(){
		//FYI DONT EDIT ME :)
		todoService.getTodos(draw)
	}
	getTodos()
	function draw(todoList) {
		//WHAT IS MY PURPOSE?
		//BUILD YOUR TODO TEMPLATE HERE
		var template = ''
		for (var i = 0; i < todoList.length; i++) {
			var todo = todoList[i];
			if (todo.completed === "false"){
				todo.completed = false
			}
			if(todo.completed == true){
			template += `
			<div class="col-sm-12 check">
			<input checked type="checkbox" onclick="app.controllers.todoController.toggleTodoStatus('${i}')">
			<label class="line-through">${todo.description}</label>
			<i class="glyphicon glyphicon-trash pull-right" onclick="app.controllers.todoController.removeTodo('${i}')"></i>
			</div>	
			`
			}else {
				template += `
				<div class="col-sm-12 check">
				<input type="checkbox" onclick="app.controllers.todoController.toggleTodoStatus('${i}')">
				<label>${todo.description}</label>
				<i class="glyphicon glyphicon-trash pull-right" onclick="app.controllers.todoController.removeTodo('${i}')"></i>
				</div>	
				`
			}
			
		}
		document.getElementById("todo").innerHTML = template
	}

	this.addTodoFromForm = function (e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target
		var todo = {
			description: form.todo.value,
			completed: false
			// DONT FORGET TO BUILD YOUR TODO OBJECT
		}

		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		// todoService.getTodos(draw)
		                         //^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}

	this.toggleTodoStatus = function (todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}

	this.removeTodo = function (todoId) {
		// ask the service to run the remove todo with this id
		todoService.removeTodo(todoId, getTodos)
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}

	// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???

}
