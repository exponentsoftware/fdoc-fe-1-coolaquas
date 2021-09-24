import SingleCard from "./SingleCard";
function Albums(props) {
  return (
    <div className="albums">
      <h1>{props?.title || "Untitled"}</h1>
      <div className="albumscontainer">
        {props?.data?.length > 0 &&
          props?.data?.map((albumData) => <SingleCard data={albumData} />)}
      </div>
    </div>
  );
}

export default Albums;
