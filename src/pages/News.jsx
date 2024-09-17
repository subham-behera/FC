import MegaNews from "../components/MegaNews";
import MidNews from "../components/MidNews";
import MiniNews from "../components/MiniNews";


function News() {
    return ( 
        <div className="container mx-auto mt-6 mb-10">
            <MegaNews/>
            <div className="flex flex-row mt-6 gap-x-6">
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
            </div>
            <div className="flex flex-row mt-6 gap-x-6">
                <MidNews
                    image="https://www.mancity.com/meta/media/tspbszjg/when-city-last-met-inter.jpg?width=1136"
                    title="When City last met Inter"
                    category="Men's Team"
                />
                <MidNews
                    image="https://www.mancity.com/meta/media/tspbszjg/when-city-last-met-inter.jpg?width=1136"
                    title="City Under-18s showcase attacking prowess in league triumph over Forest"
                    category="Men's Team"
                />
                <MiniNews
                    image="https://www.mancity.com/meta/media/az5hjj44/women-sep-16-4.jpg?width=1536"
                    category="Womens'Team"
                    title="Training: Euro vision as City gear up for Paris"
                />
                <MiniNews
                    image="https://www.mancity.com/meta/media/az5hjj44/women-sep-16-4.jpg?width=1536"
                    category="Womens'Team"
                    title="Training: Euro vision as City gear up for Paris"
                />
                <MiniNews
                    image="https://www.mancity.com/meta/media/az5hjj44/women-sep-16-4.jpg?width=1536"
                    category="Womens'Team"
                    title="Training: Euro vision as City gear up for Paris"
                />
                <MiniNews
                    image="https://www.mancity.com/meta/media/az5hjj44/women-sep-16-4.jpg?width=1536"
                    category="Womens'Team"
                    title="Training: Euro vision as City gear up for Paris"
                />
            </div>
        </div>
    );
}

export default News;