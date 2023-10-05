import { Toaster } from 'sonner'
import './App.css'
import { CreateNewUser } from './components/CreateNewUser'
import { UserList } from './components/UserList'


function App() {


  return (
    <>
      <UserList />

      <CreateNewUser />

      <Toaster richColors/>
    </>
  )
}

export default App
