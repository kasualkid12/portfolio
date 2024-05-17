import React from 'react';
import ReactDOM from 'react-dom';
import '../Styles/ResumePreview.scss';

const ResumePreview = ({ closeModal }) => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // replace with the actual path to your resume file
    link.download = 'resume.pdf';
    link.click();
  };

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
  };


  const modalContent = (
    <div className="modal" onClick={handleBackgroundClick}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <iframe src="/resume.pdf" title="Resume Preview" className="resume-preview"></iframe>
        <button className="download-modal-button" onClick={downloadResume}>Download</button>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default ResumePreview;