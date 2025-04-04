import { useState } from 'react';
import PricingCard from "../components/PricingCard";

function Subscription() {
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handleCardClick = (plan) => {
        setSelectedPlan(selectedPlan === plan ? null : plan);  // Toggle the selection
    };

    return (
        <div className="flex flex-col items-center gap-y-6 px-8 py-8 bg-gray-50">
            <div className="text-center mb-2">
                <span className="text-4xl font-bold text-blue-700">Exclusive Plans & Pricing</span>
                <p className="text-xl text-gray-600 mt-2">Choose the plan that suits you the best and enjoy the game!</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                <PricingCard
                    title="Silver"
                    image="https://images.unsplash.com/photo-1569531955323-33c6b2dca44b?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    price="₹250"
                    details={[
                        "1 Member only",
                        "No supplements",
                        "Basic access to all matches",
                    ]}
                    isSelected={selectedPlan === 'Silver'}
                    onClick={() => handleCardClick('Silver')}
                />
                <PricingCard
                    title="Gold"
                    image="https://images.unsplash.com/photo-1434648957308-5e6a859697e8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    price="₹500"
                    details={[
                        "Up to 2 Members",
                        "Limited perks",
                        "Priority booking",
                    ]}
                    isSelected={selectedPlan === 'Gold'}
                    onClick={() => handleCardClick('Gold')}
                />
                <PricingCard
                    title="Platinum"
                    image="https://images.unsplash.com/photo-1570498839593-e565b39455fc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    price="₹1000"
                    details={[
                        "Up to 4 Members",
                        "Exclusive access",
                        "VIP seating and perks",
                    ]}
                    isSelected={selectedPlan === 'Platinum'}
                    onClick={() => handleCardClick('Platinum')}
                />
            </div>
        </div>
    );
}

export default Subscription;
