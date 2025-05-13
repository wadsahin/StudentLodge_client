
const Platinum = () => {
    return (
        <div className="card border border-warning shadow-xl py-5 rounded-none">
            <div className="card-body p-5">
                <h2 className="text-center text-4xl font-bold">PLATINUM</h2>
                <hr className="border"/>
                <h3 className="text-2xl font-bold text-center"><span className="badge badge-warning badge-lg">TK 6000</span>/Month</h3>
                <div>
                    <ul className="text-lg my-5 space-y-3">
                        <li>✔️Breakfast: Special Khichuri + Dim</li>
                        <li>✔️Lunch: Chicken Roast with Polao</li>
                        <li>✔️Dinner: Small fish with plain rice</li>
                        <li>✔️Special Meal: 6 per month</li>
                    </ul>
                </div>
                <div className="card-actions justify-center">
                    <button className="btn btn-warning font-bold">PURCHASE</button>
                </div>
            </div>
        </div>
    );
};

export default Platinum;