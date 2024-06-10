import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import styles from './resume.module.css';
import samplePDF from '../../../public/resume.pdf'; // Adjust the path to your PDF file

export const Resume = () => {
    return (
        <section className={styles.container} id="resume">
            <h1 className={styles.header}>Resume</h1>
            <div className={styles.pdfContainer}>
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                    <Viewer fileUrl={samplePDF} />
                </Worker>
            </div>
        </section>
    );
};
