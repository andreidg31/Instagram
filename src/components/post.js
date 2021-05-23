import { useRef } from 'react';
import {Link} from 'react-router-dom';
export default function Post({ content }) {

  return (
    <div className="rounded col-span-4 border bg-white border-gray-primary mb-12">
      <div className="flex border-b border-gray-primary h-4 p-4 py-8">
        <div className="flex items-center">
          <Link to={`/p/${content.username}`} className="flex items-center">
            <img
                className="rounded-full h-8 w-8 flex mr-3"
                src="https://source.unsplash.com/random"
                alt={`${content.username} profile picture`}
            />
            <p className="font-bold">{content.username}</p>
          </Link>
        </div>
      </div>
      <img src={content.imageSrc} />
    </div>
  );
}