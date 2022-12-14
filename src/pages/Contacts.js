import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QueryForm from '../components/QueryForm';
import axios from 'axios';

function onPhoneSubmit(e) {
    e.preventDefault()
    const param = e.currentTarget.dataQuery.value
    let request = 'http://localhost:5011/students/' + param + '/phones'
    axios.get(request)
        .catch(function (error) {
            console.log(error)}) 
        .then(response => {
            console.log(response.data)
            let data = response.data
        });
}

function onEmailSubmit(e) {
    e.preventDefault()
    const param = e.currentTarget.dataQuery.value
    let request = 'http://localhost:5011/students/' + param + '/emails'
    axios.get(request)
        .catch(function (error) {
            console.log(error)}) 
        .then(response => {
            console.log(response.data)
            let data = response.data
        });
}

function onAddressSubmit(e) {
    e.preventDefault()
    const param = e.currentTarget.dataQuery.value
    let request = 'http://localhost:5011/students/' + param + '/addresses'
    axios.get(request)
        .catch(function (error) {
            console.log(error)}) 
        .then(response => {
            console.log(response.data)
            let data = response.data
        });
}

const headerStyle = {
    textAlign: 'center',
    padding: '20px'
}

function Contacts() {
    return (
        <>
            <Row>
                <Col>
                    <h2 style={headerStyle}>
                        Contacts
                    </h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <QueryForm submitHandler={onPhoneSubmit} text={"Associated Phone Numbers"}
                                placeholder={"Enter UNI"}>
                    </QueryForm>
                </Col>
            </Row>
            <Row>
                <Col id='PUNI'></Col>
                <Col id='Phone'></Col>
                <Col id="PKind"></Col>
            </Row>
            <Row>
                <Col>
                    <QueryForm submitHandler={onEmailSubmit} text={"Associated Emails"}
                                placeholder={"Enter UNI"}>
                    </QueryForm>
                </Col>
            </Row>
            <Row>
                <Col id='EUNI'></Col>
                <Col id='Email'></Col>
                <Col id="EKind"></Col>
            </Row>
            <Row>
                <Col>
                    <QueryForm submitHandler={onAddressSubmit} text={"Associated Addresses"}
                                placeholder={"Enter UNI"}>
                    </QueryForm>
                </Col>
            </Row>
            <Row>
                <Col id='AUNI'></Col>
                <Col id='Address'></Col>
                <Col id="AKind"></Col>
            </Row>
        </>
    )
}

export default Contacts;