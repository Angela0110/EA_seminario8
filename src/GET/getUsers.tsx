import { useState, useEffect } from "react";
import { User } from "../modules/user";
import axios from "axios";
import './gets.css';
import '../App.css';

interface GetUsersProps {
    usersUpdated: boolean;
    setSelectedUser: React.Dispatch<React.SetStateAction<User | null>>;
}

function GetUsers({ usersUpdated, setSelectedUser }: GetUsersProps) {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3000/user')
            .then((result) => setUsers(result.data))
            .catch((err) => console.log(err))
    }, [usersUpdated]);

    const handleUserClick = (user: User) => {
        setSelectedUser(user);
    };


    return (
        <div className="component">
            <h2>Get Users Component</h2>
            <div className="list-container">
                <div className="table-container">
                    <table className="list-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone number</th>
                                <th>Gender</th>
                                <th>Posts</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => (
                                    <tr key={index} onClick={() => handleUserClick(user)}>
                                        <td>{user.name.first_name} {user.name.middle_name} {user.name.last_name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone_number}</td>
                                        <td>{user.gender}</td>
                                        <td>
                                            {user.posts?.map((post, i) => (
                                                <li key={i}>{post.title}</li>
                                            ))}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default GetUsers;

