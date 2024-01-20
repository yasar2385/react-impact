"use client"
import React, {
    useState,
    useEffect
} from "react"
import ReactDOM from 'react-dom';
const fakeData = {
    "APP_KEY": "xmleditor",
    "API_KEY": "HgnqXDUGGRmt5M585EzdEpXKK6kNtQ68nfPuwV_G2-f8iou9J_eB8U6F96pNGSsSIvFJJoUS9WBl3ScSOXn1AXjezKQRMajKFC9xILjdGFBHarIQVgP4LWeFDzbxbs1XniGmH_WsRrtX3GB_mPu6L7JA-C06NbDs",
    "USER_API_KEY": "J38YUp-iVcmkvOPu9584ReU3_jmYbupt51neV-q7yv844bwgwYeAwY5_2LJRyh89V9C92dtpe4Ct5M585EzdEpXKK6kNtQ68nfPuwV_G2-f8iou9J_eB8bBWdQ2h2ndCjZsAg23jgOBoKCPmxhgo1vKdYlG-mao2efIN7Lmguplkt1H7_920KnIdEe5x-OKnN93kbvbUzLiBRogXUOchJW1b7E22eIfeu7SzeJ8dOqvRJ6DBwIlVCd2d2XAs1asG6Jjtx06XNq-oGaLouApHWCmmCnETD-VrxBN3O2QitT_nVaQUsl91s7HDPH4LjYXyPox6k4-sh4V75Zj1LVC3IK3hvFqRj4iAR1oDczJLpo-StQfFe2VsjzlsfZFthMVBjXXRMYs_6JmgCnIi8p2Q-GyPb6y88vfuI1wVHT-MI8tU-1ZZKYPNVg",
    "SERVER_DB_LIST": {
        "default": "impactonlinebackend.newgen.co",
        "impact-ops.newgen.co": "impactonlinebackend.newgen.co",
        "impact-ops-dev.newgen.co": "impactonlinebackend.newgen.co",
        "impact-ops-uat.newgen.co": "impactonlinebackend-uat.newgen.co",
        "impact-ops-qa.newgen.co": "impactonlinebackend-uat.newgen.co",
        "impact-ops-qa.newgen.co:8081": "impactonlinebackend-uat.newgen.co"
    }
};
const isWindowContext = typeof window !== "undefined";
if (isWindowContext) {
    fakeData.DB_DOMAIN = fakeData.SERVER_DB_LIST[window.location.host] ? fakeData.SERVER_DB_LIST[window.location.host] : fakeData.SERVER_DB_LIST.default;
    fakeData.DOMAIN_URL = window.location.href + "";
    fakeData.IS_LIVE_DOMAIN = window.location.host == (Object.keys(fakeData.SERVER_DB_LIST)[1]);
    fakeData.IS_DEV_DOMAIN = window.location.host == (Object.keys(fakeData.SERVER_DB_LIST)[2]);
    fakeData.IS_UAT_DOMAIN = window.location.host == ((Object.keys(fakeData.SERVER_DB_LIST)[4]) || (Object.keys(fakeData.SERVER_DB_LIST)[3]) || (Object.keys(fakeData.SERVER_DB_LIST)[5]));
    fakeData.IS_LOCAL_HOST = Boolean(fakeData.DOMAIN_URL.includes("localhost"));
    fakeData.IS_LOCAL_LIVE = Boolean(fakeData.DOMAIN_URL.includes("impactweb_live"));
    fakeData.NG_WEB_URL = "https://www.newgen.co/";
    fakeData.API_KEY = "HgnqXDUGGRmt5M585EzdEpXKK6kNtQ68nfPuwV_G2-f8iou9J_eB8U6F96pNGSsSIvFJJoUS9WBl3ScSOXn1AXjezKQRMajKFC9xILjdGFBHarIQVgP4LWeFDzbxbs1XniGmH_WsRrtX3GB_mPu6L7JA-C06NbDs";
    fakeData.User_API_KEY = 'J38YUp-iVcmkvOPu9584ReU3_jmYbupt51neV-q7yv844bwgwYeAwY5_2LJRyh89V9C92dtpe4Ct5M585EzdEpXKK6kNtQ68nfPuwV_G2-f8iou9J_eB8bBWdQ2h2ndCjZsAg23jgOBoKCPmxhgo1vKdYlG-mao2efIN7Lmguplkt1H7_920KnIdEe5x-OKnN93kbvbUzLiBRogXUOchJW1b7E22eIfeu7SzeJ8dOqvRJ6DBwIlVCd2d2XAs1asG6Jjtx06XNq-oGaLouApHWCmmCnETD-VrxBN3O2QitT_nVaQUsl91s7HDPH4LjYXyPox6k4-sh4V75Zj1LVC3IK3hvFqRj4iAR1oDczJLpo-StQfFe2VsjzlsfZFthMVBjXXRMYs_6JmgCnIi8p2Q-GyPb6y88vfuI1wVHT-MI8tU-1ZZKYPNVg';
    fakeData.APP_KEY = "xmleditor";
    fakeData.API_PATH = window.location.protocol + `//${fakeData.IS_LOCAL_HOST ? "localhost:8080" : fakeData.DB_DOMAIN}/impactapinew/`;
    fakeData.API_UAT_PATH = window.location.protocol + `//impactonlinebackend-uat.newgen.co/impactapinew/`;
    fakeData.API_LIVE_PATH = window.location.protocol + `//impactonlinebackend.newgen.co/impactapinew/`;
    fakeData.DOMAIN_ROOT = window.location.origin + `/${fakeData.IS_LOCAL_HOST ? (window.location.pathname.split("/")[1].concat("/")) : ""}`;
    fakeData.BUCKET_URL = window.location.protocol + `//${fakeData.IS_LOCAL_HOST ? "localhost/xmleditor" : fakeData.DB_DOMAIN + "/IMPACT"}/`;
    fakeData.API_LINK_SHARE = fakeData.API_PATH + "linksharing";
    fakeData.API_URL_VALIDITY = fakeData.API_PATH + "urlvalidity";
    fakeData.API_UPDATE_INSERT = fakeData.API_PATH + "updateorinsert";
    fakeData.API_GET_USERS = fakeData.API_PATH + "getusers";
    fakeData.API_GET_DOCS = fakeData.API_PATH + "getdocs";
    fakeData.API_GET_DOCS_AUTH = fakeData.API_PATH + "getdocsauth";
    fakeData.API_GET_ADMINDOCS = fakeData.API_PATH + "getadmindocs";
    fakeData.API_UPDATE_USERS = fakeData.API_PATH + "updateuser";
    fakeData.API_FILE_DOWNLOAD = fakeData.API_PATH + "filedownload";
    fakeData.API_FIND_UPDATE_INSERT = fakeData.API_PATH + "findupdateorinsert";
    fakeData.API_DEL_RECORD = fakeData.API_PATH + "deletedoc";
    fakeData.API_FORM_TO_FILE_FIELD = fakeData.API_PATH + "formfieldtofile";
    fakeData.API_SHARE_INVITE = fakeData.API_PATH + "shareandinvite";
    fakeData.API_GENERIC_SEND_MAIL = fakeData.API_PATH + "genericsendemail";
    fakeData.API_KAFKA_PROD = fakeData.API_PATH + "kafkaproducer";
    fakeData.API_PUBKIT_CLSE_TASK = fakeData.API_PATH + "pukitapiclosetask";
    fakeData.API_UPLOAD_SINGLE = fakeData.API_PATH + "filesupload";
    fakeData.API_UPLOAD_MULTI = fakeData.API_PATH + "filesuploadmultiple";
    fakeData.API_ZIP_DOWNLOAD = fakeData.API_PATH + "zipfileswithdiranddownload";
    fakeData.API_ZIP_DOWNLOAD_RECURSIVE = fakeData.API_PATH + "zipfolderwithrecursively";
    fakeData.API_BATCH_CONVERT = fakeData.API_PATH + "batchfileexcuteprocess";
    fakeData.API_CK_RESTORE = fakeData.API_PATH + "ckrestore";
    fakeData.MY_TOPIC = (fakeData.IS_LOCAL_HOST ? "XMLTOPDFLIVENEW4" : "IMPACTLIVETOPIC");
    fakeData.API_URL_VALIDATION = fakeData.API_PATH + "urlvalidation";
    fakeData.API_FILE_VALIDATION = fakeData.API_PATH + "fileorfoldercheck";
    fakeData.API_FILE_APPEND = fakeData.API_PATH + "fileappendcontent";
    fakeData.API_FILE_CROSSREF_API = fakeData.API_PATH + "onlinecrossrefplaintext";
    fakeData.API_PUBKIT_STATUS = fakeData.API_PATH + "pubkitapistatus";
    fakeData.API_PUBKIT_CLOSE = fakeData.API_PATH + "pubkitapistatusclose";
    fakeData.API_CHATBOT_AI = fakeData.API_PATH + "chatbotai";
    fakeData.SHOW_DOC_TYPE = {
        JATS: "Article Title",
        BITS: "Chapter Title"
    };
    fakeData.SHOW_DOC_TITLE = {
        JATS: "Journal Title",
        BITS: "Book Title"
    };
    fakeData.CONVERSION_PORT = {
        "impact-d.web.app": fakeData.API_BATCH_CONVERT,
        "impact-d.firebaseapp.com": fakeData.API_BATCH_CONVERT,
        "default": fakeData.API_BATCH_CONVERT
    };
    fakeData.LOCAL_CONNECT_SERVER = {
        "LOCAL": 'localhost:8080',
        "BUCKET_URL": "http://localhost/xmleditor/",
        "SERVER": fakeData.SERVER_DB_LIST.default
    };
    fakeData.LINK_STATUS_ALRET = ["signoff", "deactive"];
}
export default fakeData