import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const headerStyle = {
    textAlign: 'center',
    padding: '20px'
}

function Home() {
    return (
        <>
            <Row>
                <Col>
                    <h2 style={headerStyle}>
                        Welcome to the website
                    </h2>
                </Col>
            </Row>
            <Row>Project Members:</Row>
            <Row style={headerStyle}>
                <Col>Aidai</Col>
                <Col>David</Col>
                <Col>Gaurika</Col>
                <Col>Dominic</Col>
                <Col>Minghan</Col>
            </Row>
        </>
    )
}

export default Home;