
function MegaNews() {
    return (
        <div className="shadow-2xl hover:shadow-md flex flex-row h-fit">
            <div className="w-[30%] bg-blue-950 py-4 px-6 flex flex-col text-white">
                <span className="text-blue-200 font-medium">Women's team</span>
                <a href="" className="text-3xl font-medium hover:underline mt-4">Taylor provides squad update ahead of Paris FC clash</a>
            </div>
            <div className="w-[70%]">
                <img src="https://www.mancity.com/meta/media/prfj3stc/gt-paris-fc-presser.jpg?width=950&height=536&mode=crop"
                    className="object-cover"
                ></img>
            </div>
        </div>
    );
}

export default MegaNews;