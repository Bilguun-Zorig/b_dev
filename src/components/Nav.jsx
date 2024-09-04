import styles from '../assets/css/NavStyles.module.css';

const Nav = () => {


    return (
        <section>
            <nav className={`row ${styles.profileContainer}`} id='desktop-nav'>
                <div className="col-3">
                    <h5>Bilguun Zorigtbaatar</h5>
                </div>
                <div className="col-9">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </section>
    );
};

export default Nav;
