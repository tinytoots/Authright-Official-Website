import React from 'react'
import jobDescription from './jobDescData'
import "./JobDescription.css"

export default function JobDescription(props) {
    const job = props.match.params.job;
    const description = jobDescription[job];
    return (
        <div className="job-description">
            <div className= "jb-inner">
                <div className = "title">
                    {description.title}
                </div>
                <div className="jb-content">
                    <div className =  "subtitle">
                        {description.subTitle}
                    </div>
                    <div className =  "content">
                        Location: {description.Location}
                    </div>
                    <div className =  "content">
                        Company: {description.Company}
                    </div>
                    <div className =  "content">
                        Posting Title: {description.PostingTitle}
                    </div>
                    <div className =  "content">
                        Job ID: {description.JobID}
                    </div>

                    <div className =  "content">
                        Recruiting Team: {description.RecruitingTeam}
                    </div>
                    <div className =  "subtitle">
                        Who we are
                    </div>
                    {description.WhoWeAre.map((item, index) => (
                        <div className = "content" key = {index}>
                            {item}
                        </div>
                    ))}
                    <div className = "subtitle">
                        Position Summary
                    </div>
                    <div className = "content">
                        {description.PositionSummary}
                    </div>
                    <div className="subtitle">
                        {job === "intern" ? "Requirements" : "Responsibilities"}
                    </div>
                    <div className = "content">
                        {description.Responsibilities.map((item, index) => (
                            <div className = "point">
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className="subtitle">
                        {job === "intern" ? "Desired skills" : "Requirements"}
                    </div>
                    <div className = "content">
                        {description.Requirements.map((item, index) => (
                            <div className = "point">
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className = "subtitle">
                        Benefits
                    </div>
                    <div className = "content">
                        {description.Benfits}
                    </div>
                    <div className = "subtitle">
                        Apply for this job
                    </div>
                    <div className = "content">
                        {description.apply}
                    </div>
                </div>
            </div>
        </div>
    )
}
