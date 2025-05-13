
const Gold = () => {
    return (
        <div className="card border border-warning shadow-2xl rounded-none py-5 scale-y-105 shadow-orange-200">
            <div className="card-body p-5">
                <h2 className="text-center text-4xl font-bold">GOLD</h2>
                <hr className="border" />
                <h3 className="text-2xl font-bold text-center"><span className="badge badge-warning border-none badge-lg">TK 4500</span>/Month</h3>
                <div>
                    <ul className="text-lg my-5 space-y-3">
                        <li>✔️Breakfast: Tondul roti + Dim baji</li>
                        <li>✔️Lunch: Rice with chicken + Dal</li>
                        <li>✔️Dinner: Mixed Sobzi</li>
                        <li>✔️Special Meal: 4 per month</li>
                    </ul>
                </div>
                <div className="card-actions justify-center">
                    <button className="btn btn-warning font-bold border-none">PURCHASE</button>
                </div>
            </div>
        </div>
    );
};

export default Gold;