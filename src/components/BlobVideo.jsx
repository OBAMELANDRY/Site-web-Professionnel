import { Play } from 'lucide-react';

export default function BlobVideo() {
  return (
    <div className="blob-video">
      <div className="blob-video__shape">
        <div className="blob-video__placeholder">
          <Play size={26} />
          <span>Vidéo à venir</span>
        </div>
      </div>
      <span className="blob-video__dot blob-video__dot--1" />
      <span className="blob-video__dot blob-video__dot--2" />
    </div>
  );
}
