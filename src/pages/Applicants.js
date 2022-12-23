import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import QueryForm from '../components/forms/QueryForm';
import axios from 'axios';
import {useState} from 'react'

const headerStyle = {
    textAlign: 'center',
    padding: '20px'
}

function Applicants() {
    const [singleCand, setSingleCand] = useState();
    const [allCand, setAllCand] = useState();
    
    const onIDSubmit = e => {
        e.preventDefault()
        const param = e.currentTarget.dataQuery.value
        console.log(param);
        let request = 'https://a7ix10slyf.execute-api.us-east-1.amazonaws.com/api/candidates/' + param
        
        axios.get(request)
            .then(response => { 
                console.log(response.data);
                setSingleCand(<Row style={{paddingTop: '10px'}}>
                    <Col>
                        <Row>
                            <Col md={1}>ID: {response.data.candidate_id}</Col>
                            <Col md={3}>Name: {response.data.first_name} {response.data.last_name}</Col>
                            <Col md={3}>Created On: {response.data.created_on}</Col>
                            <Col md={3}>Last Online: {response.data.last_login}</Col>
                        </Row>
                    </Col>
                </Row>);
            });
    }

    const onCandidatesSubmit = e => {
        e.preventDefault()
        let request = 'https://a7ix10slyf.execute-api.us-east-1.amazonaws.com/api/candidates/'
        
        axios.get(request)
            .then(response => { 
                console.log(response.data);
                setAllCand(response.data.map(content =>
                <Row style={{paddingTop: '15px'}}>
                    <Col>
                        <Row>
                            <Col md={1}>ID: {content.candidate_id}</Col>
                            <Col md={3}>Name: {content.first_name} {content.last_name}</Col>
                            <Col md={3}>Created On: {content.created_on}</Col>
                            <Col md={3}>Last Online: {content.last_login}</Col>
                        </Row>
                    </Col>
                </Row>));
            });
    }
    return (
        <>
            <Row>
                <Col>
                    <h2 style={headerStyle}>
                        Applicants
                    </h2>
                </Col>
            </Row>
            <Row>
                <Col><QueryForm submitHandler={onIDSubmit} text={"Enter a candidate ID"}
                placeholder={"Enter ID"}></QueryForm></Col><Col></Col>
            </Row>
            {singleCand}
            <Row style={{paddingTop:'40px'}}>
                <Col>Request all candidates <Button onClick={onCandidatesSubmit}>Submit</Button></Col>
            </Row>
            {allCand}
        </>
    )
}

export default Applicants;