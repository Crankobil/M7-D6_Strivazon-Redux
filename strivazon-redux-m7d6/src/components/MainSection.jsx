// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Button, Table } from "react-bootstrap";
import {
    HiArrowSmRight,
  HiArrowSmLeft,
} from "react-icons/hi";
import { connect } from "react-redux";
import { addFavoriteCompanyAction } from "../actions";
// import "./style.css";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addFavoriteCompany: (company) => {
    dispatch(addFavoriteCompanyAction(company));
  },
});

const MainSection = ({
  jobsArray,
  searchQuery,
  skip,
  setSkip,
  addFavoriteCompany,
}) => {
  return (
    <div>
      {/* {console.log(jobsArray.data)} */}
      <Container>
        {searchQuery === "" ? (
          ""
        ) : (
          <div>
            <h5>Jobs Available</h5>
            <div className="d-flex flex-row justify-content-between">
              <HiArrowSmLeft
                className="icon"
                onClick={() => {
                  if (skip > 9) {
                    setSkip((skip -= 10));
                  }
                }}
              />
              < HiArrowSmRight
                className="icon"
                onClick={() => setSkip((skip += 10))}
              />
            </div>
<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Title</th>
      <th>Categories</th>
      <th>Company</th>
      <th>Add to Favorites</th>
    </tr>
  </thead>
  {jobsArray.map((job) => (  
  <tbody key={job._id}>
    <tr>
      <td>{job.title}</td>
      <td>{job.category}</td>
      <td>
      <Link to={`/company-detail/${job.company_name}`}> </Link>
            {job.company_name}</td>
            <td><Button
        variant="success"
            onClick={() => addFavoriteCompany(job.company_name)}
            >
                      {" "}
                      ADD
                    </Button></td>
    
    
    </tr>
  </tbody>))}

</Table>
            <Row className="border">
              {/* <Row border="primary"> */}
              <Col xs={4}>
                <h2>Title</h2>
              </Col>
              <Col xs={4}>
                <h2>Categories</h2>
              </Col>
              <Col xs={4}>
                <h2>Company</h2>
              </Col>
            </Row>
            
          </div>
        )}
      </Container>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
