import React, { useEffect } from "react";
import "./PawPrintRtoL.scss";

const PawPrintRtoL = () => {
    const pawSvg = `<svg height="50px" width="50px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.839 48.839">
        <g>
            <path style="fill:#3D0C02;" d="M39.041,36.843c2.054,3.234,3.022,4.951,3.022,6.742c0,3.537-2.627,5.252-6.166,5.252
            c-1.56,0-2.567-0.002-5.112-1.326c0,0-1.649-1.509-5.508-1.354c-3.895-0.154-5.545,1.373-5.545,1.373
            c-2.545,1.323-3.516,1.309-5.074,1.309c-3.539,0-6.168-1.713-6.168-5.252c0-1.791,0.971-3.506,3.024-6.742
            c0,0,3.881-6.445,7.244-9.477c2.43-2.188,5.973-2.18,5.973-2.18h1.093v-0.001c0,0,3.698-0.009,5.976,2.181
            C35.059,30.51,39.041,36.844,39.041,36.843z M16.631,20.878c3.7,0,6.699-4.674,6.699-10.439S20.331,0,16.631,0
            S9.932,4.674,9.932,10.439S12.931,20.878,16.631,20.878z M10.211,30.988c2.727-1.259,3.349-5.723,1.388-9.971
            s-5.761-6.672-8.488-5.414s-3.348,5.723-1.388,9.971C3.684,29.822,7.484,32.245,10.211,30.988z M32.206,20.878
            c3.7,0,6.7-4.674,6.7-10.439S35.906,0,32.206,0s-6.699,4.674-6.699,10.439C25.507,16.204,28.506,20.878,32.206,20.878z
            M45.727,15.602c-2.728-1.259-6.527,1.165-8.488,5.414s-1.339,8.713,1.389,9.972c2.728,1.258,6.527-1.166,8.488-5.414
            S48.455,16.861,45.727,15.602z"/>
        </g>
    </svg>`;

    useEffect(() => {
        const container = document.getElementById("paw-container-rtl");
        if (!container) return;

        const trailLength = 25; // Total number of paw prints
        const pawSpacing = 80; // Horizontal spacing between paw prints
        const intervalDuration = 500; // Time between creating paw prints in milliseconds
        const baseVertical = 35; // Base vertical position
        const verticalVariation = 30; // Max vertical variation in pixels

        let createdPaws = 0;
        let currentPosition = window.innerWidth; // Start at the far-right edge

        const createPaw = () => {
            if (createdPaws >= trailLength) {
                clearInterval(intervalId); // Stop once all paw prints are created
                return;
            }

            const pawPrint = document.createElement("div");
            pawPrint.className = "paw-print-rtl";
            pawPrint.innerHTML = pawSvg;

            // Horizontal position
            pawPrint.style.left = `${currentPosition}px`;

            // Vertical position with variation
            const randomOffset = Math.random() * verticalVariation - verticalVariation / 2;
            pawPrint.style.top = `${baseVertical + randomOffset}px`;

            container.appendChild(pawPrint);

            // Update for next paw print
            currentPosition -= pawSpacing; // Move left
            createdPaws++;
        };

        const intervalId = setInterval(createPaw, intervalDuration);

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return <div id="paw-container-rtl" className="paw-line-rtl" />;
};

export default PawPrintRtoL;
