import {Row,Col} from 'react-bootstrap'
const Content = ({data}) => {
    
  return (
    <Row className='justify-content-center'>
          <Col sm="8" className=''>
            <div className='rectan p-3'>
              {
                data.length ? (data.map((el) => {
                  return <div key={el.id} className='d-flex border-bottom mx-4 my-3'>
                  <img className='img-av' src={el.img}/>
                  <div className='px-4'>
                    <p className='d-inline fs-5'>{el.name}</p>
                    <p className='fn-6'>{el.date}</p>
                  </div>
                </div>
                })) : <h4>No appointments today</h4>
              }
            </div>
          </Col>
        </Row>
  )
}

export default Content
