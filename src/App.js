import { useEffect, useState } from 'react';
import { fetchTodoById, fetchTodoList } from './actions/requests';
import './App.css';
import $api from './requester';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [limit, setLimit] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const params = {
      _limit: limit,
      _page: page,
    };

    fetchTodoList(params)
      .then((data) => {
        setTodoList(data);
      });
  }, [limit, page]);

  useEffect(() => {
    fetchTodoById(1)
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className="App">
    
      <input type="number" value={limit} onChange={(e) => setLimit(e.target.value)} />
      {todoList.map((item) => <div key={item.id}>{`${item.id} ${item.title}`}</div>)}
    </div>
  );
}

export default App;