const { Author, Book } = require("../models")

const create = async (req, res) => {
  try {
    const author = await Author.create(req.body)
    res.status(200).json(author)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const authors = await Author.findAll({
      include: [{ model: Book, as: 'books' }],
    })
    res.status(200).json(authors)
  } catch (error) {
    res.status(500).json(error)
  }
}

const show = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id)
    res.status(200).json(author)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id)
    author.set(req.body)
    await author.save()
    console.log(author)
    res.status(200).json(author)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id)
    await author.destroy()
    res.status(200).json(author)
  } catch (error) {
    res.status(500).json(error)
  }
}

const addBook = async (req, res) => {
  try {
    req.body.authorId = req.params.id
    const book = await Book.create(req.body)
    res.status(200).json(book)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  show,
  update,
  delete: deleteAuthor,
  addBook
}