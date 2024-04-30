import React from 'react'
import { Container, Button, Form, Row, Col } from 'react-bootstrap'
import MetaData from '../../layout/MetaData'
import book from '../../../assets/images/book1x.png'

const AddBook = () => {
  return (
    <>
      <MetaData title={'Add new book'} />
      <Row className='my-5'>
        <Col>
          <h2 className='welcome-title'>Add new book</h2>
        </Col>
        <Col xs='5'>
          <img className='welcome-img' src={book} alt='Gnome reading a book' />
        </Col>
      </Row>
      <Container>
        <Row className=' form-width d-flex justify-content-center'>
          <Col>
            <Form>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label htmlFor='inputPassword5'>Book Title</Form.Label>
                <Form.Control
                  type='password'
                  id='inputPassword5'
                  aria-describedby='passwordHelpBlock'
                />
                <Form.Label htmlFor='inputPassword5'>Title</Form.Label>
                <Form.Control
                  type='password'
                  id='inputPassword5'
                  aria-describedby='passwordHelpBlock'
                />

                <Form.Label htmlFor='inputPassword5'>Description</Form.Label>
                <Form.Control
                  type='password'
                  id='inputPassword5'
                  aria-describedby='passwordHelpBlock'
                />
                <Form.Label htmlFor='inputPassword5'>Image url</Form.Label>
                <Form.Control
                  type='password'
                  id='inputPassword5'
                  aria-describedby='passwordHelpBlock'
                />
                <Form.Label htmlFor='inputPassword5'>
                  Author firstname
                </Form.Label>
                <Form.Control
                  type='password'
                  id='inputPassword5'
                  aria-describedby='passwordHelpBlock'
                />
                <Form.Label htmlFor='inputPassword5'>
                  Author middlename
                </Form.Label>
                <Form.Control
                  type='password'
                  id='inputPassword5'
                  aria-describedby='passwordHelpBlock'
                />
                <Form.Label htmlFor='inputPassword5'>
                  Author lastname
                </Form.Label>
                <Form.Control
                  type='password'
                  id='inputPassword5'
                  aria-describedby='passwordHelpBlock'
                />
                <Form.Label htmlFor='inputPassword5'>Total copy</Form.Label>
                <Form.Control
                  type='password'
                  id='inputPassword5'
                  aria-describedby='passwordHelpBlock'
                />
              </Form.Group>
            </Form>
            <Button
              variant='primary'
              type='submit'
              className='buttons'
              onClick={''}
            >
              Add book
            </Button>
          </Col>
        </Row>

        <Form.Text id='passwordHelpBlock' muted>
          This is for adding new books to the database
        </Form.Text>
      </Container>
    </>
  )
}

export default AddBook
