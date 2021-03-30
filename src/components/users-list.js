import React, {useState} from 'react'
import axios from 'axios'

const UsersList = () => {
 
    const [users, setUsers] = useState([])

    const onLoadUsersInfo = async() => {
        try{
            const resp = await axios.get('https://reqres.in/api/users?page=2');
            setUsers(resp.data.data)
            } catch(error) {
            console.log(error);
        }
    }
      
    return (
        <div>
            <button onClick = {onLoadUsersInfo}>Get users list</button>
            {users.map((item) => {
                return <div key = {item.id}>{item.first_name} {item.last_name}<img key = {item.id} src = {item.avatar} alt = 'img'/></div>
            })}
        </div>
    )  
}

export default UsersList