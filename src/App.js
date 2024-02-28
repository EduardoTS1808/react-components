import logo from './logo.svg';
import './App.css';
import Mensagem from './components/Mensagem/mensagem'
import SegundaM from './components/Mensagem2'
import Api from './components/Mensagem-api/Mensagem-api'
import MsgClass from './components/Mensagem-Class/Msg-class'
import MsgEfect from './components/Mensagem-Efect/Msg-Efct'
import MsgEdit from './components/Mensagem-Edit/MsgEdit'
import MsgCondition  from './components/Mensagem-condicional/MsgCondition'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <Api/>
        <MsgEfect/>
        <MsgEdit/>
        <MsgCondition />
        <MsgClass/>
        <Mensagem/>
        <SegundaM/>
      </header>
    </div>
  );
}

export default App;
