import React from "react";

const BlogPost = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4">
      {/* Header Section */}
      <header className="bg-blue-900 text-white p-6 rounded-lg">
        <h1 className="text-4xl font-bold mb-2">Manchester City 1-0 Brentford</h1>
        <p className="text-xl">Premier League 2024/25 | Match Report</p>
        <p className="text-md mt-2">September 16, 2024</p>
      </header>

      {/* Image Section */}
      <div className="my-8">
        <img
          src="https://www.mancity.com/meta/media/11dapbct/haaland-first-goal.jpg"
          alt="Man City vs Brentford"
          className="rounded-lg shadow-lg w-full h-80 object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="bg-white p-10 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Match Summary</h2>
        <p className="text-lg leading-relaxed">
          Manchester City secured a hard-fought 1-0 victory over Brentford in the 2024/25 Premier League
          season. The only goal of the match came from Phil Foden, ensuring City continued their strong
          start to the campaign.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Despite Brentford's resilience and strong defensive display, City's relentless attacking pressure
          eventually broke the deadlock in the second half. With a superb assist from Bernardo Silva, Foden
          calmly slotted the ball into the back of the net.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">Key Moments</h3>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <strong>45'</strong> - Phil Foden opens the scoring with a well-taken finish.
          </li>
          <li className="mb-2">
            <strong>72'</strong> - City almost double their lead with a close header from Erling Haaland.
          </li>
          <li className="mb-2">
            <strong>85'</strong> - Brentford came close to an equalizer, but Ederson makes a crucial save.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-4">Manager's Comments</h3>
        <p className="text-lg leading-relaxed">
          Pep Guardiola praised his team's performance, stating, "It was a tough game, but the boys showed
          great character to find the winner. We’ll look to carry this momentum forward."
        </p>

        {/* Footer */}
        <footer className="text-center mt-8 text-gray-600">
          <p>Source: <a href="https://www.mancity.com/news/mens/manchester-city-brentford-202425-match-report-63861911" className="text-blue-700 underline">Manchester City Official Website</a></p>
        </footer>
      </div>
    </div>
  );
};

export default BlogPost;
