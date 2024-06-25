import logo from './logo.svg';
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';

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
    <div className="App">
     <PrimaryButton>テスト</PrimaryButton>
     <PrimaryButton>テスト</PrimaryButton>
     <SecondaryButton>テスト</SecondaryButton>
    <br/>
    <SearchInput />
    <UserCard user={user} />
    </div>
  );
}

export default App;
