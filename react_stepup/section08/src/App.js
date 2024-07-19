import axios from 'axios';

function App() {
const onClickUsers = () => {
  axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
    console.log(res.data)
  }
  ).catch((error) => {
    console.error(error)
  })
}

const onClickUser1 = () => {
  axios.get('https://jsonplaceholder.typicode.com/users/1').then((res) => {
    console.log(res.data)
  }
  ).catch((error) => {
    console.error(error)
  })

}

  return (
    <div className="App">
    <button onClick={onClickUsers}>ユーザーズ</button>
    <button onClick={onClickUser1}>id=１のユーザ</button>
    </div>
  );
}

export default App;
