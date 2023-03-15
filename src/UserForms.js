import React, {useState} from 'react';
import {useMutation, useQueryClient} from 'react-query';
import * as api from './userApi';

const UserForms = ({user, setEditing}) => {
    const [fields, setFields] = useState({...user});

    const queryClient = useQueryClient();


    const { isLoading, mutateAsync, mutate } = useMutation(api.updateUser, {

        onSuccess: (data)=>{
            queryClient.setQueryData(['user', user.id], data);
            //Trigger the old data to be updated
            setEditing(false);
           
        }

    })




    const handleChange = (event)=>{
        const{name, value} = event.target;
        setFields({ ...fields, [name]: value});
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        mutate(fields)
    };

    if(isLoading){
        return 'Saving your changes...'
    }



  return (
    <div>
        <form onSubmit = {handleSubmit}>
            <label>
                Name:{' '}
                <input
            name='name'
            type='text'
            value={fields.name}
            onChange={handleChange}/>
            </label>

            <label>
                Name:{' '}
                <textarea
            name='details'
            type='text'
            value={fields.details}
            onChange={handleChange}/>
            </label>
            <button type='submit'>Submit</button>
            
        </form>
      
    </div>
  )
}

export default UserForms
