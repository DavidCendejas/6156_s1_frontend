import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QueryForm from '../components/QueryForm';
import axios from 'axios';

function onFormSubmit(e) {
    e.preventDefault()
    const params = {'query1': e.currentTarget.dataQuery.value}
    let request = 'http://localhost:5000/Courses?query1=' + params['query1']
    console.log(request)
    // axios.get(request)
    //     .then(response => console.log(response));
}

const headerStyle = {
    textAlign: 'center',
    padding: '20px'
}

function Applicants() {
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
                <Col><QueryForm submitHandler={onFormSubmit}></QueryForm></Col>
            </Row>
        </>
    )
}

export default Applicants;