import './App.css';

function App() {
  const x=10;
  return (
  <>
    <h1 className='first'>This is the First Heading</h1>
    <p>this is the paragraph</p>
    <p>{20+50}</p>
    <p>{(x)<2?'greater':'lesser'}</p>
  </>
  );
}

export default App;
