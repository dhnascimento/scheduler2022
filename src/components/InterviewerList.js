import React from "react";
import InterviewerListItem from "./InterviewerListItem";

import classNames from "classnames";

import 'components/InterviewerList.scss';

export default function InterviewerList(props) {
    const interviewersList = props.interviewers.map((interviewer) => {
        return <InterviewerListItem 
            key={interviewer.id}
            id={interviewer.id}
            selected={props.interviewer === interviewer.id}
            setInterviewer={props.setInterviewer}
            avatar={interviewer.avatar}
            name={interviewer.name}
        />
    });
    return <section className="interviewers">
        <h4 className="interviewers__header text--light">Interviewer</h4>
        <ul className="interviewers__list">
            {interviewersList}
        </ul>
    </section>;
}