import { useEffect, useState } from "react";

function ScrollProgress() {

    const [scroll, setScroll] = useState(0);

    useEffect(() => {

        function updateScrollProgress() {

            const scrollTop = window.scrollY;

            const docHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const percentage = (scrollTop / docHeight) * 100;

            setScroll(percentage);

        }

        window.addEventListener("scroll", updateScrollProgress);

        updateScrollProgress();

        return () =>

            window.removeEventListener(
                "scroll",
                updateScrollProgress
            );

    }, []);

    return (

        <div className="scroll-progress-container">

            <div

                className="scroll-progress-bar"

                style={{

                    width: `${scroll}%`

                }}

            />

        </div>

    );

}

export default ScrollProgress;