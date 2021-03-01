 import React from 'react'
import InputOption from './InputOption';
 import "./Post.css";
 import FavoriteIcon from '@material-ui/icons/Favorite';
 import RateReviewIcon from '@material-ui/icons/RateReview';
 import ShareIcon from '@material-ui/icons/Share';

 function Post({ name, description, message, photoUrl }) {
     return (
         <div className="post">
             <div className="post__header">
                 <div className="post__info">
                     <h2>Asher-jay Arenz</h2>
                     <p>{description}</p>
                 </div>
             </div>


             <div className="post__body">
                 <p>{message}</p>
             </div>

             <div className="post__buttons">
                 <InputOption
                  Icon={FavoriteIcon} 
                  title="Like"
                  color="gray"
                  />
                  <InputOption
                  Icon={RateReviewIcon} 
                  title="review"
                  color="gray"
                  />
                  <InputOption
                  Icon={ShareIcon} 
                  title="share"
                  color="gray"
                  />
             </div>
             
         </div>
     )
 }
 
 export default Post
 