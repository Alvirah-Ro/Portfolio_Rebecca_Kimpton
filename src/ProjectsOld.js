import Schuyler from './Schuyler.jpeg';
import PollsHomePage from './PollsHomePage.jpg';
import Polls from './Polls';


export default function Projects() {
    return (
        <div style={{ backgroundColor: '#EEEEEE' }}>
                <div className="container">
                    <div className="row column">
                        <div className="border border-dark shadow text-center my-5 py-5" id="project">
                            <h1>Polls App</h1>
                            <p>Polls is a Django app that allows users to view and vote on various fun questions.</p>
                            <img className="object-fit-contain shadow-sm mt-n5" src={PollsHomePage} alt="Home Page of Polls App" />
                        </div>
                    </div>
                </div>
                <div className="row column-gap-3 mt-5">
                    <div className="col p-3" style={{ backgroundColor: '#fc6c85' }}>
                        <img className="img-fluid" src={Schuyler} alt="project photo" />
                        <h4>Project Name</h4>
                        <p>Project brief description</p>
                    </div>
                </div>
                <div className="row column-gap-3 mt-3 mb-5">
                    <div className="col p-3" style={{ backgroundColor: '#ffd1dc' }}>
                        <img className="img-fluid" src={Schuyler} alt="project photo" />
                        <h4>Project Name</h4>
                        <p>Project brief description</p>
                    </div>
                    <div className="col p-3" style={{ backgroundColor: '#e75480' }}>
                        <img className="img-fluid" src={Schuyler} alt="project photo" />
                        <h4>Project Name</h4>
                        <p>Project brief description</p>
                    </div>
                    {/* </div> */}
                </div>
                <h5>Git Hub link:</h5><a href="https://github.com/Alvirah-Ro">https://github.com/Alvirah-Ro</a>
        </div >
    )
}