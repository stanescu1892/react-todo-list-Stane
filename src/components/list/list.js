import "./list.scss";

const List = ({
  list = [],
  status = [],
  listTitle = "",
  onDeleteTask,
  onStatusSelect,
}) => {
  return (
    <div className="list-container">
      <div className="list-header">{listTitle}</div>
      <ul>
        {list.map((item, index) => (
          <li key={item.title + index}>
            <div className="items-container">
              <div>Titlul - {item.title}</div>
              <div>Descriere - {item.description}</div>
            </div>
            <div>
              <select
                onChange={(e) => onStatusSelect(e, item)}
                defaultValue={item.status}
              >
                {status.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <button
                className="delete-task-button"
                onClick={() => onDeleteTask(item)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
