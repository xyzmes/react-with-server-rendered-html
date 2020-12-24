import LikeButton from "./LikeButton";

const containers = document.querySelectorAll(".react");

containers.forEach(element => {

  let dataId = element.parentElement.getAttribute("data-id");

  ReactDOM.render( <LikeButton dataID={dataId} />, element );
  
});


/*
npm run pre-build && npm run build_logic && npm run post_build && npm run exit
Explanation:

Use && (double ampersand) for sequential execution.
Use & (single ampersand) for parallel execution.
*/
