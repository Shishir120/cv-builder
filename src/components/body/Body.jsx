import React from 'react';
import styles from './Body.module.css';
import { DownloadCloud } from 'react-feather';
import Editor from '../Editor/Editor.jsx';
import Resume from '../Resume/Resume.jsx';
import { useState } from 'react'

const Body = () => {

    const colors = ['red', 'green', 'blue', 'gray', 'yellow']

    const sections = {
        basicInfo: "Basic Info",
        education: "Education",
        workExperience: "Work Experience",
        projects: "Projects",
        summary: "Summary",
    }

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

    return (
        <div className={styles.container}>
            <div className={styles['container-section1']}>
                <div className={styles['container-section1-colors']}>
                    {colors.map((color) => {
                        return (
                            <div
                                key={color}
                                className={styles['container-section1-color']}
                                style={{ backgroundColor: color }}
                            />
                        )
                    })}
                </div>

                <div className={styles['container-section1-btn']}>
                    <button>Download <DownloadCloud /> </button>
                </div>

            </div>
            <Editor sections={sections}
                resumeInformation={resumeInformation}
                setResumeInformation={setResumeInformation} />

            <Resume
                resumeInformation={resumeInformation}
                sections={sections} />
        </div >

    )
}

export default Body