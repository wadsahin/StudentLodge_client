
const Gold = () => {
    return (
        <div className="card bg-gradient-to-br from-slate-600 to-black text-white rounded-[40px] transition-all -translate-y-5 hover:scale-105 hover:duration-500">
            <div className="card-body p-5">
                <h2 className="text-center text-4xl font-bold">GOLD</h2>
                <hr className="border-warning border-2" />
                <h3 className="text-2xl font-bold text-center"><span className="badge badge-warning badge-lg">TK 4500</span>/Month</h3>
                <div>
                    <ul className="text-xl my-5">
                        <li>✔️Breakfast: Tondul roti + Dim baji</li>
                        <li>✔️Lunch: Rice with chicken + Dal</li>
                        <li>✔️Dinner: Mixed Sobzi</li>
                        <li>✔️Special Meal: 4 per month</li>
                    </ul>
                </div>
                <div className="card-actions justify-center">
                    <button className="btn btn-warning font-bold">PURCHASE</button>
                </div>
            </div>
        </div>
    );
};

export default Gold;