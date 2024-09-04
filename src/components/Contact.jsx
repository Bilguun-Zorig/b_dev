import styles from '../assets/css/ExperienceStyles.module.css'

const Contact = () => {
  return (
    <section className={`row ${styles.experience}`} id='contact'>
        <h1 className="title">Contact Me</h1>
        <div className={`col-10 card border-dark my-3 py-3 ${styles.border}`} id='exp-card'>
            <div className="d-flex justify-content-evenly">
                <p>
                    <a href="mailto:example@gmail.com" style={{ fontSize: '30px', marginRight: '10px', color: 'black'}} className='' target='_blank'>
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                    <span id={`${styles.email_address}`}>
                        example@gmail.com
                    </span>
                </p>
                <p>
                    <a href="https://www.linkedin.com/in/#/" style={{ fontSize: '30px' , color: 'black'}} target='_blank'>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                </p>
                <p>
                    <a href="https://github.com/#" style={{ fontSize: '30px', color: 'black' }} target='_blank'>
                        <i className="fa-brands fa-github"></i>
                    </a>
                </p>
                <p>
                    <a href="https://www.instagram.com/#/" style={{ fontSize: '30px', color: 'black' }} target='_blank'>
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </p>
                <p>
                    <a href="https://www.facebook.com/#" style={{ fontSize: '30px', color: 'black' }} target='_blank'>
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                </p>
                <p>
                    <a href="https://www.youtube.com/#" style={{ fontSize: '30px', color: 'black' }} target='_blank'>
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </p>
                <p>
                    <a href="https://www.tiktok.com/#" style={{ fontSize: '30px', color: 'black' }} target='_blank'>
                        <i className="fa-brands fa-tiktok"></i>
                    </a>
                </p>
            </div>
        </div>

    </section>
  );
};

export default Contact;
