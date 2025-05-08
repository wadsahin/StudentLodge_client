
const Platinum = () => {
    return (
        <div className="card bg-gradient-to-br from-slate-600 to-black text-white rounded-[40px] hover:scale-105 hover:duration-500">
            <div className="card-body p-5">
                <h2 className="text-center text-4xl font-bold">PLATINUM</h2>
                <hr className="border-violet-500 border-2" />
                <h3 className="text-2xl font-bold text-center"><span className="badge badge-warning badge-lg">TK 6000</span>/Month</h3>
                <div>
                    <ul className="text-xl my-5">
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