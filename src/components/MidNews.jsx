
function MidNews({image,title,category,link="/blogpost"}) {
    return (
        <div className="w-[280px] h-fit flex flex-col gap-y-3">
            <img src={image}
                className="object-cover h-[70%]"
            ></img>
            <a href={link} className="font-bold font-sans hover:underline">{title}</a>
            <span className="font-light">{category}</span>
        </div>
    );
}

export default MidNews;