import { useState } from "react";
import "./App.css";
import SingleCard from "./SingleCard";
import Albums from "./Albums";

function App() {
  const [album] = useState({
    album_title: "Rockstar",
    artist: "A.R.Rahaman",
    album_cover:
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ceb0a114960774.56037a57f1752.jpg",
  });
  const [albums] = useState([
    {
      album_title: "Rockstar",
      artist: "A.R.Rahaman",
      album_cover:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ceb0a114960774.56037a57f1752.jpg",
    },
    {
      album_title: "Rockstar",
      artist: "A.R.Rahaman",
      album_cover:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ceb0a114960774.56037a57f1752.jpg",
    },
    {
      album_title: "Rockstar",
      artist: "A.R.Rahaman",
      album_cover:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ceb0a114960774.56037a57f1752.jpg",
    },
    {
      album_title: "Rockstar",
      artist: "A.R.Rahaman",
      album_cover:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ceb0a114960774.56037a57f1752.jpg",
    },
    {
      album_title: "Rockstar",
      artist: "A.R.Rahaman",
      album_cover:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ceb0a114960774.56037a57f1752.jpg",
    },
    {
      album_title: "Rockstar",
      artist: "A.R.Rahaman",
      album_cover:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ceb0a114960774.56037a57f1752.jpg",
    },
    {
      album_title: "Rockstar",
      artist: "A.R.Rahaman",
      album_cover:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ceb0a114960774.56037a57f1752.jpg",
    },
    {
      album_title: "Rockstar",
      artist: "A.R.Rahaman",
      album_cover:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ceb0a114960774.56037a57f1752.jpg",
    },
    {
      album_title: "Rockstar",
      artist: "A.R.Rahaman",
      album_cover:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ceb0a114960774.56037a57f1752.jpg",
    },
  ]);

  return (
    <div className="App">
      <SingleCard data={album} />
      <Albums title={"Albums"} data={albums} />
    </div>
  );
}

export default App;
