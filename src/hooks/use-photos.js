import { useState, useEffect } from 'react';
import { getAllPhotos } from '../firebase/firebase';

export default function usePhotos(user) {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    async function getTimelinePhotos() {
      // does the user actually follow people?
        const followedUserPhotos = await getAllPhotos();
        // re-arrange array to be newest photos first by dateCreated
        followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
        setPhotos(followedUserPhotos);
    }

    getTimelinePhotos();
  }, [user?.userId, user?.following]);

  return { photos };
}
