import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/clike/clike';

const CodeEditor = () => {
  const [code, setCode] = useState<string>(`
#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}
`);

  const executeCode = async () => {
    try {
      const response = await fetch('/compile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code })
      });
      const data = await response.json();
      console.log(data.output);
    } catch (error) {
      console.error('Error executing code:', error);
    }
  };

  return (
    <div className="code-editor-container"> {/* Applying a class name */}
      <CodeMirror
        value={code}
        options={{
          mode: 'text/x-csrc',
          theme: 'material',
          lineNumbers: true
        }}
        onBeforeChange={(editor, data, value) => setCode(value)}
      />
      <button onClick={executeCode} className="execute-button">Execute</button> {/* Applying a class name */}
    </div>
  );
}

export default CodeEditor;
