import "../Navbar/header.css"

const Header = () => {
     return <div className="Navbar">
        <div className="Navlogo">
            <div>
            <img src="./images/Leap.png" alt="" />
            <img src="./images/Rectangle 114.png" alt="" />
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