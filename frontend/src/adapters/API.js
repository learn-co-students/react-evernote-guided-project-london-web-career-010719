const USERSPATH = "http://localhost:3000/api/v1/users"
const NOTESPATH = "http://localhost:3000/api/v1/notes"


const getAllUsers = () => {
  return fetch(USERSPATH)
  .then(res => res.json())
  .catch(error => {
     console.error('Error. User data was not found:', error);
  })
}

const getAllNotes = () => {
  return fetch(NOTESPATH)
  .then(res => res.json())
  .catch(error => {
     console.error('Error. Notes data was not found:', error);
  })
}

export default {
    getAllUsers,
    getAllNotes
}
