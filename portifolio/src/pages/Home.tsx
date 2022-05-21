import './Home.styles.css'
import logo from '../img/iconleo.png'
import { Header } from './Header'



export function Home() {
    return (
        <div className='home_container'>
            <img style={{
                width: '200px'
            }} src={logo} alt="logo" />
            <h1>Leonardo Henrique</h1>
           <h6 style={{
               color: 'white'
           }}>Desenvolvedor web-estudante</h6>
        <div>
      <Header />
        </div>
        </div>
        
    )
}