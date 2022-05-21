import './Header.style.css'
import foto from '../img/foto9.jpg'
export function Header() {
    return ( <header className="header">
       <div className='sobre-mim'>
           <h1><a href='#'>So</a>bre mim</h1>
           <img className='foto-sobre' src={foto} alt="foto" />
           <div style={{
               marginTop: '50px'
           }}>
               <p style={{
                   marginLeft: '0',
                   fontSize: '1em'
               }}>Olá, me chamo Leonardo atualmente tenho 15 anos sou de uma cidade que fica no interior de São Paulo <br /> comecei a estudar programação e tenho conhecimento básico nas linguagens HTML5, CSS3 e JavaScript <br /> des de pequeno sempre gostei da área da tecnologia e hj em dia estou tentando construir meu futuro com ela. </p>
           </div>
          
       </div>
      
    </header>
    )
}