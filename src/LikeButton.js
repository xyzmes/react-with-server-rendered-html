function LikeButton(props) {
  return <button onClick={() => updateDB(props.dataID)}>Like</button>;
}

function updateDB(id) {
    alert(id);
}


export default LikeButton;
