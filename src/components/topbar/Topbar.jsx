

const Topbar = ({user}) => {
    return (
        <div className="mainTopbar">
            <span>Bonjour, {user}! Qu'allons nous faire aujourd'hui?</span>
        </div>
    );
};

export default Topbar;