// The user property is exposed by the getSession function.

import { getSession } from '@auth0/nextjs-auth0';

export default async function ProfileServer() {
  const { user } = await getSession();
 
 // if (!user) return null;

  return (
    user && (
      user && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
    )
    )
  );
}