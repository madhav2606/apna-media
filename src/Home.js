import { useState } from "react";
const Home = () => {
    const [likeCount, setLikeCount] = useState(0);
const [dislikeCount, setDislikeCount] = useState(0);
 
const [activeBtn, setActiveBtn] = useState("none");
   

    

    const[printchange,setChange] = useState('share')

    const handleclick = () =>{
        setChange('edit')
    }
    const handleLikeClick = () => {
        if (activeBtn === "none") {
            setLikeCount(likeCount + 1);
          setActiveBtn("like");
          return;
        }
     
        if (activeBtn === 'like'){
          setLikeCount(likeCount+1);
          setActiveBtn("like");
          return;
        }
     
        if (activeBtn === "dislike") {
          setLikeCount(likeCount + 1);
        //   setDislikeCount(dislikeCount - 1);
          setActiveBtn("like");
        }
      };
      const handleDisikeClick = () => {
        if (activeBtn === "none") {
          setDislikeCount(dislikeCount + 1);
          setActiveBtn("dislike");
          return;
        }
       
        if (activeBtn === 'dislike'){
          setDislikeCount(dislikeCount + 1);
          setActiveBtn("dislike");
          return;
        }
     
        if (activeBtn === "like") {
          setDislikeCount(dislikeCount + 1);
        //   setLikeCount(likeCount - 1);
          setActiveBtn("dislike");
        }
      };
      const [input, setInput] = useState("");
      const handleDelete = () =>{
        setInput("");
      }
   
   
   
 return ( 

        <div className="containerdashboard">
            <br />
         <div className="dashboard">

            
         <div className="textbox">
             <form action="" onSubmit={(e) => e.preventDefault()} className="Search__form">
             
             <input type="text" placeholder="Type Your Post.."  value={input}
            onChange={(e) => setInput(e.target.value)}/>
             <button className="share" onclick={console.log(input)}>{printchange}</button>
             </form>
         </div>   
         <div className="postarea">
         
             <button className="editpost" onClick={handleclick}>edit</button>
             <button className="deletepost" onClick={handleDelete} >Delete post</button>
             
             <h1 id="postareah1">{input}</h1>
             <div className="givelikedislike">
             <div className="containerlikedislike">
  <div className="btn-container">
    <button
      className={`btn ${activeBtn === "like" ? "like-active" : ""}`}
      onClick={handleLikeClick}
    >
      <span className="material-symbols-rounded"></span>
      Like {likeCount}
    </button>
    
 
    <button
      className={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`}
      onClick={handleDisikeClick}
    >
      <span className="material-symbols-rounded"></span>
      Dislike {dislikeCount}
    </button>
  </div>
</div>
                

             </div>
         </div> 
        </div>
        <br />
      
     </div>
     );
}
 
export default Home;