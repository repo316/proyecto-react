import userSession from "../../hooks/userSession.jsx";

const Dashboard = () => {
    const {data,isLoggedIn} = userSession();

    return (
        <>
            <h1>Dashboard</h1>
        </>
    );
};

export default Dashboard;