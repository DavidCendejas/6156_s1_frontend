import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QueryForm from '../components/forms/QueryForm';
import DualMultiForm from '../components/forms/DualForm';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {useState} from 'react'

const headerStyle = {
    textAlign: 'center',
    paddingTop: '20px'
}

function Applications() {
    const [allApps, setAllApps] = useState();
    const [jobsPosted, setJobsPosted] = useState();
    const [appIDInfo, setAppIDInfo] = useState();
    const [allApplied, setAllApplied] = useState();
    const [newApp, setNewApp] = useState();
    const [deleteApp, setDeleteApp] = useState();

    const onJobsPostedSubmit = e => {
        e.preventDefault()
        const param = e.currentTarget.dataQuery.value
        let request = 'http://f22-starter-microservice-dev.us-east-1.elasticbeanstalk.com/api/applications/' + param + '/posted';
        axios.get(request)
            .then(response => { 
                setJobsPosted(response.data.Items.map(content =>
                    <Row style={{paddingTop: '15px'}}>
                        <Col>
                            <Row>
                                <Col md={2}>Applicant ID:<br></br>{content.applicant_id.S}</Col>
                                <Col md={2}>Job ID:<br></br>{content.job_id.S}</Col>
                                <Col>Application ID:<br></br>{content.application_id.S}</Col>
                            </Row>
                        </Col>
                    </Row>));
            });
    }

    const onAllAppsSubmit = e => {
        e.preventDefault()
        let request = 'http://f22-starter-microservice-dev.us-east-1.elasticbeanstalk.com/api/applications'
        axios.get(request)
            .then(response => { 
                setAllApps(response.data.Items.map(content =>
                <Row style={{paddingTop: '15px'}}>
                    <Col>
                        <Row>
                            <Col md={2}>Applicant ID:<br></br>{content.applicant_id.S}</Col>
                            <Col md={2}>Job ID:<br></br>{content.job_id.S}</Col>
                            <Col>Application ID:<br></br>{content.application_id.S}</Col>
                        </Row>
                    </Col>
                </Row>));
            });
    }

    const onAppIDSubmit = e => {
        e.preventDefault()
        const param = e.currentTarget.dataQuery.value
        let request = 'http://f22-starter-microservice-dev.us-east-1.elasticbeanstalk.com/api/applications/' + param
        axios.get(request)
            .then(response => { 
                let content = response.data.Item
                setAppIDInfo(
                    <Row style={{paddingTop: '15px'}}>
                        <Col>
                            <Row>
                                <Col md={2}>Applicant ID:<br></br>{content.applicant_id.S}</Col>
                                <Col md={2}>Job ID:<br></br>{content.job_id.S}</Col>
                                <Col>Application ID:<br></br>{content.application_id.S}</Col>
                            </Row>
                        </Col>
                    </Row>)
                }
            );
    }

    const onAllAppliedSubmit = e => {
        e.preventDefault()
        const param = e.currentTarget.dataQuery.value
        let request = 'http://f22-starter-microservice-dev.us-east-1.elasticbeanstalk.com/api/applications/' + param + '/applied';
        axios.get(request)
            .then(response => { 
                setAllApplied(response.data.Items.map(content =>
                    <Row style={{paddingTop: '15px'}}>
                        <Col>
                            <Row>
                                <Col md={2}>Applicant ID:<br></br>{content.applicant_id.S}</Col>
                                <Col md={2}>Job ID:<br></br>{content.job_id.S}</Col>
                                <Col>Application ID:<br></br>{content.application_id.S}</Col>
                            </Row>
                        </Col>
                    </Row>));
            });
    }

    const onNewSubmit = e => {
        e.preventDefault()
        let request = 'http://f22-starter-microservice-dev.us-east-1.elasticbeanstalk.com/api/applications'
        let json = {
            "applicant_id": e.currentTarget.a_id.value,
            "job_id": e.currentTarget.j_id.value
        }
        axios.post(request, json)
            .then( response => {
                if(response.data === "The applicant already applied for the job") {
                    setNewApp("The applicant already applied for the job")
                }
                else {
                    let content = response.data.Item
                    setNewApp("New Application Created with Application ID: " + content.application_id.S)
                }
            })
    }

    const onDeleteAppSubmit = e => {
        e.preventDefault()
        const param = e.currentTarget.dataQuery.value
        let request = 'http://f22-starter-microservice-dev.us-east-1.elasticbeanstalk.com/api/applications/' + param
        axios.delete(request)
            .then(response => { 
                if(response.data === "The application does not exist") {
                    setDeleteApp("The application does not exist")
                }
                else {
    
                    setDeleteApp("Application with ID: " + param + " has been deleted.")
                }
            }
        );
    }

    return (
        <>
            <Row>
                <Col>
                    <h2 style={headerStyle}>
                        Applications
                    </h2>
                </Col>
            </Row>
            <Row style={{paddingTop:'40px', paddingBottom:'40px'}}>
                <Col>View all Applications <Button onClick={onAllAppsSubmit}>Submit</Button></Col>
            </Row>
            {allApps}
            <Row style={{paddingTop:'40px'}}><Col>Add an Application</Col></Row>
            <Row>
                <Col><DualMultiForm
                submitHandler={onNewSubmit}
                textone={"Applicant ID"}
                placeholderone={"Add Applicant ID"}
                texttwo={"Job ID"}
                placeholdertwo={"Add Job ID"}>
                    </DualMultiForm>
                </Col>
                <Col></Col>
            </Row>
            {newApp}
            <Row style={{paddingTop:'40px'}}>
                <Col><QueryForm
                    submitHandler={onJobsPostedSubmit}
                    text={"Get all job applications for a job"}
                    placeholder={"Job ID"}></QueryForm></Col>
                <Col></Col>
            </Row>
            {jobsPosted}
            <Row style={{paddingTop:'40px'}}>
                <Col><QueryForm
                    submitHandler={onAppIDSubmit}
                    text={"Get application information with application ID"}
                    placeholder={"Application ID"}></QueryForm></Col>
                <Col></Col>
            </Row>
            {appIDInfo}
            <Row style={{paddingTop:'40px'}}>
                <Col><QueryForm
                    submitHandler={onAllAppliedSubmit}
                    text={"View all application of an applicant"}
                    placeholder={"Applicant ID"}></QueryForm></Col>
                <Col></Col>
            </Row>
            {allApplied}
            <Row style={{paddingTop:'40px'}}><Col>Delete an Application</Col></Row>
            <Row>
                <Col><QueryForm
                    submitHandler={onDeleteAppSubmit}
                    text={"Delete with application ID"}
                    placeholder={"Application ID"}></QueryForm></Col>
                <Col></Col>
            </Row>
            {deleteApp}
        </>
    )
}

export default Applications;