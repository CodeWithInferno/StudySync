// import React, { useState } from 'react';
// import { RiPencilLine, RiDeleteBinLine, RiCheckLine } from 'react-icons/ri';

// const Todo = () => {
//   const [todos, setTodos] = useState([]);
//   const [newTask, setNewTask] = useState('');
//   const [editingTaskId, setEditingTaskId] = useState(null);

//   const toggleTodo = (id) => {
//     setTodos((prevTodos) =>
//       prevTodos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   const handleAddTask = () => {
//     if (newTask.trim() !== '') {
//       setTodos((prevTodos) => [
//         ...prevTodos,
//         { id: prevTodos.length + 1, title: newTask, completed: false },
//       ]);
//       setNewTask('');
//     }
//   };

//   const handleDeleteTask = (id) => {
//     setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
//   };

//   const handleEditTask = (id, newTitle) => {
//     setTodos((prevTodos) =>
//       prevTodos.map((todo) =>
//         todo.id === id ? { ...todo, title: newTitle } : todo
//       )
//     );
//     setEditingTaskId(null);
//   };

//   const handleStartEdit = (id) => {
//     setEditingTaskId(id);
//   };

//   const handleEndEdit = () => {
//     // Uncomment the following line to handleEndEdit()
//     // setEditingTaskId(null);
//   };

//   return (
//     <div style={containerStyles}>
//       <h1>Get Things Done!</h1>
//       <div style={formStyles}>
//         <input
//           type="text"
//           placeholder="Add new task"
//           style={inputStyles}
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//         />
//         <button style={buttonStyles} onClick={handleAddTask}>
//           Add
//         </button>
//       </div>
//       <div style={taskListContainerStyles}>
//         {todos.map((todo) => (
//           <div key={todo.id} style={taskStyles}>
//             {editingTaskId === todo.id ? (
//               <>
//                 <input
//                   type="text"
//                   value={todo.title}
//                   onChange={(e) => handleEditTask(todo.id, e.target.value)}
//                   onBlur={() => handleEndEdit()}
//                   onKeyDown={(e) => {
//                     if (e.key === 'Enter') {
//                       handleEndEdit();
//                     }
//                   }}
//                   style={{ ...inputStyles, backgroundColor: 'transparent' }}
//                 />
//                 <RiCheckLine
//                   style={iconStyles}
//                   onClick={() => handleEndEdit()}
//                 />
//               </>
//             ) : (
//               <>
//                 <span>{todo.title}</span>
//                 <div style={iconContainerStyles}>
//                   <RiPencilLine
//                     style={iconStyles}
//                     onClick={() => handleStartEdit(todo.id)}
//                   />
//                   <RiDeleteBinLine
//                     style={iconStyles}
//                     onClick={() => handleDeleteTask(todo.id)}
//                   />
//                 </div>
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const containerStyles = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   position: 'fixed',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: '80%',
//   maxWidth: '600px',
//   height: '60%',
//   overflowY: 'auto', 
//   maxHeight: '500px',
//   backgroundColor: 'rgba(37, 37, 37, 0.7)',
//   boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
//   padding: '20px',
//   zIndex: '999',
//   color: '#fff',
// };

// const formStyles = {
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
// };

// const inputStyles = {
//   width: '70%',
//   height: '50px',
//   border: '2px solid #3498db',
//   borderRadius: '4px',
//   padding: '10px',
//   backgroundColor: 'transparent',
//   boxSizing: 'border-box',
// };

// const buttonStyles = {
//   width: '25%',
//   height: '50px',
//   backgroundColor: '#3498db',
//   color: '#fff',
//   border: 'none',
//   borderRadius: '4px',
//   cursor: 'pointer',
// };

// const taskListContainerStyles = {
//   width: '100%',
//   marginTop: '20px',
// };

// const taskStyles = {
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   padding: '10px',
//   border: '1px solid #ddd',
//   borderRadius: '4px',
//   marginBottom: '8px',
//   backgroundColor: '#3498db',
//   color: '#fff',
// };

// const iconContainerStyles = {
//   display: 'flex',
//   gap: '10px',
// };

// const iconStyles = {
//   cursor: 'pointer',
//   fontSize: '1.5rem',
// };

// export default Todo;










import React, { useState } from 'react';
import { RiPencilLine, RiDeleteBinLine, RiCheckLine, RiCloseLine } from 'react-icons/ri';

const Todo = ({ onClose }) => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: prevTodos.length + 1, title: newTask, completed: false },
      ]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleEditTask = (id, newTitle) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
    setEditingTaskId(null);
  };

  const handleStartEdit = (id) => {
    setEditingTaskId(id);
  };

  const handleEndEdit = () => {
    // Uncomment the following line to handleEndEdit()
    // setEditingTaskId(null);
  };

  return (
    <div style={containerStyles}>
      <div style={closeButtonContainerStyles}>
        <RiCloseLine style={closeButtonStyles} onClick={onClose} />
      </div>
      <h1>Get Things Done!</h1>
      <div style={formStyles}>
        <input
          type="text"
          placeholder="Add new task"
          style={inputStyles}
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button style={buttonStyles} onClick={handleAddTask}>
          Add
        </button>
      </div>
      <div style={taskListContainerStyles}>
        {todos.map((todo) => (
          <div key={todo.id} style={taskStyles}>
            {editingTaskId === todo.id ? (
              <>
                <input
                  type="text"
                  value={todo.title}
                  onChange={(e) => handleEditTask(todo.id, e.target.value)}
                  onBlur={() => handleEndEdit()}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleEndEdit();
                    }
                  }}
                  style={{ ...inputStyles, backgroundColor: 'transparent' }}
                />
                <RiCheckLine
                  style={iconStyles}
                  onClick={() => handleEndEdit()}
                />
              </>
            ) : (
              <>
                <span>{todo.title}</span>
                <div style={iconContainerStyles}>
                  <RiPencilLine
                    style={iconStyles}
                    onClick={() => handleStartEdit(todo.id)}
                  />
                  <RiDeleteBinLine
                    style={iconStyles}
                    onClick={() => handleDeleteTask(todo.id)}
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  maxWidth: '500px',
  height: '60%',
  overflowY: 'auto',
  maxHeight: '500px',
  backgroundColor: 'rgba(37, 37, 37, 0.7)',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  padding: '20px',
  zIndex: '999',
  color: '#fff',
};

const closeButtonContainerStyles = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '10px',
};

const closeButtonStyles = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  cursor: 'pointer',
  fontSize: '40px',
  color: '#fff',
};

const formStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const inputStyles = {
  width: '70%',
  height: '50px',
  border: '2px solid #3498db',
  borderRadius: '4px',
  padding: '10px',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
};

const buttonStyles = {
  width: '25%',
  height: '50px',
  backgroundColor: '#3498db',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const taskListContainerStyles = {
  width: '100%',
  marginTop: '20px',
};

const taskStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  marginBottom: '8px',
  backgroundColor: '#3498db',
  color: '#fff',
};

const iconContainerStyles = {
  display: 'flex',
  gap: '10px',
};

const iconStyles = {
  cursor: 'pointer',
  fontSize: '1.5rem',
};

export default Todo;
