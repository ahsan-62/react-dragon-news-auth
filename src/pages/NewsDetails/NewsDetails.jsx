import { useParams } from "react-router-dom";


const NewsDetails = () => {

    const {id}=useParams();
    return (
        <div>
            <h3>News Details: {id}</h3>
        </div>
    );
};

export default NewsDetails;