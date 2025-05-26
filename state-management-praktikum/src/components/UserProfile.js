'use client';

import useSMR from 'swr';

const fetcher = (...args) =>
    fetch(...args).then((res) => res.json()
    );

export default function UserProfile() {
    const { data, error, isLoading } = useSMR('https://jsonplaceholder.typicode.com/users/1', fetcher);

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div>
            <h1>User Profile</h1>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Email:</strong> {data.email}</p>
            {/* <p><strong>Phone:</strong> {data.phone}</p> */}
        </div>
    );
}