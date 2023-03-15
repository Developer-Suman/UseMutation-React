import { Button } from 'antd';
import { useQuery } from 'react-query';
import * as api from './userApi'

const User = ({setUser}) => {
    const { data, isLoading, isError, error } = useQuery('users', api.getUser)
    

     
    if(isLoading){
        return 'Loading Users...'
    }

    if(isError){
        return 'Something went wrong !!'
    }

  return (
    <div>
        
        <ul>{data?.map(user=> <li key={user.id}>{user.name} <Button onClick={()=>{
            setUser(user.id)
        }}>View</Button></li>)}</ul>
    </div>
  )
}

export default User