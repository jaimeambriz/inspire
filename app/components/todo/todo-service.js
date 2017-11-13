function TodoService() {
	// A local copy of your todos
	var todoList = []
	var baseUrl = 'https://inspire-server.herokuapp.com/api/todos/jaimeambriz'
	
	function logError(err) {
		console.error('UMM SOMETHING BROKE: ', err)
		//CAN YOU NOTIFY THE USER IF SOMETHING BREAKS? 
		//do this without breaking the controller/service responsibilities
	}
	
	this.getTodos = function (draw) {
		$.get(baseUrl)
		.then(function (res) { // <-- WHY IS THIS IMPORTANT????
			todoList = res
			draw(res)
		})
		.fail(logError)
	}
	
	this.addTodo = function (todo, cb) {
		// WHAT IS THIS FOR???
		$.post(baseUrl, todo)
		.then(cb)
		.fail(logError)
	}
	
	this.toggleTodoStatus = function (todoIndex, getTodos) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList
		var todo = todoList[todoIndex]
		todo.completed = !todo.completed
		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		//STEP 3: Here is that weird Ajax request because $.put doesn't exist
		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: baseUrl + '/' + todoIndex,
			data: JSON.stringify(todo)
		})
		.then(getTodos)
		.fail(logError)
	}
	
	this.removeTodo = function (todo, getTodos) {
		// Umm this one is on you to write.... It's also unique, like the ajax call above. The method is a DELETE
		var index = todoList.indexOf(todo)
		$.ajax({
			method: 'DELETE',
			url: baseUrl + '/' + todo,
			data: JSON.stringify(index)
		})
			.then(getTodos)
			.fail(logError)
	}

}
