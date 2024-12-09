'use client';

import { useUser } from '@auth0/nextjs-auth0/client';

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div> <h1>Client View</h1>
{user.picture && (
        <img src={user.picture} alt={user.name || "User Profile Photo"} />
)}
        
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}