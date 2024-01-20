import React, {
    useState,
    useEffect
} from "react";
import fakeData from "./fakeData";

async function FetchDataBase(credentials, endPoint) {
    const baseURL = fakeData.API_PATH + endPoint;
    var stringData = JSON.stringify(credentials);
    console.log(stringData);
    return await fetch(baseURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            appkey: localStorage.getItem("xmleditor:appkey") || fakeData.APP_KEY,
            apikey: localStorage.getItem("xmleditor:apikey") || localStorage.getItem("xmleditor:login_apikey") || fakeData.API_KEY,
        },
        body: "jsondata=" + encodeURIComponent(stringData),
    }).then((data) => data.json());
}
export default FetchDataBase;