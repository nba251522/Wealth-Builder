import React, { Component } from 'react';


class Footer extends Component {
    render() {
        const Aaron = "https://github.com/aaront080";
        const Christina = "https://github.com/Clarsen1782";
        const Ryan = "https://github.com/stellyes/stellyes.git";
        const Steven = "https://github.com/Apixa25";
        const Thomas = "https://github.com/nba251522";

        return (
            <footer className="bg-dark text-light py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Collaborators</h3>
                            <ul className="list-unstyled">
                            <li><a href={Aaron} target="_blank" rel="noopener noreferrer">Aaron Torres</a></li>
                            <li><a href={Christina} target="_blank" rel="noopener noreferrer">Christina Larsen</a></li>
                                <li><a href={Ryan} target="_blank" rel="noopener noreferrer">Ryan England</a></li>
                                <li><a href={Steven} target="_blank" rel="noopener noreferrer">Steven Sills II</a></li>
                                <li><a href={Thomas} target="_blank" rel="noopener noreferrer">Thomas Er</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="list-unstyled">
                                <li>&copy; 2023 ACRST All rights reserved.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;