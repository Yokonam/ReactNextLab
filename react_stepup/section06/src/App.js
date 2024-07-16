import './App.css';
import { Router } from './components/router/Router';
import { UserProvider } from './providers/UserProviders';
import { RecoilRoot } from 'recoil';
function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}

export default App;
