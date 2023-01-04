let users = [
  {
    email: 'jose@seja.dev'

},
{
   email: 'outro@email.com'
}
]

const getUserByEmail = (searchEmail) =>
 users.find((obj) => obj.email === searchEmail)

const signup = (data) => {
  if(getUserByEmail(data.email))
  console.log("EXISTE UM EMAIL")
  else{
    users.push(data)
  }
  return true

}
