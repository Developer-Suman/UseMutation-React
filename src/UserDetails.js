import React, { useState } from 'react';
import { useQuery } from 'react-query';
import * as api from './userApi';
import UserForms from './UserForms';

const UserDetails = ({userid}) => {
    const [isEditing, setIsEditing] = useState(false)



    const {data: user, isLoading} =  useQuery(['user', userid], ()=> api.getUser(userid), {
        enabled:Boolean(userid)
    });

    if(!userid){
        return 'Select a user.'
    }

    if(isLoading){
        return 'Loading user Details'
    }


  return (
    <div>
        <button onClick={()=> setIsEditing(!isEditing)}>
            {isEditing ? 'CANCEL' : 'EDIT'}
        </button>

        {isEditing ? (<UserForms user = {user} setIsEditing={setIsEditing}/>): (
            <div>
                <h2>{user.name}</h2>
                <p>{user.details}</p>
            </div>

        )}



        
    </div>
  )
}

export default UserDetails