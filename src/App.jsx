
import React, { useState, useEffect } from 'react'; 
import './App.css';
import Button from './components/Button'; 
import Editor from './components/Editor'; 
import Toggle from './components/ToggleDark'; 


function App() {
  const [openedEditor, setOpenedEditor] = useState('html'); 
  const [html, setHtml] = useState(''); 
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [srcDoc, setSrcDoc] = useState(` `); 

  //dark mode
  const [isDark, setIsDark] = useState(false); 

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(
        `
          <html> 
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
        `
      )
    }, 250);
    return () => clearTimeout(timeOut); 
  }, [html, css, js]); 

  const onTabClick = (editorName) => {
    setOpenedEditor(editorName); 
  };

  const switchModes = (mode) => {
    if (mode === "light") {
      setIsDark(false); 
    } else if (mode === "dark") {
      setIsDark(true); 
    }
  }

  return (
    <div className={isDark ? "App-Dark" : 'App-Light'}>
      <h1>Bobby's Editor</h1>
      <Toggle isDark={isDark} switchModes={switchModes}/>
      <div className="tab-button-container">
        <Button title="HTML" onClick={() => { onTabClick('html') }} />
        <Button title="CSS" onClick={() => { onTabClick('css') }} />
        <Button title="JavaScript" onClick={() => { onTabClick('js') }} />
      </div>
      <div className="editor-container">
        {
          openedEditor === 'html' ? (
            <Editor
              dark={isDark}
              language="xml"
              value={html}
              setEditorState={setHtml}
            />
          ) : openedEditor === 'css' ? (
            <Editor
              dark={isDark}
              language="css"
              value={css}
              setEditorState={setCss}
            />
          ) : (
            <Editor
              dark={isDark}
              language="javascript"
              value={js}
              setEditorState={setJs}
            />
          )
        }
      </div>
      <div className="cmd">
        <iframe 
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="1"
          width="100%"
          height="100%"
        />
      </div>     
    </div>
  );
}

export default App;
