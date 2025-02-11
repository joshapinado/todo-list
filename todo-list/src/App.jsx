import ToDoList from "./components/TodoList";

function App() {
  return (
    <>
      <ToDoList 
        task1="Learn React"
        task2="Build a To-Do List"
        task3="Master JavaScript"
        task4="Apply for Jobs"
        addButtonLabel="Add"
        deleteButtonLabel="Delete"
      />
    </>
  );
}

export default App;