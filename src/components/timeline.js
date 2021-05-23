import { useContext, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import LoggedInUserContext from '../context/logged-in-user';

export default function Timeline() {
  const { user } = useContext(LoggedInUserContext);
  const [photos, setPhotos] = useState([]);

  return (
    <div className="container col-span-2">
    {!user ? (
      <Skeleton count={1} width={640} height={500} className="mb-5" />
    ) : (
     <h1>Welcome {user.username}!</h1>
    )}
    </div>
  );
}
