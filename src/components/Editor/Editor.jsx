// Solved when to diplay multiple chip and change accordingly // Testing left
// Solved deletion of chips when X is pressed. // Testing left
// Solved multiple chip display problem. // Testing left

        
import React, { useState, useEffect, act } from "react";
import styles from './Editor.module.css';
import InputComponent from "../InputComponent/InputComponent.jsx";
import { X } from 'react-feather'

const Editor = (props) => {

    const sections = props.sections
    const resumeInformation = props.resumeInformation
    const setResumeInformation = props.setResumeInformation

    // By default selected state is basicInfo
    const [activeSectionKey, setActiveSectionKey] = useState(
        Object.keys(sections)[0]
    )

    // For workExp, Education and projects
    const [activeDetailIndex, setActiveDetailIndex] = useState(0)




    const [activeInformation, setActiveInformation] = useState(
        resumeInformation[sections.basicInfo]
    )

    // console.log("Active information is:")
    // console.log(activeInformation)

    const [values, setValues] = useState({
        name: "",
        address: "",
        phone: "",
        email: "",
        linkedIn: "",
        github: "",
        aboutYourself: "",
        title: "",
        school: "",
        startDate: "",
        endDate: "",
        company: "",
        certificate: "",
        overview: "",
        deployedLink: "",
        summary: ""
    })


    // For Testing

    // console.log(activeInformation)
    // console.log('Section key is: ' + activeSectionKey)

    const [sectionTitle, setSectionTitle] = useState(
        sections[Object.keys(sections)[0]]
    )

    // Basic information form render
    const basicInfo = (
        <div className={styles['details']}>
            <div className={styles['details-column']}>
                <div className={styles['details-row']}>
                    <InputComponent
                        label="Name"
                        placeholder="Enter your name"
                        value={values.name}
                        onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
                    />
                </div>

                <div className={styles['details-row']}>
                    <InputComponent
                        label="Address"
                        placeholder="Enter your address"
                        value={values.address}
                        onChange={(event) => setValues((prev) => ({ ...prev, address: event.target.value }))}
                    />
                </div>

                <div className={styles['details-row']}>
                    <InputComponent
                        label="Contact no."
                        placeholder="Enter your phone"
                        value={values.phone}
                        onChange={(event) => setValues((prev) => ({ ...prev, phone: event.target.value }))}
                    />
                </div>

                <div className={styles['details-row']}>
                    <InputComponent
                        label="Email"
                        type="email"
                        placeholder="Enter your email address"
                        value={values.email}
                        onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
                    />
                </div>

                <div className={styles['details-row']}>
                    <InputComponent
                        label="LinkedIn Link"
                        placeholder="Enter your LinkedIn link"
                        value={values.linkedIn}
                        onChange={(event) => setValues((prev) => ({ ...prev, linkedIn: event.target.value }))}
                    />
                </div>

                <div className={styles['details-row']}>
                    <InputComponent
                        label="Github Link"
                        placeholder="Enter your Github link"
                        value={values.github}
                        onChange={(event) => setValues((prev) => ({ ...prev, github: event.target.value }))}
                    />
                </div>
            </div>

            <div>
                <InputComponent
                    label="About Yourself"
                    placeholder="Tell briefly about yourself"
                    value={values.aboutYourself}
                    onChange={(event) => setValues((prev) => ({ ...prev, aboutYourself: event.target.value }))}
                />
            </div>
        </div>

    )

    // Education form render
    const education = (
        <div className={styles['details']}>
            <div>
                <InputComponent
                    label="Title"
                    placeholder="Enter title eg. engineering"
                    value={values.title}
                    onChange={(event) => setValues((prev) => ({ ...prev, title: event.target.value }))}
                />
            </div>

            <div>
                <InputComponent
                    label="College/School Name"
                    placeholder="Enter name of your collage/school"
                    value={values.school}
                    onChange={(event) => setValues((prev) => ({ ...prev, school: event.target.value }))}
                />
            </div>

            <div>
                <InputComponent
                    label="Start date"
                    type="date"
                    value={values.startDate}
                    onChange={(event) => setValues((prev) => ({ ...prev, startDate: event.target.value }))}
                />
            </div>

            <div>
                <InputComponent
                    label="End date"
                    type="date"
                    value={values.endDate}
                    onChange={(event) => setValues((prev) => ({ ...prev, endDate: event.target.value }))}
                />
            </div>

        </div>
    )
    // Work experience form render
    const workExperience = (
        <div className={styles['details']}>
            <div>
                <InputComponent
                    label="Title"
                    placeholder="Enter your job title eg. full stack developer"
                    value={values.title}
                    onChange={(event) => setValues((prev) => ({ ...prev, title: event.target.value }))}
                />
            </div>

            <div>
                <InputComponent
                    label="Company Name"
                    placeholder="Enter name of the company you worked at"
                    value={values.company}
                    onChange={(event) => setValues((prev) => ({ ...prev, company: event.target.value }))}
                />
            </div>


            <div>
                <InputComponent
                    label="Certificate link"
                    placeholder="Enter experience certificate link"
                    value={values.certificate}
                    onChange={(event) => setValues((prev) => ({ ...prev, certificate: event.target.value }))}
                />
            </div>

            <div>
                <InputComponent
                    label="Start date"
                    type="date"
                    value={values.startDate}
                    onChange={(event) => setValues((prev) => ({ ...prev, startDate: event.target.value }))}
                />
            </div>

            <div>
                <InputComponent
                    label="End date"
                    type="date"
                    value={values.endDate}
                    onChange={(event) => setValues((prev) => ({ ...prev, endDate: event.target.value }))}
                />
            </div>

        </div>
    )

    // Projects form render
    const projects = (
        <div className={styles['details']}>
            <div>
                <InputComponent
                    label="Title"
                    placeholder="Enter name of your project eg. CV Builder"
                    value={values.title}
                    onChange={(event) => setValues((prev) => ({ ...prev, title: event.target.value }))}
                />
            </div>

            <div>
                <InputComponent
                    label="Overview"
                    placeholder="Give basic overview of your project"
                    value={values.overview}
                    onChange={(event) => setValues((prev) => ({ ...prev, overview: event.target.value }))}
                />
            </div>

            <div>
                <InputComponent
                    label="Deployed link"
                    placeholder="Enter deployed link of your project"
                    value={values.deployedLink}
                    onChange={(event) => setValues((prev) => ({ ...prev, deployedLink: event.target.value }))}
                />
            </div>

            <div>
                <InputComponent
                    label="Github link"
                    placeholder="Enter github link of your project"
                    value={values.github}
                    onChange={(event) => setValues((prev) => ({ ...prev, github: event.target.value }))}
                />
            </div>

        </div>
    )

    // Summary about oneself and CV form to render
    const summary = (
        <div className={styles['details']}>
            <div>
                <InputComponent
                    label="Summary"
                    type="text"
                    placeholder="Enter your objective/summary"
                    value={values.summary}
                    onChange={(event) => setValues((prev) => ({ ...prev, summary: event.target.value }))}
                />
            </div>
        </div>
    )

    // generate form based on key
    const generateForm = () => {
        switch (sections[activeSectionKey]) {
            case sections.basicInfo: return basicInfo;
            case sections.education: return education;
            case sections.workExperience: return workExperience;
            case sections.projects: return projects;
            case sections.summary: return summary;
            default: return null;
        }
    }


    // Under development

    // It returns array whether that particular section index is empty or not
    // for eg. [true, false] // first detail true and second detail empty
    const isDetailsEmpty_Array = () => {

        // Ensures details is array (for education, workExp and projects only)
        if (Array.isArray(activeInformation?.details)) {

            const hasNonEmptyValue = activeInformation?.details?.map((detail) => {
                return Object.values(detail).every(value => value === "")
            })
            return hasNonEmptyValue
        }
    }

    // const isLastDetailEmpty = () => {
    //     if(Array.isArray(activeInformation?.details)) {

    //     }
    // }


    // To save information
    const handleSave = () => {
        // activeInformation.details
        // console.log(values)

        let tempDetails = []
        let tempValue = {}

        // May be useful
        // activeInformation?.details?.map((detail, index) => {
        //     Object.values(detail).some(value => value !== "") ? "" :
        //      handleDeleteData(index) 
        // })

        // let detailStatus = isDetailsEmpty_Array()

        // Testing
        // if (isDetailsEmpty_Array()[activeDetailIndex]) {
        //     console.log(isDetailsEmpty_Array()[activeDetailIndex])
        //     return
        // }
        // else {
        // }

        switch (sections[activeSectionKey]) {


            case sections.basicInfo:
                // console.log("Inside basic info")

                tempValue = {
                    name: values.name,
                    address: values.address,
                    phone: values.phone,
                    email: values.email,
                    linkedIn: values.linkedIn,
                    github: values.github,
                    aboutYourself: values.aboutYourself
                }

                setResumeInformation((prev) =>
                ({
                    ...prev, [sections.basicInfo]: {
                        ...prev[sections.basicInfo],
                        details: tempValue,
                        sectionTitle
                    }
                }))

                break;

            case sections.education:
                tempValue = {
                    title: values.title,
                    school: values.school,
                    startDate: values.startDate,
                    endDate: values.endDate,
                }
                // tempDetails = [tempValue]

                tempDetails = [...resumeInformation[sections.education]?.details]
                tempDetails[activeDetailIndex] = tempValue

                setResumeInformation((prev) => (
                    {
                        ...prev, [sections.education]: {
                            ...prev[sections.education],
                            details: tempDetails,
                            sectionTitle
                        }
                    }
                ))
                break

            case sections.workExperience:
                tempValue = {
                    title: values.title,
                    company: values.company,
                    certificate: values.certificate,
                    startDate: values.startDate,
                    endDate: values.endDate,
                }

                tempDetails = [...resumeInformation[sections.workExperience]?.details]
                tempDetails[activeDetailIndex] = tempValue


                setResumeInformation((prev) => (
                    {
                        ...prev,
                        [sections.workExperience]: {
                            ...prev[sections.workExperience],
                            details: tempDetails,
                            sectionTitle
                        }
                    }
                ))
                break

            case sections.projects:
                tempValue = {
                    title: values.title,
                    overview: values.overview,
                    deployedLink: values.deployedLink,
                    github: values.github,
                }


                tempDetails = [...resumeInformation[sections.projects]?.details]
                tempDetails[activeDetailIndex] = tempValue

                setResumeInformation((prev) => (
                    {
                        ...prev, [sections.projects]: {
                            ...prev[sections.projects],
                            details: tempDetails,
                            sectionTitle
                        }
                    }
                ))
                break

            case sections.summary:
                const summaryTempValue = values.summary

                setResumeInformation((prev) => (
                    {
                        ...prev, [sections.summary]: {
                            ...prev[sections.summary],
                            details: summaryTempValue,
                            sectionTitle
                        }
                    }
                ))
                break

            default:
                break;
        }


    }

    const handleAddData = () => {

        // Checks whether 
        const lastIndex = activeInformation?.details?.length - 1

        if (isDetailsEmpty_Array()[lastIndex]) {
            console.log(isDetailsEmpty_Array()[lastIndex])
            return
        }
        else {

            const lastIndexInformation = activeInformation?.details[activeInformation.details.length - 1]

            // If no keys, meaning object is empty
            // If object is empty, no no need to add more chip
            Object.keys(lastIndexInformation).length !== 0 ?

                // Adding new empty object to details so that new chip is displayed
                setActiveInformation((prev) => ({ ...prev, details: [...prev.details, {}] }))
                : ""

            console.log(activeDetailIndex)
        }
    }


    const handleDeleteData = (index) => {

        let tempActiveInformationDetails = [...activeInformation.details]
        tempActiveInformationDetails?.splice(index, 1)

        // setActiveInformation((prev) => ({ ...prev, details: tempActiveInformationDetails }))

        setResumeInformation((prev) => ({
            ...prev,
            [sections[activeSectionKey]]: {
                ...prev[sections[activeSectionKey]],
                details: tempActiveInformationDetails
            }
        })
        )

    }


    useEffect(() => {

        setActiveInformation(resumeInformation[sections[activeSectionKey]])

        setValues({
            name: activeInformation?.details?.name || "",
            address: activeInformation?.details?.address || "",
            phone: activeInformation?.details?.phone || "",
            email: activeInformation?.details?.email || "",
            linkedIn: activeInformation?.details?.linkedIn || "",

            github: activeInformation?.details[activeDetailIndex]?.github || activeInformation?.details?.github || "",

            aboutYourself: activeInformation?.details?.aboutYourself || "",

            title: activeInformation?.details[activeDetailIndex]?.title || "",
            school: activeInformation?.details[activeDetailIndex]?.school || "",
            startDate: activeInformation?.details[activeDetailIndex]?.startDate || "",
            endDate: activeInformation?.details[activeDetailIndex]?.endDate || "",
            company: activeInformation?.details[activeDetailIndex]?.company || "",
            certificate: activeInformation?.details[activeDetailIndex]?.certificate || "",
            overview: activeInformation?.details[activeDetailIndex]?.overview || "",
            deployedLink: activeInformation?.details[activeDetailIndex]?.deployedLink || "",
            summary: activeInformation?.details || "",
        })

    }, [activeSectionKey, resumeInformation])


    useEffect(() => {

        setSectionTitle(activeInformation?.sectionTitle || "")

        setValues({
            name: activeInformation?.details?.name || "",
            address: activeInformation?.details?.address || "",
            phone: activeInformation?.details?.phone || "",
            email: activeInformation?.details?.email || "",
            linkedIn: activeInformation?.details?.linkedIn || "",

            /*Two cases in github as in basicInfo there is details object and  
            in rest others there is details array*/
            github: activeInformation?.details[activeDetailIndex]?.github || activeInformation?.details?.github || "",

            aboutYourself: activeInformation?.details?.aboutYourself || "",

            title: activeInformation?.details[activeDetailIndex]?.title || "",
            school: activeInformation?.details[activeDetailIndex]?.school || "",
            startDate: activeInformation?.details[activeDetailIndex]?.startDate || "",
            endDate: activeInformation?.details[activeDetailIndex]?.endDate || "",
            company: activeInformation?.details[activeDetailIndex]?.company || "",
            certificate: activeInformation?.details[activeDetailIndex]?.certificate || "",
            overview: activeInformation?.details[activeDetailIndex]?.overview || "",
            deployedLink: activeInformation?.details[activeDetailIndex]?.deployedLink || "",
            summary: activeInformation?.details || "",
        })

        console.log(resumeInformation)

        // For Testiing
        console.log(activeInformation)

        // For Testing
        console.log(isDetailsEmpty_Array())

    }, [activeInformation, activeDetailIndex])

    // useEffect(() => {
    //     setActiveInformation(resumeInformation[sections[activeSectionKey]])
    // }, [activeDetailIndex])


    useEffect(() => {
        setActiveDetailIndex(0)
    }, [activeSectionKey])



    // Testing
    // useEffect(() => {
    //     handleSave();
    // },[values])


    return (
        <div className={styles['editor']}>
            <div className={styles['editor-container']}>

                {/* Title of editor like Basic Info, Education */}
                <div className={styles['container-heading-section']}>
                    {Object.keys(sections).map((key) => {
                        return (
                            <div key={key}
                                className={`${styles['container-heading']}
                                ${activeSectionKey === key ? styles['container-heading-active'] : ""}`}
                                onClick={() => setActiveSectionKey(key)}
                            >
                                {sections[key]}
                            </div >
                        )
                    })}
                </div>

                {/* Section title */}
                <div className={styles['container-section-title']}>
                    <InputComponent key={'title'} label="Title"
                        value={sectionTitle}
                        onChange={(evt) => setSectionTitle(evt.target.value)} />
                </div>


                {/* Chips for multiple information . Conditional. Dynamic Display */}
                <div className={styles['chips']}>
                    {
                        (Array.isArray(activeInformation?.details)) ?
                            activeInformation.details?.map((item, index) => {
                                return (

                                    <div key={activeInformation.id + index}
                                        onClick={() => setActiveDetailIndex(index)}
                                        className={`${styles['chip']}
                                    ${activeDetailIndex === index ? styles['chip-active'] : ""}`}
                                    >


                                        <p>
                                            {activeInformation.sectionTitle}-{index + 1}
                                        </p>
                                        <span
                                            style={{ color: "white", fontSize: "1.2em", display: "flex" }}
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                handleDeleteData(index)
                                            }}
                                        >
                                            <X />
                                        </span>
                                    </div>
                                )

                                // { setActiveDetailIndex(index) }
                            }) : ""
                    }

                    {
                        (Array.isArray(activeInformation?.details)) ?

                            (activeInformation?.details[0]) ?
                                <span className={styles['chip-newdata']}
                                    onClick={handleAddData}>
                                    <p>New+</p>
                                </span> : ""
                             : ""
                    }

                </div>

                {generateForm()}

                <div className={styles['container-save-btn']}>
                    <button onClick={handleSave}>Save</button>
                </div>

            </div>
        </div>
    )
}

export default Editor