import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
 const navigate = useNavigate()
  const handelClick=()=>{
    navigate("/home")
alert('clicked')


  }
  return (
    <div>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ducimus
        dolorem assumenda ratione est nulla aliquid inventore quidem dolorum!
        Consequatur, totam ipsum, temporibus nemo ab nostrum aperiam voluptatem
        error nobis, qui eveniet molestiae vero perferendis odio ratione ullam
        et exercitationem hic quia autem doloribus? Blanditiis sunt facere iusto
        eveniet natus!
      </p>
      <button onClick={handelClick}>Visit Home Page</button>
    </div>
  );
};

export default About;
