function LikeButton(props) {

  const [state, setState] = React.useState("useState") 

  return (<div> 
    <p>{state}</p>
    <button onClick={() => {
      setState(props.dataID)
      updateDB(props.dataID)
    }}>Like</button>
  </div>);
}

function updateDB(id) {
    console.log(id + " no'lu id");
}


export default LikeButton;