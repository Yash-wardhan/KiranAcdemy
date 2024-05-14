import { useParams } from "react-router-dom";

function User() {
    let { id } = useParams();
    const users = [
        {
            uid: 1,
            name: 'Alice',
            country: 'Spain'
        },
        {
            uid: 2,
            name: 'Yash Wardhan',
            country: 'India'
        },
        {
            uid: 3,
            name: 'John Doe',
            country: 'USA'
        }
    ];

    // Find the user with the matching id
    const user = users.find(e => e.uid === parseInt(id));

    return (
        <div>
            <p>This is user id: {id}</p>
            {
                user && (
                    <>
                        <h1>id: {user.uid}</h1>
                        <h1>name: {user.name}</h1>
                        <h1>country: {user.country}</h1>
                    </>
                )
            }
            {
                !user && <p>User not found</p>
            }
        </div>
    );
}

export default User;
