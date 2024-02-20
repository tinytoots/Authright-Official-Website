import React from "react";
import jobDescription from "./jobDescData";
import "./JobDescription.css";

export default function JobDescription(props) {
  const job = props.match.params.job;
  const description = jobDescription[job];
  var careeremail = "career@authright.com";
  return (
    <div className="job-description">
      <div className="jb-inner">
        <div className="title">{description.title}</div>
        <div className="jb-content">
          <div className="subtitle">{description.subTitle}</div>
          <div className="job-des-content">
            Location: {description.Location}
          </div>
          <div className="job-des-content">Company: {description.Company}</div>
          <div className="job-des-content">
            {/* Posting Title: {description.PostingTitle} */}
          </div>
          {/* <div className="job-des-content">Job ID: {description.JobID}</div> */}

          {/* <div className="job-des-content">
            Recruiting Team: {description.RecruitingTeam}
          </div> */}
          <div className="subtitle">Who we are</div>
          {description.WhoWeAre.map((item, index) => (
            <div className="job-des-content" key={index}>
              {item}
            </div>
          ))}
          <div className="subtitle">Position Summary</div>
          <div className="job-des-content">{description.PositionSummary}</div>
          <div className="subtitle">
            {job === "intern" ? "Requirements" : "Responsibilities"}
          </div>
          <div className="job-des-content">
            {description.Responsibilities.map((item, index) => (
              <div className="point">{item}</div>
            ))}
          </div>
          <div className="subtitle">
            {job === "intern" ? "Desired skills" : "Requirements"}
          </div>
          <div className="job-des-content">
            {description.Requirements.map((item, index) => (
              <div className="point">
                {item}
                
              </div>
              
            ))}
          </div>
          <div className="subtitle">Benefits</div>
          <div className="job-des-content">
            {description.Benfits.map((item, index) => (
              <div className="point">
                {item}
                
              </div>
              
            ))}
          </div>
          {/* <div className="job-des-content">{description.Benfits}</div> */}
          <div className="subtitle">Apply for this job</div>
          <div className="job-des-content">{description.apply} <a className="resumeEmail" href={`mailto:${careeremail}?subject=${description.mailto}`} rel="noreferrer" target="_blank">career@authright.com</a></div>
        </div>
      </div>
    </div>
  );
}
