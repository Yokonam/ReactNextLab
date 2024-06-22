import logo from './logo.svg';
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';

function App() {
  return (
    <div className="App">
     <PrimaryButton>テスト</PrimaryButton>
     <PrimaryButton>テスト</PrimaryButton>
     <SecondaryButton>テスト</SecondaryButton>
    <br/>
    <SearchInput />
    </div>
  );
}

export default App;
