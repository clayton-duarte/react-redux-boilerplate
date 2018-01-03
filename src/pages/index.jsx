//imports
import { bindActionCreators } from "redux";
import React, { Component } from 'React';
import { connect } from "react-redux";
import {} from '../components';

//exports
export class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {} // lembre que alguns componentes são stateless
    }

    // lifecycle (na ordem correta) e outros métodos

    render() {
        return null;
    }
}

//conect
function mapStateToProps({/* reducer */}) {
    return {/* reducer */}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({/* actions */}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
