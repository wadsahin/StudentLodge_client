
const MembershipCard = ({ pkg }) => {
    return (
        <div className={`
        ${pkg == 'silver' && 'bg-slate-500'} 
        ${pkg == 'gold' && 'bg-yellow-500'} 
        ${pkg == 'platinum' && 'bg-orange-600'} 
        card 
        bg-primary text-primary-content`}>
            <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default MembershipCard;