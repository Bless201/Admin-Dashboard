import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/upload.css';

const Upload = () => {
  return (
    <div className="upload" style={{width: '100%'}}>
      <div className="container">
        <h2>Upload Document</h2>
        <div className="contain">
          <i className="fa fa-cloud-upload" aria-hidden="true"></i>
          <h3>Upload a file</h3>
          <p>JPG, PNG or PDF, file size no more than 10MB</p>
          <button>SELECT FILE</button>
        </div>
        <div className="page">
          <button id="yellow">Upload</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Upload;