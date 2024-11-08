

import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PDFViewer = ({ pdfFile }) => {
    const [showPDF, setShowPDF] = useState(false);

    const togglePDF = () => {
        setShowPDF((prevShowPDF) => !prevShowPDF);
    };

    return (
        <div>
            <button onClick={togglePDF}>
                {showPDF ? 'Hide PDF' : 'Show PDF'}
            </button>
            {showPDF && (
                <div style={{ height: '600px', width:"400px", marginTop: '20px' }}>
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
            <Viewer fileUrl={pdfFile} />
        </Worker>
                </div>
            )}
        </div>
    );
};

export default PDFViewer;
