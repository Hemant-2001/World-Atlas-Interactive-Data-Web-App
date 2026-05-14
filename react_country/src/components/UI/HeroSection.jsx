import { FaArrowRightFromBracket } from "react-icons/fa6";
export const HeroSection = () => {
    return (
        <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">Explore the world, One country at a time </h1>
                    <p>Discover the history,culture,and beauty of every nation . Sort,
                        search and filter through countries to find details you
                    </p>
                    <button className="btn btn-darken btn-inline bg-white-box">
                        Start Exploring <FaArrowRightFromBracket />
                    </button>
                </div>
                <div className="hero-image">
                    <img
                        src="/images/world2.jpg"
                        alt="world is beauty"
                        className="banner-image"
                    />
                </div>
            </div>
        </main>
    )
};