import React, {
    useState,
    useEffect
} from "react"
import fakeData from "./fakeData";

async function Ajaxcall(credentials, endPoint) {
    const baseURL = fakeData.API_PATH;
    var stringData = JSON.stringify(credentials);
    console.log(stringData);
    /* 

    jsondata = JSON.stringify(jsondata);
            $.ajax({
                url: url,
                data: {
                    'jsondata': jsondata
                },
                type: "post",
                dataType: "JSON",
                //async: myasync,
                contentType: "application/json",

    */

    return await fetch(baseURL + endPoint, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/x-www-form-urlencoded;charset=UTF-8',
                "appkey": localStorage.getItem('xmleditor:appkey') || fakeData.APP_KEY,
                "apikey": localStorage.getItem('xmleditor:apikey') || fakeData.API_KEY
            },
            body: "jsondata="+encodeURIComponent(stringData)
        })
        .then(data => data.json())
}

export default Ajaxcall;