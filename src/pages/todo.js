import Form from "../components/form/form";
import List from "../components/list/list";
import Modal from "../components/modal/modal";
import { useContext, useState } from "react";
import Login from "../components/login";
import { Context } from "../context/store";
import { Button } from "react-bootstrap";
import "./todo.css";

const ToDo = () => {
  const [openModal, setOpenModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  const { store, setStore } = useContext(Context);

  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  const handleAuthSucces = (userData) => {
    console.log(`am primit`, userData);
    setStore(userData.user);
    localStorage.setItem("user", JSON.stringify(userData.user));
  };

  const handleLogOut = () => {
    setStore(undefined);
    localStorage.removeItem("user");
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    console.log(`apas buton`);
    setOpenModal(true);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const task = {
      title: e.target[0].value,
      description: e.target[1].value,
      status: e.target[2].value,
    };
    setTasks([...tasks, task]);
    setOpenModal(false);
  };

  const handleStatusChange = (e, task) => {
    const updatedTask = {
      ...task,
      status: e.target.value,
    };
    setTasks(tasks.map((t) => (t === task ? updatedTask : t)));
  };

  // const onStatusSelect = (e, task) => {
  //   const selectedOption = e.target.value;
  //   const updatedTask = {
  //     ...task,
  //     status: selectedOption,
  //   };
  //   setTasks(
  //     tasks.map((t) => {
  //       if (t === task) {
  //         return updatedTask;
  //       }
  //       return t;
  //     })
  //   );
  // };

  return (
    <>
      <div className="todo-container">
        <div className="todo-header">
          <Button onClick={handleOpenModal}>+ Add Task</Button>
          <Login
            onAuthSucces={handleAuthSucces}
            isLoggedIn={store?.uid}
            onSIgnOut={handleLogOut}
          />
        </div>
        <div className="todo-list-row">
          <List
            onStatusSelect={handleStatusChange}
            onDeleteTask={handleDeleteTask}
            listTitle="To Do"
            status={["to do", "in progress", "done"]}
            list={tasks.filter((task) => task.status === "to do")}
          />
          <List
            onStatusSelect={handleStatusChange}
            listTitle="In Progress"
            status={["to do", "in progress", "done"]}
            list={tasks.filter((task) => task.status === "in progress")}
            onDeleteTask={handleDeleteTask}
          />

          <List
            onStatusSelect={handleStatusChange}
            listTitle="Done"
            status={["to do", "in progress", "done"]}
            list={tasks.filter((task) => task.status === "done")}
            onDeleteTask={handleDeleteTask}
          />
        </div>
      </div>
      {openModal ? (
        <Modal onClose={handleCloseModal}>
          <Form
            status={["to do", "in progress", "done"]}
            onSubmit={handleAddTask}
          />
        </Modal>
      ) : null}
    </>
  );
};

export default ToDo;
