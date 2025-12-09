import 'codemirror/lib/codemirror.css'; 
import 'codemirror/mode/xml/xml'; 
import 'codemirror/mode/javascript/javascript'; 
import 'codemirror/mode/css/css';
import 'codemirror/addon/edit/closetag'; 
import 'codemirror/addon/edit/closebrackets';
import { Controlled as ControlledEditorComponent } from 'react-codemirror2'; 
//Themes
import 'codemirror/theme/material.css'; 
import 'codemirror/theme/3024-day.css';

const Editor = ({ language, value, setEditorState, dark }) => {
  const color = dark ? 'material' : '3024-day'; 

  const handleChange = (editor, data, value) => {
    setEditorState(value); 
  }

  return (
    <div className="editor-container">
      <ControlledEditorComponent
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true, 
          lint: true, 
          mode: language, 
          lineNumbers: true, 
          theme: color, 
          autoCloseTags: true, 
          autoCloseBrackets: true, 
        }}
      />
    </div>
  ); 
};

export default Editor; 
