import React from 'react';
import './SignUp.css'
import { ControlLabel } from 'react-bootstrap';


class SignUp extends React.Component {
	render() {
		return(
			<div className="container">
			<h1>This is your Sign Up!</h1>

			<body data-gr-c-s-loaded="true">
			<form class="form-signin">
				{/* <div>
					<img class="mb-4" src="" alt=""/>
					<h1 class="h3 mb-3 font-weight-normal">Floating Labels</h1>
					<p>Build Here </p>
				</div> */}
				<ControlLabel>First Name</ControlLabel>
				<p><div className="form-label-group">
					<input 	type="text"
							id="inputFirstName"
							class="form-control"
							placeholder="First Name"
							require=""
							autofocus=""
					/>
				</div>
				</p>
				<ControlLabel>Email Address</ControlLabel>
				<div className="form-label-group">
					<input  type="email"
							id="inputEmail" 
							class="form-control" 
							placeholder="Email Address"
							require=""
							autofocus=""
					/>
				</div>
				<ControlLabel>Password</ControlLabel>
				<div className="form-label-group">
					<input  type="password" 
							id="inputPassword" 
							class="form-control" 
							placeholder="Password" 
							required=""
					/>
				</div>

				<div class="checkbox mb-3">
					<label>
						<input type="checkbox" value="remember-me"/> Remember me
					</label>
				</div>
			

				<p class="mt-5 mb-3 text-muted text-center">© 2017-2018</p>
			</form>
		</body>
		</div>
		)
	}
}

export default SignUp;