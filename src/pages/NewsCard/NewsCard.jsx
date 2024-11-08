import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { _id, title,details, image_url } = news;
    console.log(news);
    return (
        <div className="px-5 mt-2 shadow-xl card card-compact bg-base-100 ">
        <figure>
            <img
            src={image_url}
            alt="image" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            {
                
                details.length<200 ?<p>{details}</p> : <p>{details.slice(0,200)} <Link className="text-blue-600" to={`/news/${_id}`}>Read More...</Link></p>  
                
                }
            
        </div>
        </div>
    );
};

export default NewsCard;

NewsCard.propTypes = {
    news: PropTypes.object,
};