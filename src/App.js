
import './App.css';
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <>
      <div className="wrapper">
      <Spline scene="https://prod.spline.design/lPnsUTNiGgs4I1ZH/scene.splinecode" />
      </div>
      <textarea className="input-area"/>
    </>
  );
}

export default App;
