import React, { useState } from 'react';
import Navbar from "../../components/NavBar/NavBar";
import Login from "../../components/Login/Login";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faSpinner, faTrash, faDownload, faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './FileManagement.css';

const File5 = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null); // To store the selected file

  const handleLoginClick = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);

  const selectFileHandler = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file); // Store the selected file
  };

  const confirmUploadHandler = () => {
    if (!selectedFile) return;

    // Prepare a new file object to track its state
    const newFile = {
      name: selectedFile.name,
      isUploading: true,
      url: null,
    };
    setFiles((prevFiles) => [...prevFiles, newFile]);

    const formData = new FormData();
    formData.append('newFile', selectedFile, selectedFile.name);

    axios
      .post('http://localhost:8080/upload', formData)
      .then(() => {
        setFiles((prevFiles) =>
          prevFiles.map((f) =>
            f.name === selectedFile.name ? { ...f, isUploading: false, url: `http://localhost:8080/files/${selectedFile.name}` } : f
          )
        );
        setSelectedFile(null); // Clear the selected file after upload
      })
      .catch((error) => {
        console.error('Upload failed:', error);
        removeFile(selectedFile.name);
        setSelectedFile(null); // Clear the selected file
      });
  };

  const deleteFileHandler = (name) => {
    axios
      .delete(`http://localhost:8080/upload?name=${name}`)
      .then(() => removeFile(name))
      .catch((error) => console.error('Deletion failed:', error));
  };

  const downloadFileHandler = (url) => {
    window.location.href = url; // Trigger the download
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
              onChange={selectFileHandler}
              accept="*/*" // Accept all file types
            />
            <button>
              <FontAwesomeIcon icon={faPlus} className="icon-plus" />
              Select File
            </button>
          </div>
          <p className="info-text">Supported formats: All file types</p>
        </div>

        {selectedFile && (
          <div className="file-preview">
            <p>Selected File: {selectedFile.name}</p>
            <br></br>
            <button className="confirm-upload-btn" onClick={confirmUploadHandler}>
              <FontAwesomeIcon icon={faCheck} />
              OK
            </button>
          </div>
        )}

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

export default File5;
