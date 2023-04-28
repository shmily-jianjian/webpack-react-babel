import { Outlet, useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  const changePage = (type) => {
    navigate(`./${type}`);
  };
  return (
    <div>
      <button onClick={() => changePage('home')}>home</button>
      <button onClick={() => changePage('detail')}>detail</button>
      <Outlet />
    </div>
  );
};
export default App;
