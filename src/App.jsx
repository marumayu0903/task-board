import { useState, useEffect } from 'react'

const STORAGE_KEY = 'task-board-tasks'

function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

export default function App() {
  const [tasks, setTasks] = useState(loadTasks)
  const [input, setInput] = useState('')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  function addTask() {
    const trimmed = input.trim()
    if (!trimmed) return
    const maxId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) : 0
    setTasks([...tasks, { id: maxId + 1, text: trimmed, done: false }])
    setInput('')
  }

  function toggleTask(id) {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  function deleteTask(id) {
    setTasks(tasks.filter(t => t.id !== id))
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') addTask()
  }

  return (
    <div className="app">
      <header className="header">
        <h1>やることリスト</h1>
      </header>
      <main className="main">
        <div className="input-row">
          <input
            className="task-input"
            type="text"
            placeholder="タスクを入力..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="add-btn" onClick={addTask}>追加</button>
        </div>
        <ul className="task-list">
          {tasks.length === 0 && (
            <li className="empty">タスクがありません</li>
          )}
          {tasks.map(task => (
            <li key={task.id} className={`task-item${task.done ? ' done' : ''}`}>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
              />
              <span className="task-text">{task.text}</span>
              <button className="delete-btn" onClick={() => deleteTask(task.id)}>削除</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
