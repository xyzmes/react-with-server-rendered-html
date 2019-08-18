import LikeButton from "./LikeButton";

const containers = document.querySelectorAll(".react");

containers.forEach(element => {

  let dataId = element.parentElement.getAttribute("data-id");

  ReactDOM.render( <LikeButton dataID={dataId} />, element );
  
});
