/*
Within the App/App.js file:

    Create a function named mapStateToProps. This should connect the uiReducer you created and the property isLoggedIn that your component is already using
    Import connect from Redux, and connect the mapStateToProps to the component

*/

function App() {
    return (
        <div>
            <h1>Dashboard</h1>
            <p>{isLoggedIn ? 'You are logged in' : 'You are not logged in'}</p>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        isLoggedIn: state.ui.isLoggedIn
    };
}
export default connect(mapStateToProps)(App);