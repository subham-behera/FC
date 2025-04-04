function PricingCard({title, image, price, details, isSelected, onClick}) {
    return (
        <div
            className={`min-h-[450px] w-[300px] rounded-lg shadow-xl bg-white flex flex-col items-center p-4 transition-all duration-300 ${
                isSelected ? 'h-[500px] bg-blue-50 scale-105' : 'h-[450px]'
            }`}
            onClick={onClick}
        >
            <div className="relative w-full mb-4">
                <img src={image} alt="Membership" className="w-full h-40 object-cover rounded-lg shadow-lg"/>
                {isSelected && (
                    <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs py-1 px-2 rounded-full">Selected</span>
                )}
            </div>
            <div className="flex flex-col items-center space-y-4">
                <span className="text-2xl font-bold text-blue-600">{title}</span>
                <span className="text-lg text-gray-700">{price}</span>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                    {details.map((detail, index) => (
                        <li key={index} className="flex items-center space-x-2">
                            <span className="text-blue-500">•</span>
                            <span>{detail}</span>
                        </li>
                    ))}
                </ul>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 mt-4">
                    Choose Plan
                </button>
            </div>
        </div>
    );
}

export default PricingCard;
