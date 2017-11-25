import React, {Component} from "react";
import Btn from "../../components/Btn";
import NavBar from "../../components/NavBar";
import NewGameForm from "../../components/NewGame";
import PageHeader from "../../components/PageHead";
import {Row, Col, Input, Button} from "react-materialize";



class NewGame extends Component {
	state={
		players:[],
		fullName: ""
	}


// getPlayers = (event) => {
// 	event.preventDefault();
// 	API.
// }


	render(){
		return(

			<div>
				<NavBar />
				<PageHeader />

							<div className="row">
								<div className="col s10 push-s1">
									  <div className="card medium z-depth-3">

								    <form className="col s12">

								    	<div className="row"> 
								    		<div className="col s3 push-s2">
								    			<h5 id="opposingHeader">OPPOSING TEAM</h5>
								    		</div>
								    		<div className="col s3 push-s4">
								    			<h5 id="finalHeader" className="right">FINAL SCORE</h5>
								    		</div>
								    	</div>

								      <div className="row">
								        <div className="input-field col s5 push-s1">
								          <input id="opp_name" type="text" className="validate"></input>
								          <label for="opp_name">Opposing Team Name</label>
								        </div>
												
								        <div className="input-field col s2 push-s2">
								          <input id="your_fin_score" type="text" className="validate"></input>
								          <label for="your_fin_score">Your Score</label>
												</div>
												
												<div className="input-field col s2 push-s2">
								          <input id="opp_fin_score" type="text" className="validate"></input>
								          <label for="opp_fin_score">Their Score</label>
								        </div>
								      </div>
											
											<br></br>
											<br></br>

											<div className="row">
												<div className="col s4 push-s4">
													<h5 className="center">PARTICIPATING PLAYERS</h5>
												</div>
											</div>
								      <div className="row">
											  <div className="input-field col s4 push-s4">
													<Input multiple s={12} type='select' label="Materialize Select" defaultValue=''>
														{/* <option value="" disabled selected>Select all particpating players</option>*/}
														{/* <option value='2'>Option 2</option>*/}
														{this.state.play}
													</Input>	  	
											  </div>
								      </div>

								    </form>
								  </div>
								  <Row>
								  	<div class="col s12 offset-s8">
								  		<Button>
								  			Add Game
								  		</Button>
								  		<Button>
								  			Cancel
								  		</Button>
								  	</div>
								  </Row>
						  	</div>
						  </div>
			</div>

		)
	}
}


export default NewGame;