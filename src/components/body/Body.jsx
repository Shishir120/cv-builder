import React from 'react';
import styles from './Body.module.css';
import { DownloadCloud } from 'react-feather';
import Editor from '../Editor/Editor.jsx'

const Body = () => {

    const colors = ['red', 'green', 'blue', 'gray', 'yellow']

    const sections = {
        basicInfo: "Basic Info",
        education: "Education",
        workExperience: "Work Experience",
        projects: "Projects",
        summary: "Summary",
    }

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
            <Editor sections={sections} />
        </div >

    )
}

export default Body