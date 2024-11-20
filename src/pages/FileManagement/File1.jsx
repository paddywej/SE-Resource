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
  const [files, setFiles] = useState({ public: [], private: [] });
  const [selectedFile, setSelectedFile] = useState(null); // To store the selected file
  const [visibility, setVisibility] = useState(true); // Default visibility is true (public)

  useEffect(() => {
    if (loggedIn && username) {
      axios
        .get(`http://localhost:8000/files/file1/${username}`)
        .then((response) => {
          console.log('Response data:', response.data);  // Log response to verify
  
          // Classify files based on visibility
          const publicFiles = [];
          const privateFiles = [];
  
          response.data.files.forEach((file) => {
            // If the file visibility is true, it's public; otherwise, it's private
            if (file.visibility === true) {
              publicFiles.push(file);
            } else if (file.visibility === false) {
              privateFiles.push(file);
            }
          });
  
          setFiles({
            public: publicFiles,
            private: privateFiles,
          });
        })
        .catch((error) => {
          console.error("Error fetching files:", error);
        });
    }
  }, [loggedIn, username]);
  
  useEffect(() => {
    // Check if there are files in public or private
    if (files.public.length === 0 && files.private.length === 0) {
      console.log('No files uploaded yet.');
    } else {
      console.log('Files are available.');
    }
  }, [files]);
  

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
      visibility: visibility,
    };
    
    setFiles((prevFiles) => ({
      ...prevFiles,
      [visibility ? 'public' : 'private']: [...prevFiles[visibility ? 'public' : 'private'], newFile],
    }));

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('visibility', visibility);
    formData.append('user_id', username);

    axios
      .post(`http://localhost:8000/file1/upload/`, formData)
      .then((response) => {
        const fileUrl = `http://localhost:8000/uploads/file1/${selectedFile.name}`;
        setFiles((prevFiles) =>
          prevFiles[visibility ? 'public' : 'private'].map((f) =>
            f.name === selectedFile.name
              ? { ...f, isUploading: false, url: fileUrl }
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

  const deleteFileHandler = (name, visibility) => {
    axios
      .delete(`http://localhost:8000/file1/upload/?page_name=file1&file_name=${name}`)
      .then(() => {
        removeFile(name, visibility);
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

  const removeFile = (name, visibility) => {
    setFiles((prevFiles) => ({
      ...prevFiles,
      [visibility ? 'public' : 'private']: prevFiles[visibility ? 'public' : 'private'].filter((file) => file.name !== name),
    }));
  };

  return (
    <>
      <Navbar handleLoginClick={handleLoginClick} />
      <Login showLogin={showLogin} handleLoginClose={handleLoginClose} />
      <div className="archive-details-container">
        <h1 className="archive-details-header">Study Resources: Year 1</h1>
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
              <br />
              <select
                onChange={(e) => setVisibility(e.target.value === 'public')}
                value={visibility ? 'public' : 'private'}
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
              <button className="confirm-upload-btn" onClick={confirmUploadHandler}>
                <FontAwesomeIcon icon={faCheck} />
                OK
              </button>
            </div>
          )}

          <h2>Public Files</h2>
          {files.public.length > 0 ? (
            <ul className="file-list">
              {files.public.map((file) => (
                <li className="file-item" key={file.name}>
                  <FontAwesomeIcon icon={faFileAlt} className="file-icon" />
                  <p className="file-name">{file.name}</p>
                  <div className="file-actions">
                    {file.isUploading ? (
                      <FontAwesomeIcon icon={faSpinner} className="spinner-icon fa-spin" />
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faDownload} className="download-icon" onClick={() => downloadFileHandler(file.url, file.name)} />
                        <FontAwesomeIcon icon={faTrash} className="trash-icon" onClick={() => deleteFileHandler(file.name, true)} />
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="empty-message">No public files uploaded yet. Start uploading now!</p>
          )}

          <h2>Private Files</h2>
          {files.private.length > 0 ? (
            <ul className="file-list">
              {files.private.map((file) => (
                <li className="file-item" key={file.name}>
                  <FontAwesomeIcon icon={faFileAlt} className="file-icon" />
                  <p className="file-name">{file.name}</p>
                  <div className="file-actions">
                    {file.isUploading ? (
                      <FontAwesomeIcon icon={faSpinner} className="spinner-icon fa-spin" />
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faDownload} className="download-icon" onClick={() => downloadFileHandler(file.url, file.name)} />
                        <FontAwesomeIcon icon={faTrash} className="trash-icon" onClick={() => deleteFileHandler(file.name, false)} />
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="empty-message">No private files uploaded yet. Start uploading now!</p>
          )}

        </div>
      </div>
    </>
  );
};

export default File1;
