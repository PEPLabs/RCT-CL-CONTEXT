import React, { useContext, useEffect, useState } from 'react';
import { demoContext } from './demo-context-provider-component';


interface MyProps {
}


const DemoConsumerTwoComponent: React.FC<MyProps> = (props: MyProps) => {

    //Getting access to the context provider in this component so it can be consumed
    const demoContextReference = useContext(demoContext);

    return (
        <React.Fragment>
            <h4>Demo Consumer Two Component</h4>

            {/* Here is an example of you consume the context once you have access to it. */}

            <p>So NOW instead of pass props along to multiple family components and trying to keep all the data in sync accross multiple locations...the data is housed in one place.</p>
            <p>If you decide you want to change the value of the context provider's data from the child, well, we can use the concept of "lifting state" to have a child component talk to a parent component..</p>
            <p>The data from our context provider that is now in CONSUMER TWO is: {demoContextReference.contextNum}</p>

        </React.Fragment>
    );
}

export default DemoConsumerTwoComponent;