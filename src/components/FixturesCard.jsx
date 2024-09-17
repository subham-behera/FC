import { FaArrowRight } from "react-icons/fa";

function FixturesCard({ date, team1, logo1, team2, logo2, time }) {
  return (
    <div className="bg-white border-t-4 border-blue-400 rounded-lg shadow-md transition-shadow hover:shadow-xl duration-300 min-w-[300px] max-w-[300px] p-5">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>Upcoming Match</span>
          <a href="#" className="flex items-center text-blue-400 hover:underline">
            All Fixtures
            <FaArrowRight className="ml-1" />
          </a>
        </div>
        <div className="text-center">
          <span className="block font-bold text-lg text-gray-700">{date}</span>
          <span className="text-sm text-gray-500">Champions League</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center space-y-1">
            <img src={logo1} alt="team1-logo" className="w-12 h-12 object-cover" />
            <span className="font-semibold text-xs text-gray-700">{team1}</span>
          </div>
          <div className="bg-gray-100 text-center py-2 px-4 rounded-lg">
            <span className="font-bold text-gray-800">{time}</span>
            <span className="block text-xs text-gray-500">BST</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <img src={logo2} alt="team2-logo" className="w-12 h-12 object-cover" />
            <span className="font-semibold text-xs text-gray-700">{team2}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <a
            href="#"
            className="text-sm py-2 px-5 border rounded-full border-gray-400 hover:bg-gray-100"
          >
            Preview
          </a>
          <a
            href="https://insider.in/football-in-online"
            className="text-sm py-2 px-5 bg-blue-400 text-white rounded-full hover:bg-blue-500"
          >
            Buy Ticket
          </a>
        </div>
      </div>
    </div>
  );
}

export default FixturesCard;
