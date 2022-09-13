import './App.css';
import Button from './components/Button';
import React, { useState } from 'react';
import './App.css';
import Editor from './components/editor'

function App() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [openedEditor, setOpenedEditor] = useState('html'); //declares state
  const onTabClick = (editorName) => {
    setOpenedEditor(editorName);
  };
  
  return (
    <div className="App">
      <p>Welcome to the editor!</p>
      <div className="tab-button-container">
        <Button title="HTML" onClick={() =>{
          onTabClick('html')
        }} />
        <Button title="CSS" onClick={() => {
          onTabClick('css')
        }}/>
        <Button title="JavaScript" onClick={() => {
          onTabClick('js')
        }}/>
      </div>

      <div className="editor-container">
        {
          openedEditor === 'html' ? (
            <Editor language='xml' value={html} setEditorState={setHtml}/>
          ) : openedEditor === 'css' ? (
            <Editor language="css" value={css} setEditorState={setCss}/>
          ) : (
            <Editor language="javascript" value={js} setEditorState={setJs}/>
          )
        }
      </div>
    </div>
  );
}

export default App;
