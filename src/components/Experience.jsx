import styles from '../assets/css/ExperienceStyles.module.css'


const Experience = () => {
  return (
    <section className={`row ${styles.experience}`} id='experience'>
      <h1>Experience</h1>
      <div className={`col-10 card border-dark mb-5 ${styles.border}`} id='exp-card'>
        <div className="card-header d-flex justify-content-between">
          <h5 className="card-title">Company name</h5>
          <p>March 2024 – Present</p>
        </div>
        <div className="card-body">
          <h5>Test Automation Engineer Lead</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Developed BDD test scripts and scenarios using Cucumber and Gherkin format, with extensive experience in Selenium-based automation frameworks (Data-driven and Hybrid).</li>
            <li className="list-group-item">Proficient in using Selenium WebDriver/IDE/Grid for automation testing of web and client-server applications, with expertise in cross-browser testing and Page Object Model (POM).</li>
            <li className="list-group-item">Implemented automation frameworks and performance testing scripts, utilizing tools like Maven for build management and Jenkins for Continuous Integration.</li>
            <li className="list-group-item">Conducted UI, Functional, Regression, and Smoke testing, mentoring manual testers on BDD approaches and contributing to User Acceptance Testing.</li>
            <li className="list-group-item">Actively participated in Agile methodologies (SCRUM), refining user stories, and collaborating with the development team to enhance project outcomes.</li>
          </ul>
        </div>
      </div>
      <div className={`col-10 card border-dark mb-5 ${styles.border}`} id='exp-card'>
        <div className="card-header d-flex justify-content-between">
          <h5 className="card-title">Company name</h5>
          <p>May 2021 – December 2021 </p>
        </div>
        <div className="card-body">
          <h5>Test Automation Engineer Lead</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Expertise in automation using Selenium WebDriver with Java on TestNG and JUnit, designing and implementing frameworks like Page Object Model, Keyword Driven, Data Driven, and Hybrid frameworks.</li>
            <li className="list-group-item">Proficient in build management tools (Maven/ANT) and continuous integration with Jenkins, maintaining automation code in GitHub, and performing cross-browser testing with TestNG.</li>
            <li className="list-group-item">Developed and maintained automation testing frameworks, including Robot Framework for end-to-end testing and integration with Jenkins for continuous integration, with experience in cloud testing on AWS.</li>
            <li className="list-group-item">Experienced in Agile/SCRUM processes, attending User Story sessions, providing feedback, and collaborating cross-functionally to ensure test coverage and improve acceptance criteria.</li>
            <li className="list-group-item">Strong communication skills, with a proven ability to design, develop, and maintain test automation infrastructure, leveraging tools like JIRA and Helix, and creating custom Python libraries to extend automation capabilities.</li>
          </ul>
        </div>
      </div>
      <div className={`col-10 card border-dark mb-5 ${styles.border}`} id='exp-card'>
        <div className="card-header d-flex justify-content-between">
          <h5 className="card-title">Company name</h5>
          <p>January 2018 – March 2021</p>
        </div>
        <div className="card-body">
          <h5>Senior Software Engineer</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> Designed, developed, and executed Test Strategies, Test Plans, and Test Cases, ensuring thorough coverage and validation of software requirements.</li>
            <li className="list-group-item">Attended User Story sessions and Kanban meetings, providing feedback to improve Acceptance Criteria and Testability, and collaborated closely with development teams.</li>
            <li className="list-group-item">Designed and maintained Web Logic automation testing frameworks utilizing Java, Maven, and Cucumber, and implemented Data Driven and Page Object Model frameworks.</li>
            <li className="list-group-item">Performed cross-browser testing using Selenium WebDriver and conducted Regression testing after every build, utilizing tools like TestNG and Jenkins for Continuous Integration.</li>
            <li className="list-group-item">Developed and executed complex SQL queries for backend testing and validated data integrity in Oracle, SQL Server, and Sybase; experienced in API testing using REST Assured with Java.</li>
            <li className="list-group-item">Actively participated in Agile/SCRUM processes, including Kanban Grooming and Planning, and provided Level of Effort estimates for backlog items.</li>
            <li className="list-group-item">Collaborated with Agile teams in full-stack development, including machine learning, microservices, and cloud-native technologies (AWS, Kubernetes, Serverless).</li>
            <li className="list-group-item">Actively mentored junior testers, led code reviews, and presented at communities of practice, ensuring the integration of best practices in software development and testing.</li>
            <li className="list-group-item">Experienced in ETL testing, data validation, and real-time data processing systems using Hadoop, Apache Spark, Snowflake, and Scala, with strong knowledge in data migration and data quality checks.</li>
            <li className="list-group-item">Consistently monitored testing progress, reported defects promptly, and maintained detailed test documentation, ensuring clear communication with stakeholders and timely resolution of issues.</li>
          </ul>
        </div>
      </div>
      <div className={`col-10 card border-dark mb-5 ${styles.border}`} id='exp-card'>
        <div className="card-header d-flex justify-content-between">
          <h5 className="card-title">Company name</h5>
          <p>June 2017 – December 2017</p>
        </div>
        <div className="card-body">
          <h5>Perfecto Mobile Automation Engineer</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Led the design and development of Quantum Mobile test automation framework from scratch, testing multiple GM mobile applications (myChevrolet, myBuick, myCadillac, myGMC) on Perfecto Cloud Services using Selenium WebDriver, Java, Cucumber, and Maven.</li>
            <li className="list-group-item">Automated Smoke, Functional, and Regression test cases using Selenium WebDriver and Perfecto Driver, implementing descriptive programming, custom functions, and robust exception handling strategies to enhance test efficiency.</li>
            <li className="list-group-item">Actively participated in User Story sessions, Sprint Grooming, and Sprint Planning meetings, providing feedback to improve Acceptance Criteria, Testability, and estimating Level of Effort for Sprint Backlog items.</li>
            <li className="list-group-item">Executed test cases, logged, retested, and closed defects in Jira, utilizing QMetry and Perfecto Reportium for root cause analysis, and prepared detailed test summary reports for each regression cycle.</li>
            <li className="list-group-item">Conducted cross-browser compatibility testing, ad-hoc, and negative testing, ensuring thorough coverage and identification of critical defects not covered in the original requirements.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience