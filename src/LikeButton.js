function LikeButton(props) {

  return (<div> 
    <button onClick={() => updateDB(props.dataID)}>Like</button>
  </div>);
}

function updateDB(id) {
    console.log(id);
}


export default LikeButton;
