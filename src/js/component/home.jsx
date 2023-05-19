import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'




//create your first component
const Home = (props) => {
	return (
		<div className="box row container-sm m-5">
			<div className="row m-2 p-5">

  				<div className="col">
    				<div className="card h-100">
      					<div className="card-body">
							<p className="card-text display-1">
							<FontAwesomeIcon icon={faClock} />
							</p>
      					</div>
    				</div>
  				</div>
  				<div className="col">
					<div className="card h-100">
						<div className="card-body">	
							<p className="card-text display-1">{props.digitSix % 10}</p>
						</div>
					</div>
  				</div>
				<div className="col">
					<div className="card h-100">
						<div className="card-body">
							<p className="timer5 card-text display-1">{props.digitFive % 10}</p>
						</div>
					</div>
				</div>

				<div className="col">
    				<div className="card h-100">
      					<div className="card-body">
        					<p className="timer4 card-text display-1">{props.digitFour % 10}</p>
      					</div>
    				</div>
  				</div>

  				<div className="col">
					<div className="card h-100">
						<div className="card-body">
							<p className="timer3 card-text display-1">{props.digitThree % 10}</p>
						</div>
					</div>
  				</div>

				<div className="col">
					<div className="card h-100">
						<div className="card-body">
							<p className="timer2 card-text display-1">{props.digitTwo % 10}</p>
						</div>
					</div>
				</div>

				<div className="col">
    				<div className="card h-100">
      					<div className="card-body">
							
        					<p className=" timer1 card-text display-1">{props.digitOne % 10}</p>
      					</div>
    				</div>
  				</div>
			</div>
		</div>
	);
};

export default Home;
