import React, { useState } from 'react';
import Navbar from "../../components/NavBar/NavBar";
import Login from "../../components/Login/Login";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faSpinner, faTrash, faDownload, faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './FileManagement.css';

const FileManagement = () => {
  const [showLogin, setShowLogin] = useState(false);
  const handleLoginClick = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);

  const [files, setFiles] = useState([]);

  const uploadHandler = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Prepare a new file object to track its state
    const newFile = {
      name: file.name,
      isUploading: true,
      url: null,
    };
    setFiles((prevFiles) => [...prevFiles, newFile]);

    const formData = new FormData();
    formData.append('newFile', file, file.name);

    axios
      .post('http://localhost:8080/upload', formData)
      .then(() => {
        // Update the file state after successful upload
        setFiles((prevFiles) =>
          prevFiles.map((f) =>
            f.name === file.name ? { ...f, isUploading: false, url: `http://localhost:8080/files/${file.name}` } : f
          )
        );
      })
      .catch((error) => {
        console.error('Upload failed:', error);
        removeFile(file.name);
      });
  };

  const deleteFileHandler = (name) => {
    axios
      .delete(`http://localhost:8080/upload?name=${name}`)
      .then(() => removeFile(name))
      .catch((error) => console.error('Deletion failed:', error));
  };

  const downloadFileHandler = (url) => {
    window.location.href = url;  // Trigger the download by navigating to the file URL
  };

  const removeFile = (name) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== name));
  };

  return (
    <>
    <Navbar handleLoginClick={handleLoginClick} />
    <Login showLogin={showLogin} handleLoginClose={handleLoginClose} />
    <div className="file-management">
      <div className="file-upload">
        <div className="file-inputs">
          <input
            type="file"
            onChange={uploadHandler}
            accept="*/*" // Accept all file types
          />
          <button>
            <FontAwesomeIcon icon={faPlus} className="icon-plus" />
            Upload File
          </button>
        </div>
        <p className="info-text">Supported formats: All file types</p>
      </div>

      {files.length > 0 ? (
        <ul className="file-list">
          {files.map((file) => (
            <li className="file-item" key={file.name}>
              <FontAwesomeIcon icon={faFileAlt} className="file-icon" />
              <p
                className="file-name"
                onClick={() => file.url && window.open(file.url, '_blank')}
                title="Click to preview"
              >
                {file.name}
              </p>
              <div className="file-actions">
                {file.isUploading ? (
                  <FontAwesomeIcon icon={faSpinner} className="spinner-icon fa-spin" />
                ) : (
                  <>
                    <FontAwesomeIcon
                      icon={faDownload}
                      className="download-icon"
                      onClick={() => downloadFileHandler(file.url)}
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="trash-icon"
                      onClick={() => deleteFileHandler(file.name)}
                    />
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-message">No files uploaded yet. Start uploading now!</p>
      )}
    </div>
    </>
  );
};

export default FileManagement;
