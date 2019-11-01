import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../store";

class Home extends React.Component {
    componentDidMount() {
        if (this.props.list.length <= 0) {
            this.props.fetchData();
        }
    }

    render() {
        const { list } = this.props;
        return (
            <div className="wrapper">
                <h2>React 16 new features</h2>
                <ul>
                    {
                        list.map(item => (
                            <li key={item}> {item} </li>
                        ))
                    }
                </ul>
            </div>
       );
    }
}
Home.serverFetch = fetchData;

const mapStateToProps = (state) => ({
    list: state.data,
});

const mapDispatchToProps = {
    fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
