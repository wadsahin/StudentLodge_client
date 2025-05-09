
const AddMeal = () => {
    const handleAddMeal = e =>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const desc = form.desc.value;
        const category = form.category.value;
        const price = form.price.value;
        const ingredients = form.ingredients.value;
        const image = form.image.value;
        const rating = 0;
        const likes = 0;
        const reviews_count = 0;
        const postedTime = Date.now();

        const newMeal = {title, desc, category, price, ingredients, image, rating, likes, reviews_count, postedTime};
        // console.log(newMeal);
        // Save in database
        fetch("http://localhost:5000/add-meal", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newMeal),
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert("Meal added successfully");
            }
        })
    }
    return (
        <div className="card bg-base-100 w-full max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mt-3">Add New Meal</h2>
            <form onSubmit={handleAddMeal} className="card-body">
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
                <div className="md:flex justify-between gap-5">
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
                        <input type="text" name="image" placeholder="image url" className="input input-bordered" required />
                    </div>
                </div>


                <div className="form-control mt-6">
                    <button className="btn btn-warning">Add Now</button>
                </div>
            </form>
        </div>
    );
};

export default AddMeal;