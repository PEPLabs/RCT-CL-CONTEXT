import React, { useContext, useEffect, useState } from 'react';
import { demoContext } from './demo-context-provider-component';


interface MyProps {
}


const DemoConsumerOneComponent: React.FC<MyProps> = (props: MyProps) => {

    //Getting access to the context provider in this component so it can be consumed
    const demoContextReference = useContext(demoContext);

    return (
        <React.Fragment>
            <h4>Demo Consumer One Component</h4>

            {/* Here is an example of you consume the context once you have access to it. */}

            <p>Notice how the context provider's data is available to a child, grandchild, or descendent component without having to pass props down the family line.</p>
            <p>The data from our context provider that is now in CONSUMER ONE is: {demoContextReference.contextNum}</p>

        </React.Fragment>
    );
}

export default DemoConsumerOneComponent;