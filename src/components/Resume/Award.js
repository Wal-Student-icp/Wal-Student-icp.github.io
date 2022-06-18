import React from "react";

const Award = () => {
  return (
    <>
      <div className="award" id="resumeAward">
        <h4>Awards</h4>
        <div className="row awardRow d-flex flex-row gx-0">
          <div className="col-12 col-lg-1">
            <i className="fas fa-award"></i>
          </div>
          <div className="col-12 col-lg-11 awardRowCol">
            <h6>November 2021</h6>
            <h5>
              Best Performance
              <br />
              <span>Islamia College University Peshawar</span>
            </h5>
            <p className="m-0 p-0">
              Received Best Performance award and Appriciation for obtaining
              position in Bachelor of Science.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Award;
