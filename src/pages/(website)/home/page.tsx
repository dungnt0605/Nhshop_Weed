import Banner from "./_component/Banner";
import BestProduct from "./_component/BestProduct";
import ChosseYourWeed from "./_component/ChosseYourWeed";
import Comment from "./_component/Comment";
import Feedback from "./_component/Feedback";
import Order from "./_component/Order";
import Recenty from "./_component/Recenty";
import Service from "./_component/Service";
import WeedEducation from "./_component/WeedEducation";
import WhatMake from "./_component/WhatMake";

const HomePage = () => {
    return (
        <>
            {/* banner */}
            <Banner />

            {/* service */}
            <Service />

            {/*best dispensary*/}

            <BestProduct />

            {/* END PRODUCT BEST DISPENSARY */}

            {/* ******* */}

            {/* COMMENT */}
            <Comment />
            {/* END COMMENT */}

            {/* CHOOSE YOUR WEED */}
            <ChosseYourWeed />
            {/* END CHOOSE YOUR WEED */}

            {/* HOW TO ORDER */}
            <Order />
            {/* END HOW TO ORDER */}

            {/* ***** */}

            {/* WHAT MAKE */}
            <WhatMake />
            {/* END WHAT MAKE */}

            {/* ****** */}
            {/* RECENTY */}
            <Recenty />
            {/* END RECENTY */}
            {/* ****** */}
            {/* ########### */}
            <Feedback />
            {/* END ########### */}

            {/* ********* */}
            {/* WEED EDUCATION */}
            <WeedEducation />
            {/* END WEED EDUCATION */}
        </>
    );
};

export default HomePage;
