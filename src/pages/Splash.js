import React, { PureComponent } from 'react';
import background from "public/gallery/mainImages/Fharuul.png";
import PropTypes from 'prop-types';

function Background() {
    // Import result is the URL of your image
    return <img src={background} alt="bg" />;
  }
 
class Splash extends PureComponent {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}
 
Splash.propTypes = {

};

export default Splash;