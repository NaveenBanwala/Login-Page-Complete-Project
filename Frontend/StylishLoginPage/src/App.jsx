import { useState } from "react";
import InputContainer from './components/InputContainer';
import './App.css';

function App() {
  const positions = ["center", "flex-start", "flex-end"];
  const [Location, setLocation] = useState(true); // true = login
  const [initalAlignment, setAlignment] = useState(0);

  const toggleForm = () => {
    setLocation(!Location);
  };

  return (
    <div className="outer-container">
      <div className="inner-container">
        <div className={`form-section ${Location ? 'left' : 'right'}`}>
          <InputContainer
            isLogin={Location}
            positions={positions}
            initalAlignment={initalAlignment}
            setAlignment={setAlignment}
          />
        </div>

        <div className={`form-section ${Location ? 'right' : 'left'} other-side`}>
          <p>{Location ? 'Create a New Account' : 'Already have an account?'}</p>
          <button onClick={toggleForm}>{ Location ? 'Create Account' : 'Log In' }</button>
        </div>
      </div>
    </div>
  );
}

export default App;



