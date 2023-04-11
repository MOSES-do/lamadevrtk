import { useMemo, useEffect } from 'react';


const UsersList = ({ users }) => {
    useEffect(() => {
        console.log("Component rendered")
    }, [users])
    console.log("user changed")
    const orderedPosts = useMemo(() => {
        console.log("useMemo loaded")
        return (
            users.map((user) => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <h3>{user.password}</h3>
                    <h3>{user.country}</h3>
                </div>
            ))
        )
    }, [users])
    return orderedPosts;
}

export default UsersList;