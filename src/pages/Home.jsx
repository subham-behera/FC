import React from 'react';
import FixturesCard from '../components/FixturesCard';
import MidNews from '../components/MidNews';

const Home = () => {
  return (
    <div className="text-center">
      {/* Landing Page */}
      <section
        className="relative bg-cover bg-center text-white p-36"
        style={{ backgroundImage: 'url(https://www.mancity.com/meta/media/nmpfxv2w/li105295-f-1920x1080-c8b9678.jpg?width=1136)' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">Welcome to Manchester FC</h1>
          <p className="text-lg">Your one-stop destination for all things football.</p>
        </div>
      </section>

      {/* Upcoming Fixtures */}
      <section className="py-6">
        <h2 className="text-2xl font-bold mb-4">Upcoming Fixtures</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <FixturesCard
            date="26 April"
            time="20:00"
            logo1="https://cdn.freebiesupply.com/images/large/2x/manchester-city-logo-png-transparent.png"
            logo2="https://static.vecteezy.com/system/resources/previews/015/863/617/original/arsenal-logo-on-transparent-background-free-vector.jpg"
            team1="Man City"
            team2="Arsenal"
          />
          <FixturesCard
            date="15 June"
            time="20:00"
            logo1="https://cdn.freebiesupply.com/images/large/2x/manchester-city-logo-png-transparent.png"
            logo2="https://static.vecteezy.com/system/resources/previews/015/863/617/original/arsenal-logo-on-transparent-background-free-vector.jpg"
            team1="Man City"
            team2="Arsenal"
          />
          <FixturesCard
            date="10 August"
            time="20:00"
            logo1="https://cdn.freebiesupply.com/images/large/2x/manchester-city-logo-png-transparent.png"
            logo2="https://static.vecteezy.com/system/resources/previews/015/863/617/original/arsenal-logo-on-transparent-background-free-vector.jpg"
            team1="Man City"
            team2="Arsenal"
          />
        </div>
      </section>

      {/* News Section */}
      <section className="py-10">
        <h2 className="text-2xl font-bold mb-4">Latest News</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <MidNews
              image="https://www.mancity.com/meta/media/ssmjxzaw/lauren-hemp-uwcl-preview.jpg?width=1136"
              title="Hemp: City out to make Champions League statement ahead of Paris FC trip"
              category="Women's Team"
          />
          <MidNews
              image="https://www.mancity.com/meta/media/tspbszjg/when-city-last-met-inter.jpg?width=1136"
              title="When City last met Inter"
              category="Men's Team"
          />
          <MidNews
              image="https://www.mancity.com/meta/media/suvjdq1o/li100679-f-1920x1080-394aeb1.jpg?width=1136"
              title="Guardiola provides fitness update on Savinho, Foden and Rodrigo"
              category="Men's Team"
          />
          <MidNews
              image="https://www.mancity.com/meta/media/tspbszjg/when-city-last-met-inter.jpg?width=1136"
              title="When City last met Inter"
              category="Men's Team"
          />
          
        </div>
      </section>
    </div>
  );
};

export default Home;
