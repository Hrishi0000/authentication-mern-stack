import axios from "axios";
import React, {  useParams,useEffect, useState  } from "react";
// import ErrorMessage from "../ErrorMessage/errormess"
//import { useHistory } from "react-router-dom";
//import AuthContext from "../../context/AuthContext";


function QuestionPage(props) {
    const { id } = props.match.params
    // console.log(id)
  const [question, setQuestion] = useState(false);
    function fetchQuestion() {
        
        axios
          .get("http://localhost:9000/ques/" + id)
          .then((response) => {
            setQuestion(response.data);
            // setTagArray(response.data.tagArray);
          });
      }
useEffect(() => fetchQuestion(),[]);
  return( 
  <div>
      <p>{question.body}</p>
      asked by {question.author}
      </div>
  )

}
export default QuestionPage;
