// Work Experience and other template yet to design 
// Underline the Section Title in preview
// also design the resume in columns properly using use state // Done
// left to make draggable property in handleDragDrops // Testing left
// Colors managed in resume.... Done

// Left to make resume downloadable

import React, { useEffect, useState, useRef } from "react";
import styles from './Resume.module.css'
import { GitHub, Linkedin, Mail, Phone, Home, Link, Calendar, Trello, Clipboard, CornerDownRight }
    from 'react-feather'


const Resume = (props) => {
    const sections = props.sections
    const resumeInformation = props.resumeInformation
    const activeColor = props.color // For changing color in resume

    const resumeRef = useRef()
    
    const info = {
        basicInfo: resumeInformation[sections.basicInfo],
        workExp: resumeInformation[sections.workExperience],
        projects: resumeInformation[sections.projects],
        education: resumeInformation[sections.education],
        summary: resumeInformation[sections.summary]
    }

    // For drag and drop property
    const [source, setSource] = useState("");
    const [target, setTarget] = useState("");

    const handleDragDrop = () => {
        // console.log("Handle drag drop called")
        if (!source || !target) return

        // console.log("Not returned")
        let tempColumns = { ...columns }

        // console.log(`temp columns column0 is: ${tempColumns.column0}`)
        // console.log(tempColumns)


        // Returns -1 if index not found
        let swapSourceRowIndex = tempColumns.column0.findIndex((item) => {
           return source === item
        })

        // Returns -1 if index not found
        let swapTargetRowIndex = tempColumns.column0.findIndex((item) => {
           return target === item
        })
        // console.log(`source is ${source} and target is ${target}`);


        // console.log(`swap Target row index = ${swapTargetRowIndex} and source index is ${swapSourceRowIndex}`)

        // To determine whether data is in column0 or column1 inside columns
        // Initially setting source and target column to 0
        let swapSourceColumnIndex = 0;
        let swapTargetColumnIndex = 0;


        // swapSourceRowIndex contains -1 if match not found in column0.
        if (swapSourceRowIndex < 0) {
            swapSourceColumnIndex = 1;
            swapSourceRowIndex = tempColumns.column1.findIndex((item) => {
                return item === source
            })
        }

        // swapTargerRowIndex contains -1 if match not found in column0.
        if (swapTargetRowIndex < 0) {
            swapTargetColumnIndex = 1;
            swapTargetRowIndex = tempColumns.column1.findIndex((item) => {
                return item === target
            })
        }

        // console.log("before if condition")   
        // console.log(`swap Target column index = ${swapTargetColumnIndex} and source index is ${swapSourceColumnIndex}`)

        if (swapTargetColumnIndex == 0 && swapSourceColumnIndex == 0) {

            let tempData = tempColumns.column0[swapTargetRowIndex];
            tempColumns.column0[swapTargetRowIndex] = tempColumns.column0[swapSourceRowIndex];
            tempColumns.column0[swapSourceRowIndex] = tempData
            setColumns(tempColumns)
            setSource("");  // After swap, change source and target to empty string
            setTarget("");
        } 
        else if(swapTargetColumnIndex == 0 && swapSourceColumnIndex == 1) {

            let tempData = tempColumns.column0[swapTargetRowIndex];
            tempColumns.column0[swapTargetRowIndex] = tempColumns.column1[swapSourceRowIndex];
            tempColumns.column1[swapSourceRowIndex] = tempData
            setColumns(tempColumns)
            setSource("");  // After swap, change source and target to empty string
            setTarget("");

        }
        else if(swapTargetColumnIndex == 1 && swapSourceColumnIndex == 0) {

            let tempData = tempColumns.column1[swapTargetRowIndex];
            tempColumns.column1[swapTargetRowIndex] = tempColumns.column0[swapSourceRowIndex];
            tempColumns.column0[swapSourceRowIndex] = tempData
            setColumns(tempColumns)
            setSource("");  // After swap, change source and target to empty string
            setTarget("");

        }
         else if(swapTargetColumnIndex == 1 && swapSourceColumnIndex == 1) {

            let tempData = tempColumns.column1[swapTargetRowIndex];
            tempColumns.column1[swapTargetRowIndex] = tempColumns.column1[swapSourceRowIndex];
            tempColumns.column1[swapSourceRowIndex] = tempData
            setColumns(tempColumns)
            setSource("");  // After swap, change source and target to empty string
            setTarget("");
        }

    }


    const getFormattedDate = (value) => {

        if (!value) return "";
        const date = new Date(value);

        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    const basicInfo = (
        <div className={styles['basic-info']} key={'basicInfo'}>
            {/* <div>{resumeInformation?.[sections.basicInfo]?.details?.name}</div> */}

            {info.basicInfo?.details?.name ?
                <div className={`${styles['basic-info-name']} ${styles['header-align']}`}>
                    <h1>{info.basicInfo?.details?.name}</h1>
                </div>
                : ""
            }


            <div className={styles['basic-info-contacts']}>

                {info.basicInfo?.details?.address ?
                    <div className={`${styles['basic-info-address']} ${styles['header-align']}`}>
                        {<Home size={20} className={styles['feather-icon-style']} />} {info.basicInfo?.details?.address}

                    </div>
                    : ""
                }

                {info.basicInfo?.details?.phone ?
                    <div className={`${styles['basic-info-phone']} ${styles['header-align']}`}>
                        {<Phone size={20} className={styles['feather-icon-style']} />} {info.basicInfo?.details?.phone}
                    </div>
                    : ""
                }

                {info.basicInfo?.details?.email ?
                    <div className={`${styles['basic-info-email']} ${styles['header-align']}`}>
                        {<Mail size={20} className={styles['feather-icon-style']} />} {info.basicInfo?.details?.email}
                    </div>
                    : ""
                }

            </div>

            <div className={styles['basic-info-links']}>

                {info.basicInfo?.details?.github ?
                    <div className={`${styles['basic-info-github']} ${styles['header-align']}`}>
                        {<GitHub size={20} className={styles['feather-icon-style']} />} {info.basicInfo?.details?.github}
                    </div>
                    : ""
                }

                {info.basicInfo?.details?.linkedIn ?
                    <div className={`${styles['basic-info-linkedin']} ${styles['header-align']}`}>
                        {<Linkedin className={styles['feather-icon-style']} size={20} />} {info.basicInfo?.details?.linkedIn}
                    </div>
                    : ""
                }

            </div>
        </div>
    )

    const columnDiv = {

        [sections.workExperience]: (

            <div draggable
                onDragOver={() => setTarget(sections.workExperience)}
                onDragEnd={() => setSource(sections.workExperience)}
                className={styles['work-exp']}
                key={'workExperience'}>

                {info.workExp?.sectionTitle ?
                    <div className={styles['section-title']}>
                        {info.workExp?.sectionTitle}       {/* It is not inside details */}
                    </div>
                    : ""
                }

                < div className={styles['workExp-content']}>
                    {info.workExp?.details?.map((item, index) => {
                        return (

                            <div className={`${styles['workexp-content-individual']} 
                            ${index >= 1 ? styles['multiple-content'] : ""}`}>

                                {item.title ?
                                    <div className={`${styles['work-exp-title']} ${styles['data-align']}`}>
                                        {item.title}
                                    </div>
                                    : ""
                                }

                                {item.company ?
                                    <div className={`${styles['work-exp-company']} ${styles['data-align']}`}>
                                        {/* <Trello size={20} />  */}
                                        {item.company}
                                    </div>
                                    : ""
                                }

                                {item.certificate ?
                                    <div className={`${styles['work-exp-certificate']} ${styles['data-align']}`}>
                                        <Link size={15} className={styles['feather-icon-style']} /> {item.certificate}
                                    </div>
                                    : ""
                                }

                                {(item.startDate && item.endDate) ?
                                    <div className={`${styles['work-exp-date']} ${styles['data-align']}`}>
                                        <Calendar size={15} className={styles['feather-icon-style']} /> {getFormattedDate(item.startDate)} -
                                        {getFormattedDate(item.endDate)}
                                    </div>
                                    : ""
                                }
                            </div>
                        )
                    })}
                </div>


            </div >
        ),


        [sections.projects]: (

            <div draggable
                onDragOver={() => setTarget(sections.projects)}
                onDragEnd={() => setSource(sections.projects)}
                className={styles['project']}>

                {info.projects?.sectionTitle ?
                    <div className={styles['section-title']}>
                        {info?.projects?.sectionTitle}
                    </div>
                    : ""
                }

                <div className={styles['project-content']}>
                    {info?.projects?.details?.map((item, index) => {
                        return (
                            <div className={`${styles['project-content-individual']}
                            ${index >= 1 ? styles['multiple-content'] : ""}`}
                                key={sections.projects + index}>

                                {item.title ?
                                    <div className={`${styles['project-title']} ${styles['data-align']}`}>
                                        <Clipboard size={15} className={styles['feather-icon-style']} />{item.title}
                                    </div>
                                    : ""
                                }

                                {item.overview ?
                                    <div className={`${styles['project-overview']} ${styles['data-align']}`}>
                                        <CornerDownRight size={15} className={styles['feather-icon-style']} />{item.overview}
                                    </div>
                                    : ""
                                }

                                {item.deployedLink ?
                                    <div className={`${styles['project-deployed']} ${styles['data-align']}`}>
                                        <Link size={15} className={styles['feather-icon-style']} /> {item.deployedLink}
                                    </div>
                                    : ""
                                }

                                {item.github ?
                                    <div className={`${styles['project-github']} ${styles['data-align']}`}>
                                        <GitHub size={15} className={styles['feather-icon-style']} /> {item.github}
                                    </div>
                                    : ""
                                }

                            </div>
                        )
                    })}
                </div>

            </div>
        ),


        [sections.education]: (

            <div draggable
                onDragOver={() => setTarget(sections.education)}
                onDragEnd={() => setSource(sections.education)}
                className={styles['education']} key={'education'}>

                {info.education?.sectionTitle ?
                    <div className={styles['section-title']}>
                        {info?.education?.sectionTitle}
                    </div>
                    : ""
                }

                <div className={styles['education-content']}>
                    {info?.education?.details?.map((item, index) => {
                        return (
                            <div className={`${styles['education-content-individual']}
                            ${index >= 1 ? styles['multiple-content'] : ""}`}>

                                {item.title ?
                                    <div className={`${styles['education-title']} ${styles['data-align']}`}>
                                        {item.title}
                                    </div>
                                    : ""
                                }

                                {item.school ?
                                    <div className={`${styles['education-school']} ${styles['data-align']}`}>
                                        {/* <Trello size={15} /> */}
                                        {item.school}
                                    </div>
                                    : ""
                                }

                                {(item.startDate && item.endDate) ?
                                    <div className={`${styles['education-date']} ${styles['data-align']}`}>
                                        <Calendar size={15} className={styles['feather-icon-style']} /> {getFormattedDate(item.startDate)} -
                                        {getFormattedDate(item.endDate)}
                                    </div>
                                    : ""
                                }

                            </div>
                        )
                    })}
                </div>

            </div>
        ),


        [sections.summary]: (
            <div draggable
                onDragOver={() => setTarget(sections.summary)}
                onDragEnd={() => setSource(sections.summary)}
                className={styles['summary']} key={'summary'}
            >

                {info.summary?.sectionTitle ?
                    <div className={styles['section-title']}>
                        {info.summary.sectionTitle}
                    </div>
                    : ""
                }

                {info.summary?.details ?
                    <div className={styles['summary-content']}>
                        {info.summary.details}
                    </div>
                    : ""
                }
            </div>
        )
    }

    
    const [columns, setColumns] = useState(
        {
            column0: [sections.workExperience, sections.education],
            column1: [sections.projects, sections.summary]
        }
    )

    // console.log("columns are" + [columns.column0])

    useEffect(() => {
        setColumns(
            {
                column0: [sections.workExperience, sections.education],
                column1: [sections.projects, sections.summary]
            }
        )
    }, [resumeInformation])

    useEffect(() => {
        handleDragDrop();
    }, [source])


    useEffect(() => {
        if (!activeColor) {
            return
        }

        const resume = resumeRef.current
        resume.style.setProperty("--color", activeColor)
    }, [activeColor])

    // console.log(resumeInformation?.[sections.basicInfo]?.details?.name)
    return (
        <div className={styles['resume']} ref={resumeRef}>

            <h1>Here is a CV Preview</h1>

            <div className={styles['resume-container']}>

                <div className={styles['resume-container-headers']}>
                    {basicInfo}
                </div>

                <div className={styles['resume-container-columns']}>

                    <div className={styles['resume-container-column1']}>
                        {columns.column0.map((column) => (columnDiv[column]))
                        }
                    </div>

                    <div className={styles['resume-container-column2']}>
                        {columns.column1.map((column) => (columnDiv[column]))}

                    </div>

                </div>



            </div>
        </div>
    )
}

export default Resume