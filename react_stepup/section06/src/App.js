import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import {DefaultLayout} from './components/templates/DefaultLayout'
import { Router } from './components/router/Router';

const user = {
  name: "わんこ",
  image: "https://placehold.jp/150x150.png",
  email: "https://example.com",
  phone: "000-0000-0000",
  company: {
    name: "テスト株式会社",
    website: "https://example.com"
  },
}

function App() {
  return (
    <Router />
  );
}

export default App;
