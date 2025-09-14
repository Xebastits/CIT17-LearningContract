import './App.css';

function App() {
  return (
    <div className="App">
      <div class="blob-outer-container">
        <div class="blob-inner-container">
            <div class="blob"></div>
        </div>
    </div>
      <div className='Header'>
      <h1>Hello, I am Xebastiane Pitogo!</h1>
      <p>I am a 3rd year IT student at the University of the Cordilleras currently pursuing Web Development.</p>
      <p>
        Below is my learning contract for containing my
        <strong> Motivations, Expectations, Contributions, and Hindrances </strong>
        of the Web Information System course.
      </p>
      </div>
      <div className='Table-div'>
        <table className='Table'>
          <tr>
            <th>Motivations</th>
            <th>Expectations</th>
          </tr>
          <tr>
            {/* Motivations*/}
            <td>
              <ul>
                <li>To make full fledged app.</li>
                <li>To make systems that solves real problems.</li>
                <li>To pass and have actual knowledge to be utilized in the following semesters.</li>
                <li>To learn foundations Web Information Systems.</li>
                <li>To get Internship aligned with my goals after the next semester.</li>
              </ul>
            </td>
            {/* Expectation*/}
            <td>
              <ul>
                <li>To learn basics of Web Informaiton Systems.</li>
                <li>To learn different frameworks and libraries in Web Development.</li>
                <li>To Get along with my classmates.</li>
                <li>To learn from professors advices and tips.</li>
                <li>To get career-related opportunities.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>Contributions</th>
            <th>Hindrances</th>
          </tr>
          <tr>
            {/* Contribution*/}
            <td>
              <ul>
                <li>Assign a strict study programming schedule.</li>
                <li>Research more of the technologies stated in the course.</li>
                <li>Learn more about systems and architecture designs.</li>
                <li>Talk with professors if aid is needed or get in touch with activities.</li>
                <li>Be punctual and actively participate inside the class.</li>
              </ul>
            </td>
            {/* Hindrances*/}
            <td>
              <ul>
                <li>Not being punctual on time.</li>
                <li>Not being determined to learn more about the course</li>
                <li>Other academic burdens.</li>
                <li>Off campus problems and chores.</li>
                <li>Being slower than average to learn fully.</li>
              </ul>
            </td>
          </tr>
        </table>
        </div>
    </div>
  );
}

export default App;
