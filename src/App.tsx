import { Toaster } from 'sonner'
import './App.css'
import { CreateNewUser } from './components/CreateNewUser'
import { UserList } from './components/UserList'


function App() {


  return (
    <>
      <CreateNewUser />

      <UserList />

      <Toaster richColors/>
    </>
  )
}

export default App
