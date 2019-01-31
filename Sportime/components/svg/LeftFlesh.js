import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

// SVGR has dropped some elements not supported by react-native-svg: title
const LeftFlesh = props => (
    <View>
        <Svg fill="#ffffff" viewBox="0 0 40 32" width="25" height="25" {...props}>
            <Path d='M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554 c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587 c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z'
                fill='#FFF' />
        </Svg>
    </View>
);
export default LeftFlesh;

