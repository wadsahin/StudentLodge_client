import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddMeal = () => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const navigate = useNavigate();
    // Image upload
    const handleFileChange = (e) => {
        const selected = e.target.files[0];
        setFile(selected);
        setPreview(URL.createObjectURL(selected));
    }

    const handleAddMeal = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const desc = form.desc.value;
        const category = form.category.value;
        const price = form.price.value;
        const ingredients = form.ingredients.value;
        // const image = form.image.value;
        const rating = 0;
        const likes = 0;
        const reviews_count = 0;
        const postedTime = Date.now();

        // Images upload features
        if (!file) return alert("Please choose a file");
        const formData = new FormData();
        formData.append("file", file);
        axios.post("http://localhost:5000/api/upload", formData)
            .then(res => {
                const file = res.data;
                const imageName = file?.filename;
                const imagePath = file?.path;
                // console.log({imageName, imagePath});
                const newMeal = { title, desc, category, price, imageName, imagePath, ingredients, rating, likes, reviews_count, postedTime };
                console.log(newMeal);

                // **************** Save in database ******************
                axios.post("http://localhost:5000/add-meal", newMeal)
                    .then(res => {
                        if (res.data?.insertedId) {
                            Swal.fire({
                                title: "Added!",
                                text: "A new meal added successfully.",
                                icon: "success"
                            });
                            navigate("/dashboard/all-meals");
                        }
                    })
            })


    }
    return (
        <div className="card bg-base-100 w-full max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mt-3">Add New Meal</h2>
            <form onSubmit={handleAddMeal} encType="multipart/form-data" className="card-body">
                {/* Row 01 */}
                <div className="md:flex justify-between gap-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" name="title" placeholder="title" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Descriptions</span>
                        </label>
                        <input type="text" name="desc" placeholder="descriptions" className="input input-bordered" required />
                    </div>
                </div>
                {/* Row 02 */}
                <div className="md:flex justify-between gap-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name="category" placeholder="category" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="price" className="input input-bordered" required />
                    </div>
                </div>
                {/* Row 03 */}
                <div className="md:flex justify-between items-center gap-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Ingredients</span>
                        </label>
                        <input type="text" name="ingredients" placeholder="ingredients" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input onChange={handleFileChange} type="file" accept="image/*" />
                    </div>
                </div>
                <div className="flex-1">
                    {preview && <img src={preview} className="w-32 mx-auto rounded-xl object-cover" />}
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-warning">Add Now</button>
                </div>
            </form>
        </div>
    );
};

export default AddMeal;