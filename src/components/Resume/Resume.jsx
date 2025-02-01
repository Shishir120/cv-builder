// Work Experience and other template yet to design
// also design the resume in columns properly using use state

import React, { useEffect, useState } from "react";
import styles from './Resume.module.css'
import { GitHub, Linkedin, Mail, Phone, Home, Link, Calendar, Trello, Clipboard, CornerDownRight }
    from 'react-feather'


const Resume = (props) => {
    const sections = props.sections
    const resumeInformation = props.resumeInformation

    const info = {
        basicInfo: resumeInformation[sections.basicInfo],
        workExp: resumeInformation[sections.workExperience],
        projects: resumeInformation[sections.projects],
        education: resumeInformation[sections.education],
        summary: resumeInformation[sections.summary]
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
                        {<Home />} {info.basicInfo?.details?.address}

                    </div>
                    : ""
                }

                {info.basicInfo?.details?.phone ?
                    <div className={`${styles['basic-info-phone']} ${styles['header-align']}`}>
                        {<Phone />} {info.basicInfo?.details?.phone}
                    </div>
                    : ""
                }

                {info.basicInfo?.details?.email ?
                    <div className={`${styles['basic-info-email']} ${styles['header-align']}`}>
                        {<Mail />} {info.basicInfo?.details?.email}
                    </div>
                    : ""
                }

            </div>

            <div className={styles['basic-info-links']}>

                {info.basicInfo?.details?.github ?
                    <div className={`${styles['basic-info-github']} ${styles['header-align']}`}>
                        {<GitHub />} {info.basicInfo?.details?.github}
                    </div>
                    : ""
                }

                {info.basicInfo?.details?.linkedin ?
                    <div className={`${styles['basic-info-linkedin']} ${styles['header-align']}`}>
                        {<Linkedin />} {info.basicInfo?.details?.linkedin}
                    </div>
                    : ""
                }

            </div>
        </div>
    )


    const columnDiv = {

        [sections.workExperience]: (

            <div className={styles['work-exp']} key={'workExperience'}>

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
                                        <Trello /> {item.company}
                                    </div>
                                    : ""
                                }

                                {item.certificate ?
                                    <div className={`${styles['work-exp-certificate']} ${styles['data-align']}`}>
                                        <Link /> {item.certificate}
                                    </div>
                                    : ""
                                }

                                {(item.startDate && item.endDate) ?
                                    <div className={`${styles['work-exp-date']} ${styles['data-align']}`}>
                                        <Calendar /> {getFormattedDate(item.startDate)} -
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

            <div className={styles['project']}>

                {info.projects?.sectionTitle ?
                    <div className={styles['section-title']}>
                        {info?.projects?.sectionTitle}
                    </div>
                    : ""
                }

                <div className={styles['project-content']}>
                    {info?.projects?.details?.map((item, index) => {
                        return (
                            <div className={styles['project-content-individual']}
                                key={sections.projects + index}>

                                {item.title ?
                                    <div className={`${styles['project-title']} ${styles['data-align']}`}>
                                        <Clipboard />{item.title}
                                    </div>
                                    : ""
                                }

                                {item.overview ?
                                    <div className={`${styles['project-overview']}`}>
                                        <CornerDownRight />{item.overview}
                                    </div>
                                    : ""
                                }

                                {item.deployedLink ?
                                    <div className={`${styles['project-deployed']} ${styles['data-align']}`}>
                                        <Link /> {item.deployedLink}
                                    </div>
                                    : ""
                                }

                                {item.github ?
                                    <div className={`${styles['project-github']} ${styles['data-align']}`}>
                                        <GitHub /> {item.github}
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

            <div className={styles['education']} key={'education'}>

                {info.education?.sectionTitle ?
                    <div className={styles['section-title']}>
                        {info?.education?.sectionTitle}
                    </div>
                    : ""
                }

                <div className={styles['education-content']}>
                    {info?.education?.details?.map((item) => {
                        return (
                            <div className={styles['education-content-individual']}>

                                {item.title ?
                                    <div className={`${styles['education-title']} ${styles['data-align']}`}>
                                        {item.title}
                                    </div>
                                    : ""
                                }

                                {item.school ?
                                    <div className={`${styles['education-school']} ${styles['data-align']}`}>
                                        {item.school}
                                    </div>
                                    : ""
                                }

                                {(item.startDate && item.endDate) ?
                                    <div className={`${styles['education-date']} ${styles['data-align']}`}>
                                        <Calendar /> {getFormattedDate(item.startDate)} -
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
            <div className={styles['summary']} key={'summary'}>

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


    // console.log(resumeInformation?.[sections.basicInfo]?.details?.name)
    return (
        <div className={styles['resume']}>

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