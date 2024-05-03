import React, { useState } from 'react'
import { Container, Button, Form, Row, Col } from 'react-bootstrap'
import MetaData from '../../layout/MetaData'
import axios from 'axios'
import book from '../../../assets/images/book1x.png'

const AddBook = () => {
  const [addBook, setAddBook] = useState()
  const [addBookTitle, setAddBookTitle] = useState('')
  const [addBookDescription, setAddBookDescription] = useState('')
  const [addBookImageUrl, setAddBookImageUrl] = useState('')
  const [addBookGenre, setAddBookGenre] = useState('')
  const [addAuthorFirstname, setAddAuthorFirstname] = useState('')
  const [addAuthorMiddlename, setAddAuthorMiddlename] = useState('')
  const [addAuthorLastname, setAddAuthorLastname] = useState('')
  const [addTotalCopy, setAddTotalCopy] = useState('')

  const handleAddBook = (e) => {
    setAddBook(e.target.value)
  }

  const onSubmitBook = async (e) => {
    e.preventDefault()

    await axios.post('http://localhost:3307/api/v1/books/addBook', {})
  }
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
            <Form onSubmit={onSubmitBook}>
              <Form.Group className='mb-3'>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type='password'
                  id='book_id1'
                  name='book_title'
                  aria-describedby='passwordHelpBlock'
                  onChange={handleAddBook}
                  className='mb-4'
                />

                <Form.Label>Description</Form.Label>
                <Form.Control
                  type='password'
                  id='book_id2'
                  name='book_description'
                  aria-describedby='passwordHelpBlock'
                  className='mb-4'
                />
                <Form.Label>Image url</Form.Label>
                <Form.Control
                  type='password'
                  id='book_id3'
                  name='book_image_url'
                  aria-describedby='passwordHelpBlock'
                  className='mb-4'
                />
                <Form.Label>Genre</Form.Label>
                <Form.Control
                  type='text'
                  id='book_id4'
                  name='genre'
                  aria-describedby='passwordHelpBlock'
                  className='mb-4'
                />
                <Form.Label>Author firstname</Form.Label>
                <Form.Control
                  type='password'
                  id='book_id5'
                  name='author_firstname'
                  aria-describedby='passwordHelpBlock'
                  className='mb-4'
                />
                <Form.Label>Author middlename</Form.Label>
                <Form.Control
                  type='password'
                  id='book_id6'
                  name='author_middlename'
                  aria-describedby='passwordHelpBlock'
                  className='mb-4'
                />
                <Form.Label>Author lastname</Form.Label>
                <Form.Control
                  type='password'
                  id='book_id7'
                  name='author_lastname'
                  aria-describedby='passwordHelpBlock'
                  className='mb-4'
                />
                <Form.Label>Total copy</Form.Label>
                <Form.Control
                  type='password'
                  id='book_id8'
                  name='total_copies'
                  aria-describedby='passwordHelpBlock'
                  className='mb-4'
                />
              </Form.Group>
              <Button
                variant='primary'
                type='submit'
                className='buttons'
                onClick={handleAddBook}
              >
                Add book
              </Button>
            </Form>
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
