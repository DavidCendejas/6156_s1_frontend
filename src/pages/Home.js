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
        </>
    )
}

export default Home;