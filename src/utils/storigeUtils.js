/*
操作storage中的数据工具模块
 */
const  TODOS_KEY = 'todo_key'
export default {
  saveTodos (todos){
    localStorage.setItem('todos_key',JSON.stringify(todos))
  },
  readTodos(){
    return JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')
  }
}


