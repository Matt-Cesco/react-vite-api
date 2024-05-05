const EpisodeCard = ({ img_url, name, air_date }) => {
    return (
        <>
            <img className="rounded-t-lg" src={img_url} alt="image" lazyload="true" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{name}</h5>
                <p className="mb-2 tracking-tight text-gray-900">{air_date}</p>
            </div>
        </>
    );
};

export default EpisodeCard;
