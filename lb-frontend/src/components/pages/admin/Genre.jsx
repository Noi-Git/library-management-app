import React from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'
import MetaData from '../../layout/MetaData'
import book from '../../../assets/images/book1x.png'

const Genre = () => {
  return (
    <>
      <MetaData title={'Add new book'} />
      <Row className='my-5'>
        <Col>
          <h2 className='welcome-title'>Add genre</h2>
        </Col>
      </Row>
      <Container>
        <Row className=' form-width d-flex justify-content-center'>
          <Col>
            <Form>
              {/* {['checkbox', 'radio'].map((type) => ( */}
              <div className='mb-3'>
                <Form.Check // prettier-ignore
                  type='checkbox'
                  id={''}
                  label='fiction'
                />
              </div>
              <div className='mb-3'>
                <Form.Check // prettier-ignore
                  type='checkbox'
                  id={''}
                  label='non-fiction'
                />
              </div>
              <div className='mb-3'>
                <Form.Check // prettier-ignore
                  type='checkbox'
                  id={''}
                  label='mystery'
                />
              </div>
              <div className='mb-3'>
                <Form.Check // prettier-ignore
                  type='checkbox'
                  id={''}
                  label='fantacy'
                />
              </div>
              <div className='mb-3'>
                <Form.Check // prettier-ignore
                  type='classic'
                  id={''}
                  label='mystry'
                />
              </div>
              <div className='mb-3'>
                <Form.Check // prettier-ignore
                  type='checkbox'
                  id={''}
                  label='children'
                />
              </div>
              <div className='mb-3'>
                <Form.Check // prettier-ignore
                  type='checkbox'
                  id={''}
                  label='teen'
                />
              </div>
              <div className='mb-3'>
                <Form.Check // prettier-ignore
                  type='checkbox'
                  id={''}
                  label='non-fiction'
                />
              </div>
              {/* ))} */}
            </Form>
          </Col>
        </Row>

        <Form.Text id='passwordHelpBlock' muted>
          Choose genre
        </Form.Text>
      </Container>
    </>
  )
}

export default Genre
