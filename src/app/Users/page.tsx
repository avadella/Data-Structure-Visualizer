import React from 'react'


interface User {
    id: number
    name: string
}


const usersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'});
    const users: User[] = await res.json();
    return (
        <div>
            <h1 className = 'text-fontDark'>Users</h1>
            <p>{new Date().toLocaleTimeString()}</p>
            <ul>
                {users.map(user => <li key = {user.id}> {user.name} </li>)}
            </ul>

        </div>
    )
}

export default usersPage
