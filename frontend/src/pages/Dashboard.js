import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/tasks", {
      headers: { Authorization: localStorage.getItem("token") }
    }).then(res => setTasks(res.data));
  }, []);

  return (
    <div>
      <h2>My Tasks</h2>
      {tasks.map(t => (
        <div key={t._id}>
          <h4>{t.title}</h4>
          <p>{t.status}</p>
        </div>
      ))}
    </div>
  );
}
