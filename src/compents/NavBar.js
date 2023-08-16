import { Row,Col } from 'react-bootstrap'
const NavBar = ({data}) => {
    
  return (
    <Row className='justify-content-center my-2'>
          <Col sm="8" className=''>
          You {data.length} appointments today
          </Col>
    </Row>
  )
}

export default NavBar
