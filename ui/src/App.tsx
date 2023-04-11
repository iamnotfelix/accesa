import { Navbar } from './Components/Navbar'
import { Box } from '@mui/system'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Users } from './Pages/Users/Users'
import { UsersAdd } from './Pages/Users/UsersAdd'
import { UsersUpdate } from './Pages/Users/UsersUpdate'
import { UsersDetailed } from './Pages/Users/UsersDetailed'
import { UsersDelete } from './Pages/Users/UsersDelete'
import { UsersSorted } from './Pages/Users/UsersSorted'

function App() {
  return (
    <Box>
        <Navbar/>
      	<Routes>
			<Route path='/' element={<Home/>}></Route>

			<Route path='/users' element={<Users/>}></Route>
			<Route path='/users/:id' element={<UsersDetailed/>}></Route>
			<Route path='/users/add' element={<UsersAdd/>}></Route>
			<Route path='/users/:id/update' element={<UsersUpdate/>}></Route>
			<Route path='/users/:id/delete' element={<UsersDelete/>}></Route>
			<Route path='/leaderboard' element={<UsersSorted/>}></Route>
      	</Routes>
    </Box>
  )
}

export default App
