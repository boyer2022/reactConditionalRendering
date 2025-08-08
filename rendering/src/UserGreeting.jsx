// Good practice to use proptypes
import PropTypes from 'type-check';
function UserGreeting(props){

    if(props.isLoggedIn){
        return <h2 className="welcome-message">Welcome {props.userName}</h2>
    }
    else{
        <h2 className="login-prompt">Please log in to continue</h2>
    }
    // optional/faster is to remove else clause with 
    // return <h2 className="login-prompt">Please log in to continue</h2>

    // Another option is the ternary statement
    // line 5: return(props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.username}</h2> : 
    //                                   <h2 className="login-prompt">Please log in to continue</h2>);

    // Another ternary operator:
    // function UserGreeting(props){
    //      const welcomeMessage = <h2 className="welcome-message">
    //                          Welcome {props.username}
    //                        </h2> 
    //      const loginPrompt = <h2 className="login-prompt">
    //                      Please log in to continue
    //                      </h2>
    // return(props.isLoggedIn ? welcomeMessage : logInPrompt);
    // }
    // export default UserGreeting
}
UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting