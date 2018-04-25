import React, { Component } from "react";
import API from "../../utils/api";

export class SignUpPage extends Component {

    componentDidMount() {
        this.getMovesInfo();
    }

    getMovesInfo = () => {
        //api call to get data from DB (moves or order information)
        API.signup()
         .then(res => this.setState())
         .catch(err => console.log(err));
    }

    render() {
        return (
            <body data-gr-c-s-loaded="true">
                <form id="signup" name="signup" method="post" action="/api/signup">
                    <label for="email">Email Address</label>
                    <input class="text" name="email" type="email" required/>
                    <label for="firstname">Firstname</label>
                    <input name="firstname" type="text" />
                    <label for="lastname">Lastname</label>
                    <input name="lastname" type="text" />
                    <label for="password">Password</label>
                    <input name="password" type="password" required/>
                    <input class="btn" type="submit" value="Sign Up" onclick="validate()" />
                </form>
    </body>


                // <form class="form-signin">
                //     <div>
                //         <img class="mb-4" src="" alt=""/>
                //         <h1 class="h3 mb-3 font-weight-normal">Floating Labels</h1>
                //         <p>Build Here </p>
                //     </div>

                //     <div className="form-label-group">
                //         <input  type="email"
                //                 id="inputEmail" 
                //                 class="form-control" 
                //                 placeholder="Email Address"
                //                 require=""
                //                 autofocus=""
                //         />
                //         <label for="inputEmail">Email address</label>
                //     </div>

                //     <div className="form-label-group">
                //         <input  type="password" 
                //                 id="inputPassword" 
                //                 class="form-control" 
                //                 placeholder="Password" 
                //                 required=""
                //         />
                //         <label for="inputPassword">Password</label>
                //     </div>

                //     <div class="checkbox mb-3">
                //         <label>
                //             <input type="checkbox" value="remember-me"/> Remember me
                //         </label>
                //     </div>
                

                //     <p class="mt-5 mb-3 text-muted text-center">© 2017-2018</p>
                // </form>
           // </body>
            // <body data-gr-c-s-loaded="true">
            //     <form class="form-signin">
            //     <div class="text-center mb-4">
            //         <img class="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" />
            //         <h1 class="h3 mb-3 font-weight-normal">Floating labels</h1>
            //         <p>Build form controls with floating labels via the <code>:placeholder-shown</code> pseudo-element. <a href="https://caniuse.com/#feat=css-placeholder-shown">Works in latest Chrome, Safari, and Firefox.</a></p>
            //     </div>

                // <div class="form-label-group">
                //     <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
                //     <label for="inputEmail">Email address</label>
                // </div>

                // <div class="form-label-group">
                //     <input type="password" id="inputPassword" class="form-control" placeholder="Password" required=""/>
                //     <label for="inputPassword">Password</label>
                // </div>

                // <div class="checkbox mb-3">
                //     <label>
                //     <input type="checkbox" value="remember-me"/> Remember me
                //     </label>
                // </div>
//                 <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
//                 <p class="mt-5 mb-3 text-muted text-center">© 2017-2018</p>
//                 </form>
//             </body>
// )
        )
}
}