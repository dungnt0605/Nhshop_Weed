import React from "react";
import RouterPage from "./_component/RouterPage";
import MainCart from "./_component/MainCart";

const page = () => {
    return (
        <>
            <div>
                {/*router page */}
                <RouterPage />
                {/* main cart */}
                <MainCart />
            </div>
        </>
    );
};

export default page;
