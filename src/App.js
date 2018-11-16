import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
 // import logo from './logo.svg';
import user from './user_no_image.png';
import logo from './logo_netmatrix.png';
import './App.css';
import 'react/'
// const divStyle = {
//     background: 'blue',
// };
class App extends Component {

    render() {
        return (
            <div className="col-sm-12 App-align">
                <div className="row test">
                    <nav className="navbar ">
                        <div >
                            <img src={logo} id="picture" className="img-responsive"
                                 />
                        </div>
                        <button className="btn btn-primary float-right searchBtn" value="search all Jobs">search all Jobs</button>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-1" >

                    </div>
                    <div className="col-sm-12 col-md-3  pictureDiv">
                        <div className="profile-sidebar-portlet">
                            <div className="profile-userpic picture">
                                <img src={user} id="picture" className="img-responsive"
                                     alt="Profile Pic"/>
                            </div>
                            <div className="picName">
                            <strong ><span>Profile Pic</span></strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-1" ></div>
                <div className="col-sm-12 col-md-7 float-right portlet-body respo">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="App-banner">
                                <h2>profile</h2>
                            </div>
                            <div>
                                <div className="col-sm-6 nameDiv" style={{marginBottom: "20px"}}>
                                    <strong><u><span>Sadik Basha</span></u></strong>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <span>9642654460</span>
                                    </div>
                                    <div className="col-md-6 ">
                                        <span>shaiksadikbasha03@gmail.com</span>
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="col-lg-6">
                                        <span>Resume </span>
                                    </div>
                                    <div className="col-lg-4">
                                        <span>H1Visa</span>
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="col-lg-6">
                                        <span>Hyderabad </span>
                                    </div>
                                    <div className="col-lg-4">
                                        <span>Open to Relocate Anywhere:Yes</span>
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="col-lg-6">
                                        <span>Contract-to-hire,contract </span>
                                    </div>
                                    <div className="col-lg-4">
                                        <span>Currently in Market</span>
                                    </div>
                                </div>
                                <div style={{marginLeft: "-14px"}}>
                                    <hr></hr>
                                </div>
                                <div className="col-lg-4" style={{marginLeft: "-13px"}}>
                                    <strong><u><span>Expected Rate/Salary</span></u></strong>
                                </div>
                                <div className="col-lg-12">
                                    <div className="row">
                                    <div className="col-sm-3">
                                        <strong><span>Full-time (/Yr):</span></strong>
                                    </div>
                                    <div className="col-sm-3">
                                        <span>500000</span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

            </div>
        );
    }
}

export default App;
