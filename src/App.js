import TodoApp from "./components/todoApp";
import style from "./todoAppList.module.css"


function App() {
  return (
    <div> 
      <h1 className={style.todoAppList}>Todo app list</h1>
    <TodoApp/>
    <h3 className={style.designedBy}>Designed by: Andres Lucero</h3>
    </div>
)
}

export default App;
