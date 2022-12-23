import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QueryForm from '../components/forms/QueryForm';
import ThreeMultiForm from '../components/forms/ThreeMultiform';
import FourMultiForm from '../components/forms/FourMultiForm';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {useState} from 'react'

const headerStyle = {
    textAlign: 'center',
    paddingTop: '20px'
}

function Jobs() {
    const [allJobs, setAllJobs] = useState();
    const [singleJob, setSingleJob] = useState();
    const [newText, setNewText] = useState();
    const [updateText, setUpdateText] = useState();
    const [deleteText, setDeleteText] = useState();

    const onSingleSubmit = e => {
        e.preventDefault()
        const param = e.currentTarget.dataQuery.value
        let request = 'http://f22-starter-microservice-dev.us-east-1.elasticbeanstalk.com/api/jobs/' + param
        
        axios.get(request)
            .then(response => { 
                let content = response.data.Item
                setSingleJob(
                <Row style={{paddingTop: '15px'}}>
                    <Col>
                        <Row>
                            <Col md={1}>Job ID:<br></br>{content.job_id.S}</Col>
                            <Col md={3}>Job Title:<br></br> {content.title.S}</Col>
                            <Col md={3}>Company Name:<br></br> {content.company_name.S}</Col>
                            <Col>Job Description:<br></br> {content.job_description.S}</Col>
                        </Row>
                    </Col>
                </Row>);
            });
    }

    const onAllJobsSubmit = e => {
        e.preventDefault()
        let request = 'http://f22-starter-microservice-dev.us-east-1.elasticbeanstalk.com/api/jobs'
        axios.get(request)
            .then(response => { 
                setAllJobs(response.data.Items.map(content =>
                <Row style={{paddingTop: '15px'}}>
                    <Col>
                        <Row>
                            <Col md={1}>Job ID:<br></br>{content.job_id.S}</Col>
                            <Col md={3}>Job Title:<br></br> {content.title.S}</Col>
                            <Col md={3}>Company Name:<br></br> {content.company_name.S}</Col>
                            <Col>Job Description:<br></br> {content.job_description.S}</Col>
                        </Row>
                    </Col>
                </Row>));
            });
    }

    const onNewSubmit = e => {
        e.preventDefault()
        let request = 'http://f22-starter-microservice-dev.us-east-1.elasticbeanstalk.com/api/jobs'
        let job_id = Math.floor((1 + Math.random()) * 1000000).toString();
        let json = {
            "job_id": job_id,
            "company_name": e.currentTarget.name.value,
            "title": e.currentTarget.title.value,
            "job_description": e.currentTarget.description.value 
        }

        axios.post(request, json)
            .then(setNewText("New Job added with Job ID " + job_id))
    }

    const onUpdateSubmit = e => {
        e.preventDefault()
        const param = e.currentTarget.id.value
        let request = 'http://f22-starter-microservice-dev.us-east-1.elasticbeanstalk.com/api/jobs/' + param

        let json = {
            "company_name": e.currentTarget.name.value,
            "title": e.currentTarget.title.value,
            "job_description": e.currentTarget.description.value 
        }

        axios.put(request, json)
            .then(setUpdateText("Job ID " + param + " has been updated."))
    }

    const onDeleteSubmit = e => {
        e.preventDefault()
        const param = e.currentTarget.dataQuery.value
        let request = 'http://f22-starter-microservice-dev.us-east-1.elasticbeanstalk.com/api/jobs/' + param
        
        axios.delete(request)
            .then(setDeleteText("Job ID: " + param + " has been deleted."))
    }

    return (
        <>
            <Row>
                <Col>
                    <h2 style={headerStyle}>
                        Jobs
                    </h2>
                </Col>
            </Row>
            <Row style={{paddingTop:'40px', paddingBottom:'40px'}}>
                <Col>View all Jobs <Button onClick={onAllJobsSubmit}>Submit</Button></Col>
            </Row>
            {allJobs}
            <Row style={{paddingTop:'40px'}}>
                <Col><QueryForm
                    submitHandler={onSingleSubmit}
                    text={"Find a Job with its Job ID"}
                    placeholder={"Job ID"}></QueryForm></Col>
                <Col></Col>
            </Row>
            {singleJob}
            <Row style={{paddingTop:'40px'}}><Col>Add a Job</Col></Row>
            <Row>
                <Col><ThreeMultiForm 
                    submitHandler={onNewSubmit}
                    textone={"Company Name"}
                    placeholderone={"Add Name"}
                    texttwo={"Job Title Description"}
                    placeholdertwo={"Add Title"}
                    textthree={"Job Description"}
                    placeholderthree={"Add Description"}
                ></ThreeMultiForm></Col>
                <Col></Col>
            </Row>
            {newText}
            <Row style={{paddingTop:'40px'}}><Col>Update a Job</Col></Row>
            <Row>
                <Col><FourMultiForm 
                    submitHandler={onUpdateSubmit}
                    textone={"Company ID"}
                    placeholderone={"Add ID"}
                    texttwo={"Company Name"}
                    placeholdertwo={"Add Name"}
                    textthree={"Job Title"}
                    placeholderthree={"Add Title"}
                    textfour={"Job Description"}
                    placeholderfour={"Add Description"}
                ></FourMultiForm></Col>
                <Col></Col>
            </Row>
            {updateText}
            <Row style={{paddingTop:'40px'}}>
                <Col><QueryForm
                    submitHandler={onDeleteSubmit}
                    text={"Delete a Job Listing with its Job ID"}
                    placeholder={"Job ID"}></QueryForm></Col>
                <Col></Col>
            </Row>
            {deleteText}
        </>
    )
}

export default Jobs;