import { useContext, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import LoggedInUserContext from '../context/logged-in-user';
import usePhotos from '../hooks/use-photos';
import Post from './post.js';

export default function Timeline() {
  const { user } = useContext(LoggedInUserContext);
  const { photos } = usePhotos(user);

  return (
    <div className="container col-span-2">
    {!user ? (
      <Skeleton count={1} width={640} height={50} className="mb-5" />
    ) : (
     <h1>Welcome {user.username}!</h1>
    )}
    {!photos ? (
      <Skeleton count={4} width={640} height={400} className="mb-5" />
    ) : (
     photos.map(content => <Post key={content.docId} content={content} />)
    )}

    </div>
  );
}
