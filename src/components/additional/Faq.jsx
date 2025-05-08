import React from 'react';

const Faq = () => {
    return (
        <div className='my-10 mx-5 md:w-8/12 md:mx-auto'>
            <h2 className="text-3xl font-semibold border-b-2 border-warning rounded-lg pb-3 w-fit mx-auto mb-5">Frequently Asked Questions</h2>
            <div className="collapse collapse-plus bg-base-200 mb-3">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">How can I view the daily or weekly meal schedule?</div>
                <div className="collapse-content">
                    <p>Go to the "Meal Schedule" section on your dashboard. You’ll find daily and weekly menus updated by the kitchen staff or admin, including breakfast, lunch, and dinner items.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mb-3">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">Can I customize or skip a meal for a specific day?</div>
                <div className="collapse-content">
                    <p>Yes! Visit the "Meal Preferences" section. There you can choose to opt out of specific meals for any date and mention reasons or special dietary preferences if needed.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mb-3">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">How are meal charges calculated and where can I see them?</div>
                <div className="collapse-content">
                    <p>Meal charges are based on the number of meals you consume. Visit the "Billing" section to see your monthly meal usage, total cost, and payment history.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mb-3">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">Can I give feedback or rate today’s meal?</div>
                <div className="collapse-content">
                    <p> Definitely! After each meal, a feedback form appears under the "Feedback" tab. You can rate the meal and share your suggestions to help improve the food service.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mb-3">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">What if I have allergies or specific dietary restrictions?</div>
                <div className="collapse-content">
                    <p>In the "Profile Settings," you can update your dietary restrictions or allergies. The system will notify the kitchen staff to ensure your meals are prepared accordingly.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;