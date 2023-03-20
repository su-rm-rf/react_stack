import React, { useState, useEffect } from 'react'

interface TodoItem {
  id: Number,
  text: String,
  isCompleted: Boolean
}

export default () => {
  const [todoList, setTodoList] = useState([])

  const todoAdd = (ev) => {
    const value = ev?.target.value
    if (value) {
      let len = todoList.length
      todoList.push({
        id: 'uuid_' + len,
        text: value,
        isCompleted: false,
        isDeleted: false,
        order: len,
        isTop: false,
      })
      setTodoList([...todoList])
      ev.target.value = ''
    }
  }

  // useEffect(() => {
  //   setTodoList(todoList)
  // }, [])

  const getTodoList = () => {

  }

  const toggleComplete = (item) => {
    if (!item.isDeleted) {
      item.isCompleted = !item.isCompleted
      setTodoList([...todoList])
    }
  }

  const toggleDelete = (item) => {
    item.isDeleted = !item.isDeleted
    setTodoList([...todoList])
  }

  const toggleTop = (item) => {
    if (!item.isDeleted) {
      item.isTop = !item.isTop
      todoList.splice(item.order, 1)
      todoList.unshift(item)
      todoList.map((todo, index) => {
        todo.order = index
      })
      setTodoList([...todoList])
    }
  }

  return (
    <div className="todo-list">
      <header>
        <input type="text" onBlur={ev => todoAdd(ev) } />
      </header>
      <div>
        <ul>
          {
            todoList.map(item =>
              <li key={ item.id + item.text } className={[
                item.isCompleted ? 'completed' : '',
                item.isDeleted ? 'deleted' : ''
              ].join(' ')}>
                <div className={["text", item.isCompleted ? 'completed' : ''].join(' ')}>{ item.text }</div>
                <div className="func">
                  {
                    item.isCompleted ?
                    <i onClick={ () => toggleComplete(item) }>已完成</i> :
                    <i onClick={ () => toggleComplete(item) }>完成</i>
                  }
                  {
                    item.isDeleted ?
                    <i onClick={ () => toggleDelete(item) }>撤销删除</i> :
                    <i onClick={ () => toggleDelete(item) }>删除</i>
                  }
                  {
                    item.isTop ?
                    <i onClick={ () => toggleTop(item) }>取消置顶</i> :
                    <i onClick={ () => toggleTop(item) }>置顶</i>
                  }
                </div>
              </li>
            )
          }
        </ul>
      </div>
    </div>
  )
}
