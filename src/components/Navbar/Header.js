import "../Navbar/header.css"

const Header = () => {
     return <div className="Navbar">
        <div className="Navlogo">
            <div className="logo">
            <img className="Logo2" src="./images/Leap.png" alt="" />
            <div className="back">
                <img src="./images/Vector (4).png" alt="" />
               Hire me
            </div>
            </div>
      
            <ul className="Menu">
                <li>PORTFOLO</li>
                <li>BLOG</li>
                <li>STORE</li>
                <li>Freelance</li>
                <li>ABOUT ME</li>
                <li>CONTACT</li>
            </ul>
            
        </div>
     </div>;
};
export default Header