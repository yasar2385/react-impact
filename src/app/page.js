
import Image from 'next/image'
import styles from './page.module.css'
// import Loginfrom from './components/Loginfrom'
import LoginForm from './components/Loginfrom'

export default function Login() {
  return (
    <main className={styles.main}>
      <h1 className='text-center'>Sign In</h1>
      <div className="align-self-center">        
        <LoginForm />
      </div>
    </main>
  )
}
