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
import { Quests } from './Pages/Quests/Quests'
import { QuestsDetailed } from './Pages/Quests/QuestsDetailed'
import { QuestsAdd } from './Pages/Quests/QuestsAdd'
import { QuestsUpdate } from './Pages/Quests/QuestsUpdate'
import { QuestsDelete } from './Pages/Quests/QuestsDelete'

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
			
			<Route path='/quests' element={<Quests/>}></Route>
			<Route path='/quests/:id' element={<QuestsDetailed/>}></Route>
			<Route path='/quests/add' element={<QuestsAdd/>}></Route>
			<Route path='/quests/:id/update' element={<QuestsUpdate/>}></Route>
			<Route path='/quests/:id/solve' element={<QuestsDelete/>}></Route>
      	</Routes>
    </Box>
  )
}

export default App
