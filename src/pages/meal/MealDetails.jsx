import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { useState } from "react";
import { BiSolidCommentDots, BiSolidLike } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaPersonDotsFromLine } from "react-icons/fa6";
import { GiHotMeal } from "react-icons/gi";
import { IoMdTime } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const MealDetails = () => {
    const [savedUser, setSaveUser] = useState(null);
    console.log(savedUser);
    const { user } = useAuth();
    const { mealId } = useParams();
    const navigate = useNavigate();

    const { refetch, data: meal = [] } = useQuery({
        queryKey: ['meal'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/meal/${mealId}`);
            return res.data;
        }
    });

    const { _id, title, desc, price, ingredients, image, rating, postedTime, likes, reviews_count } = meal;

    // Handle Like Button
    const handleLikesCount = async () => {
        if (user) {
            const res = await axios.put(`http://localhost:5000/likes-count/${mealId}`);
            if (res.data.modifiedCount > 0) {
                // alert("Thanks for your reaction.");
                Swal.fire({
                    // title: "Good job!",
                    text: "Thanks for your like reaction.",
                    icon: "success"
                });
                refetch();
            }
        }
        else {
            navigate("/auth/login");
        }

    }

    const handleReviewsCountAndPost = async (e) => {
        e.preventDefault();

        const review = e.target.review.value;
        // console.log(review);
        const newReview = {
            username: user?.displayName,
            userEmail: user?.email,
            review,
            meal_id: _id,
            title,
            likes,
            reviews_count: reviews_count || 0,
        }

        // Send review in server to save in db
        const res = await axios.post("http://localhost:5000/reviews", newReview);
        if (res.data?.insertedId) {
            // update the reviews_count
            const res = await axios.put(`http://localhost:5000/reviews-count/${mealId}`);
            if (res.data.modifiedCount > 0) {
                Swal.fire({
                    // title: "Good job!",
                    text: "Thanks for your feedback.",
                    icon: "success"
                });
                refetch();
                e.target.reset();
            }
        }
    };

    // handle request meal
    const handleRequestMeal = async () => {
        console.log("handle request btn click")
        console.log(user?.email)
        const res = await axios.get(`http://localhost:5000/user?email=${user?.email}`);
        console.log(res.data);
        const savedUser = res.data;
        if (savedUser.badge == "silver" && savedUser.badge == "gole" && savedUser.badge == "platinun") {
            console.log("your can send a meal request")
        } else {
            console.log("your can't send a meal request")
        }

    }

    return (
        <div className="card card-compact sm:w-10/12 md:w-8/12 mx-auto my-5 border border-base-300">
            <figure className="relative">
                <img
                    src={image}
                    className="w-full h-[520px] object-cover"
                    alt="meal" />
                <span className="badge rounded-none badge-warning py-3 absolute bottom-5 right-5 font-medium text-lg">{price} Tk</span>
            </figure>
            <div className="card-body">
                <div className="flex justify-between items-center">
                    <p className="flex items-center">
                        <span className="badge badge-warning font-medium p-2">
                            <FaPersonDotsFromLine size={18} />
                            <span className="ml-1">user</span>
                        </span>
                        <span className="font-medium ml-2 flex items-center gap-1">
                            <IoMdTime size={18} />
                            {new Date(postedTime).toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })}
                        </span>
                    </p>
                    <span className="badge"><FaStar size={16} color='orange' /><span className="ml-2">{rating}</span></span>
                </div>
                <h2 className="card-title">{title}</h2>
                <p className="text-lg text-gray-600 text-justify">{desc}</p>
                <p className="text-base"><strong>Ingredients: </strong> {ingredients} etc.</p>
                <p className="text-base"><strong>Price: </strong> {price} Tk</p>
                <hr />
                <div className="flex">
                    <div className="card-actions flex-1">
                        <button onClick={handleLikesCount} className="btn"><BiSolidLike size={24} />{likes}</button>
                        <button className="btn"><BiSolidCommentDots size={24} />
                            {reviews_count}
                        </button>
                        <button onClick={handleRequestMeal} className="btn"><GiHotMeal size={20} /> Request Meal</button>
                    </div>
                    <div className="flex-1">
                        <form onSubmit={handleReviewsCountAndPost} className="">
                            <div className="form-control mb-2">
                                <label className="label">
                                    <span className="label-text text-base font-medium">Please give a review.</span>
                                </label>
                                <textarea name="review" rows={4} cols={20} className="w-full border p-2" id="" placeholder="Write your feedback" required></textarea>
                            </div>
                            <input className="btn btn-warning btn-sm" type="submit" value="Post" />
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MealDetails;