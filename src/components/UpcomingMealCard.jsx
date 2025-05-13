import { BiSolidLike } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';

const UpcomingMealCard = ({ meal }) => {
    const { _id, title, price, image, rating } = meal;
    return (
        <div className="card bg-base-100 border border-yellow-200">
            <figure>
                <img
                    src={image}
                    className="h-72 w-full object-cover hover:scale-110 hover:duration-500 overflow-hidden"
                    alt="meals" />
            </figure>
            <div className="card-body p-3">
                <h2 className="card-title">
                    {title}
                </h2>
                <div className="card-actions justify-start items-center my-2">
                    <div className="badge"><FaStar size={16} color='orange' />{rating}</div>
                    <div className="badge badge-outline">{price} Tk</div>
                    <button className="btn btn-sm ml-auto"><BiSolidLike size={24} />Likes</button>
                </div>
            </div>
        </div>
    );
};

export default UpcomingMealCard;