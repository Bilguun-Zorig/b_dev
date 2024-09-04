import styles from '../assets/css/SkillSetStyles.module.css'
import cucumberLogo from '../images/cucumberLogo.png'
import htmlLogo from '../images/htmllogo.png'
import github from '../images/githublogo.png'
import gitLogo from '../images/gitlogo.png'
import javaLogo from '../images/java.png'
import jenkinsLogo from '../images/jenkinsLogo.png'
import jUnit from '../images/junitLogo.png'
import maven from '../images/maveLogo.png'
import postman from '../images/postman.png'
import selenium from '../images/seleniumLogo.png'
import testng from '../images/testngLogo.png'
import checkMarkIconLight from '../images/checkmark-light.svg'
import SkillList from '../assets/context/SkillList'

const SkillSet = () => {
  return (
    <section className='row'>
    <h2 style={{ textAlign: 'center', marginBottom: '25px'}}>Technologies I've worked with</h2>
    <div className={`col-12  ${styles.technologiesImg}`}>
        <img src={cucumberLogo} alt="Cucumber Testing tool" />
        <img src={htmlLogo} alt="HTML logo" />
        <img src={github} alt="GitHub" />
        <img src={gitLogo} alt="Git" />
        <img src={javaLogo} alt="Java" />
        <img src={jenkinsLogo} alt="Jenkins" />
        <img src={jUnit} alt="Jenkins" />
        <img src={maven} alt="Maven" />
        <img src={postman} alt="Postman" />
        <img src={selenium} alt="Selenium Webdriver" />
        <img src={testng} alt="Maven" />
    </div>
    <div className={`col-12  ${styles.skillsContainer}`}>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIconLight} skill="Sybase" />
            <SkillList src={checkMarkIconLight} skill="Oracle" />
            <SkillList src={checkMarkIconLight} skill="MySQL" />
            <SkillList src={checkMarkIconLight} skill="SQL Server" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIconLight} skill="POM" />
            <SkillList src={checkMarkIconLight} skill="Key Driven" />
            <SkillList src={checkMarkIconLight} skill="Data Driven" />
            <SkillList src={checkMarkIconLight} skill="Hybrid Framework" />
            <SkillList src={checkMarkIconLight} skill="Quantum Framework" />
        </div>
    </div>

</section>
  )
}

export default SkillSet