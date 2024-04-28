import { db } from '../app.js'

export const pagination = (req, res) => {
  const q =
    'SELECT book_id, book_title, book_description, book_image_url, total_copies, author_firstname, author_lastname, author_middlename, genre_name, page_index, page_size FROM books INNER JOIN authors ON books.author_id = authors.author_id INNER JOIN genre ON books.genre_id = genre.genre_id INNER JOIN pagination ON books.p_id = pagination.p_id'

  const qTotal =
    'SELECT page_size, page_index, COUNT(*) AS TotalCount, CEIL(COUNT(*) / page_size) AS TotalPage FROM books'

  db.query(qTotal, (err, data) => {
    if (err) return res.status(500).json(err)

    return res.status(200).json(data[0])
  })
}

// export const resPerPage = async (req, res) => {
//   try {
//     const { page, limit } = req.query
//     const offset = (page - 1) * limit
//     const [data] = await db.query('SELECT * FROM books LIMIT ? OFFSET ?', [
//       +limit,
//       +offset,
//     ])
//     const [totalPageData] = await db.query(
//       'SELECT count(*) AS count FROM books'
//     )
//     const totalPage = Math.ceil(+totalPageData[0]?.count / limit)

//     console.log(totalPage)

//     res.json({
//       data: data,
//       pagination: {
//         page: +page,
//         limit: +limit,
//         totalPage,
//       },
//     })
//   } catch (err) {
//     res.status(500).json(err)
//   }
// }

// export const paginationEx = (req, res) => {
//   let body = req.body

//   let params = [body.pageSize, body.pageIndex]
//   let callSP =
//     'SET @page_size = ?; SET @page_index = ?;' +
//     'CALL Get_Pagination(@page_size, @page_index)'

//   db.query(callSP, params, (err, data) => {
//     if (err) {
//       res.send(new ErrResponse(400, err.message))
//     } else {
//       if (data.length > ReadableStreamBYOBRequest.length) {
//         let bookData = data[params.length]
//         let paginationData = result[params.lenght + 1] //you will get data in form of array
//         // let paginationData = result[params.lenght + 1[0]] //this you will get data in form of object

//         res.send({
//           status: 200,
//           message: 'success',
//           allBookData: bookData,
//           pagination: paginationData,
//         })
//       } else {
//         res.send(new ErrResponse(201, 'No data found'))
//       }
//     }
//   })
// }

export const filterBooks = async (req, res) => {
  const books = await db.find()
  res.json(books)
}
