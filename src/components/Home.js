import {useAuth} from '../auth/auth'

function Home() {

  let {user} = useAuth();

  return <p>{user.first_name}'s home page</p>
}

export default Home;
