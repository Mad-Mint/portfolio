import React from 'react';
import CodeEditor from './CodeEditor';

const OpenECUs = () => {
  return (
    <div className="open-ecus-container"> {/* Applying a class name */}
      <h2>OpenECUs Project</h2>
      <p>
        The OpenECUs project aims to provide a platform for accessing and modifying Electronic Control Units (ECUs) in vehicles, 
        including GM ECUs. One common task is turning off the Vehicle Anti-Theft System (VATS) for engine swap purposes.
      </p>
      <p>
        To disable VATS, you can use the following low-level C code. Enter the code below and click "Execute" to see the output.
      </p>
      <CodeEditor />
    </div>
  );
}

export default OpenECUs;
