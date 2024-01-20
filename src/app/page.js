import Image from "next/image";
import styles from "./page.module.css";
import LoginForm from "./components/Loginfrom";
import Footer from "./components/Footer";
import "ag-grid-community/styles/ag-grid.css"; // Core CSS


export default function Login() {
  return (
    <>   
      <LoginForm />
      <Footer /> 
    </>
  );
}
