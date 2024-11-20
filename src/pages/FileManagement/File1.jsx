import React, { useState, useContext, useEffect } from 'react';
import Navbar from "../../components/NavBar/NavBar";
import Login from "../../components/Login/Login";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faSpinner, faTrash, faDownload, faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './FileManagement.css';
import { UserContext } from "../../context/UserContext";

const File1 = () => {
  const { loggedIn, username } = useContext(UserContext);
  const [showLogin, setShowLogin] = useState(false);
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (loggedIn && username) {
      axios
        .get(`http://localhost:8000/file1/files/${username}`)
        .then((response) => {
          setFiles(response.data.files);
        })
        .catch((error) => {
          console.error("Error fetching files:", error);
        });
    }
  }, [loggedIn, username]);

  const handleLoginClick = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);

  const selectFileHandler = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const confirmUploadHandler = () => {
    if (!selectedFile) return;

    const newFile = {
      name: selectedFile.name,
      isUploading: true,
      url: null,
    };
    setFiles((prevFiles) => [...prevFiles, newFile]);

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('visibility', true);
    formData.append('user_id', username);

    axios
      .post(`http://localhost:8000/file1/upload/`, formData)
      .then(() => {
        setFiles((prevFiles) =>
          prevFiles.map((f) =>
            f.name === selectedFile.name
              ? { ...f, isUploading: false, url: `http://localhost:8000/uploads/file1/${selectedFile.name}` }
              : f
          )
        );
        setSelectedFile(null);
        window.location.reload();
      })
      .catch((error) => {
        console.error('Upload failed:', error.response.data);
        removeFile(selectedFile.name);
        setSelectedFile(null);
      });
  };

  const deleteFileHandler = (name) => {
    axios
      .delete(`http://localhost:8000/file1/upload/?page_name=file1&file_name=${name}`)
      .then(() => {
        removeFile(name);
      })
      .catch((error) => {
        console.error("Deletion failed:", error);
      });
  };

  const downloadFileHandler = (url, filename) => {
    axios({
      url: `http://localhost:8000/download/${url.split('/static/')[1]}`, 
      method: 'GET',
      responseType: 'blob', // Important for handling file downloads
    }).then((response) => {
      const href = URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = href;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(href);
    }).catch((error) => {
      console.error("Download failed:", error);
    });
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
              accept="*/*"
            />
            <button>
              <FontAwesomeIcon icon={faPlus} className="icon-plus" />
              Select File
            </button>
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

        {selectedFile && (
          <div className="file-preview">
            <p>Selected File: {selectedFile.name}</p>
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
                <p className="file-name">{file.name}</p>
                <div className="file-actions">
                  {file.isUploading ? (
                    <FontAwesomeIcon icon={faSpinner} className="spinner-icon fa-spin" />
                  ) : (
                    <>
                      <FontAwesomeIcon
                        icon={faDownload}
                        className="download-icon"
                        onClick={() => downloadFileHandler(file.url, file.name)} // Pass file name for proper naming
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

export default File1;
