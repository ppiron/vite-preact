import { useLoaderData } from 'react-router-dom';

export function User() {
  const user = useLoaderData();
  // console.log(user);
  return (
    user && (
      <>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </>
    )
  );
}
