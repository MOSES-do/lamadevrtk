import { useState, memo } from 'react';
import { useDispatch } from 'react-redux'
import { deleteUser } from '../../redux/userSlice';


const UsersList = ({ users }) => {
    const [requestStatus, setRequestStatus] = useState('idle')
    const dispatch = useDispatch()

    const onDeleteUser = (ids) => {
        try {
            setRequestStatus('pending')
            dispatch(deleteUser({ id: ids })).unwrap()

        } catch (err) {
            console.error("Failed to delete the user", err)
        } finally {
            setRequestStatus('idle')
        }
    }

    console.log("user changed")

    return (
        users.map((user) => (
            <div key={user.id}>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <h3>{user.password}</h3>
                <h3>{user.country}</h3>
                <button onClick={() => onDeleteUser(user.id)}>delete</button>
            </div>
        ))
    )
}

export default memo(UsersList);