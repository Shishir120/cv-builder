import React from 'react';
import styles from './Body.module.css';
import { DownloadCloud } from 'react-feather';
import Editor from '../Editor/Editor.jsx';
import Resume from '../Resume/Resume.jsx';
import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";

const Body = () => {

    const colors = ['gray', 'green', 'blue', 'red', '#b2b255', 'black']

    const sections = {
        basicInfo: "Basic Info",
        education: "Education",
        workExperience: "Work Experience",
        projects: "Projects",
        summary: "Summary",
    }

    // Color to be used in resume
    const [activeColor, setActiveColor] = useState('black')

    // Information in resume
    const [resumeInformation, setResumeInformation] = useState({
        [sections.basicInfo]: {
            id: sections.basicInfo,
            sectionTitle: sections.basicInfo,
            details: {}
        },
        [sections.education]: {
            id: sections.education,
            sectionTitle: sections.education,
            details: []
        },
        [sections.workExperience]: {
            id: sections.workExperience,
            sectionTitle: sections.workExperience,
            details: []
        },
        [sections.projects]: {
            id: sections.projects,
            sectionTitle: sections.projects,
            details: []
        },
        [sections.summary]: {
            id: sections.summary,
            sectionTitle: sections.summary,
            details: ""
        },
    })

    const resumeRef = useRef()

    const handleDownload = async() => {
        const resume = resumeRef.current

        if(!resume){
            return
        }
        const canvas = await html2canvas(resume)
        const data = canvas.toDataURL('image/png')

        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "px",
            format: "a4"
          });
          const imgProperties = pdf.getImageProperties(data); // imgProperties contains properties like actual width and actual height

          const pdfWidth = pdf.internal.pageSize.getWidth();    // Setting width to width of a4 format
          
          const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width // Maintaining aspect ratio.

          pdf.addImage(data, "png", 0, 0, pdfWidth, pdfHeight)
          pdf.save("resume.pdf")
        
    }

    return (
        <div className={styles.container}>
            <div className={styles['container-section1']}>
                <div className={styles['container-section1-colors']}>
                    {colors.map((color) => {
                        return (
                            <div
                                onClick={() => setActiveColor(color)} // To change color of contents in resume
                                key={color}
                                className={`${styles['container-section1-color']} 
                                    ${activeColor==color ? styles['active'] : "" } 
                                    `} 
                                style={{ backgroundColor: color }}
                            />
                        )
                    })}
                </div>

                <div className={styles['container-section1-btn']}>
                    <button onClick={handleDownload}>
                        Download <DownloadCloud /> 
                    </button>
                </div>

            </div>
            <Editor sections={sections}
                resumeInformation={resumeInformation}
                setResumeInformation={setResumeInformation} />

            <Resume
                ref={resumeRef}
                resumeInformation={resumeInformation}
                sections={sections} 
                color={activeColor}
            />
        </div >

    )
}

export default Body