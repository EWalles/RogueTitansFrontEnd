import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import dnd from "./src/pages/DndDisclaimer.js";
class Footer extends PureComponent {
    render() {
        return (
            <div>
                {dnd}
            </div>
        );
    }
}

Footer.propTypes = {

};

export default Footer;