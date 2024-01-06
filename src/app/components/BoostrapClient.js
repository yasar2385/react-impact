"use client"

import {
    useEffect
} from "react";

function BoostrapClient() {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js')
    }, [])
}
export default BoostrapClient;