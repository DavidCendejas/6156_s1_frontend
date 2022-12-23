import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QueryForm from '../components/forms/QueryForm';
import axios from 'axios';
import {useState} from 'react'

const headerStyle = {
    textAlign: 'center',
    padding: '20px'
}

function Contacts() {
    const [singleCand, setSingleCand] = useState();
    const [address, setAddress] = useState();

    const onAddressSubmit = e => {
        e.preventDefault()
        const param = e.currentTarget.dataQuery.value
        let request = 'https://l0g8wwl0f1.execute-api.us-east-1.amazonaws.com/api/contacts/1/newaddress'
        let formData = new FormData();
        formData.set("address", param)
        axios.post(request, formData)
            .then(response => {
                setAddress(response.data)
            })
    }

    const onIDSubmit = e => {
        e.preventDefault()
        const param = e.currentTarget.dataQuery.value
        let base_request = 'https://l0g8wwl0f1.execute-api.us-east-1.amazonaws.com/api/contacts/' + param
        let phone_request = base_request + '/phones'
        let address_request = base_request + '/addresses'
        let email_request = base_request + '/emailaddress'
        
        let contact_info = {}
        
        axios.get(phone_request)
            .then(pResponse => { 
                axios.get(address_request)
                    .then(aResponse => { 
                        axios.get(email_request)
                            .then(eResponse => { 
                                contact_info['phone'] = pResponse.data
                                contact_info['addresses'] = aResponse.data
                                contact_info['email'] = eResponse.data
                                setSingleCand(
                                    <Row style={{paddingTop: '10px'}}>
                                        <Row style={{paddingTop: '10px'}}>
                                            <Col md={1}>
                                                ID: {contact_info['addresses']['candidate_id']}
                                            </Col>
                                            <Col md={4}>
                                                Address:<br></br> {contact_info['addresses']['address']}
                                            </Col>
                                            <Col>
                                                Kind: {contact_info['addresses']['kind']}
                                            </Col>
                                        </Row>
                                        <Row style={{paddingTop: '20px'}}>
                                            <Col md={1}></Col>
                                            <Col md={4}>
                                                Phone Number:<br></br> {contact_info['phone']['phone']}
                                            </Col>
                                            <Col>
                                                Kind: {contact_info['phone']['kind']}
                                            </Col>
                                        </Row>
                                        <Row style={{paddingTop: '20px'}}>
                                            <Col md={1}></Col>
                                            <Col md={4}>
                                                Email: {contact_info['email']['email']}
                                            </Col>
                                            <Col></Col>
                                        </Row>
                                    </Row>); 
                            }
                        )
                    }
                )
            });
    }

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
                <Col><QueryForm submitHandler={onIDSubmit} text={"Enter a candidate ID for their Contact Information"}
                placeholder={"Enter ID"}></QueryForm></Col>
                <Col></Col>
            </Row>
            {singleCand}
            <Row style={{paddingTop:'40px', paddingBottom:'20px'}}>
                <Col><QueryForm submitHandler={onAddressSubmit} text={"Verify Address"}
                placeholder={"Enter Address"}></QueryForm></Col>
                <Col></Col>
            </Row>
            {address}
        </>
    )
}

export default Contacts;