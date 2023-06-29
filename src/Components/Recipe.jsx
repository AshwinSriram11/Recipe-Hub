function Recipe(props) {
  return (
    <div className=" text-center">
      <img
        src={props.imgThumb}
        alt={props.recipeName}
        className="w-[30%]"
      />
      <div>
        <h3>{props.recipeName}</h3>
        <p>{props.cuisine}</p>
        <p>{props.category}</p>
      </div>
    </div>
  );
}

export default Recipe;
