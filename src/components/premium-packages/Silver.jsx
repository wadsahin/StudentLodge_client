
const Silver = () => {
    return (
        <div className="card border border-warning shadow-xl py-5 rounded-none">
            {/* bg-gradient-to-br from-slate-600 to-black text-white rounded-[40px] hover:scale-105 hover:duration-500 */}
            <div className="card-body p-5">
                <h2 className="text-center text-4xl font-bold">SILVER</h2>
                <hr className="border"/>
                <h3 className="text-2xl font-bold text-center"><span className="badge badge-warning badge-lg">TK 3000</span>/Month</h3>
                <div>
                    <ul className="text-lg my-5 space-y-3">
                        <li>✔️Breakfast: Parata + Baji</li>
                        <li>✔️Lunch: Rice with rice + dal</li>
                        <li>✔️Dinner: Rice Dal Vhorta</li>
                        <li>✔️Special Meal: 2 per month</li>
                    </ul>
                </div>
                <div className="card-actions justify-center">
                    <button className="btn btn-warning font-bold">PURCHASE</button>
                </div>
            </div>
        </div>
    );
};

export default Silver;