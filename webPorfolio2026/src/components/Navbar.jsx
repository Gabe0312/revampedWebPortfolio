export default function Navbar() {
    return (
    <nav className="navbar">
        <div className="nav-brand">
            <img src={`${import.meta.env.BASE_URL}favicon.svg?v=2`} alt="" className="nav-brand-icon" />
            <h2>Gabriel Rodriguez</h2>
            </div>
            
            <ul className="nav-links">
                <li><a href="#skills">Skills</a></li>
                <li><a href="#certifications">Certifications</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
        </nav>
    );
}
