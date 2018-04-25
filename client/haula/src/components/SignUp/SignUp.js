import React from 'react';
import './SignUp.css'
import { ControlLabel } from 'react-bootstrap';


class SignUp extends React.Component {
	render() {
		return(
			<div className="container">
			<h1>This is your Sign Up!</h1>

			<body data-gr-c-s-loaded="true">
			<form class="form-signin" id="signup" name="signup" method="post" action="/signup">
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
							name="firstname"
					/>
				</div>
				</p>
				<ControlLabel>Last Name</ControlLabel>
				<p><div className="form-label-group">
					<input 	type="text"
							id="inputLastName"
							class="form-control"
							placeholder="Last Name"
							require=""
							autofocus=""
							name="lastname"
					/>
				</div>
				</p>
				<p>
				<ControlLabel>Email Address</ControlLabel>
				<div className="form-label-group">
					<input  type="email"
							id="inputEmail" 
							class="form-control" 
							placeholder="Email Address"
							require=""
							autofocus=""
							name="email"
							required=""
					/>
				</div>
				</p>
				<p>
				<ControlLabel>Password</ControlLabel>
				<div className="form-label-group">
					<input  type="password" 
							id="inputPassword" 
							class="form-control" 
							placeholder="Password" 
							required=""
					/>
				</div>
				</p>


				<div class="checkbox mb-3">
					<label>
						<input type="checkbox" value="remember-me"/> Remember me
					</label>
				</div>

				<input class="btn" type="submit" value="Sign Up" onclick="validate()" />
			
			</form>
		</body>
		</div>
		)
	}
}

export default SignUp;