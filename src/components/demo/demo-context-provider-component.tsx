import React, { useState } from 'react';
import DemoConsumerOneComponent from './demo-consumer-one-component';
import DemoConsumerTwoComponent from './demo-consumer-two-component';


///CONTEXT DEMO
interface MyContextStructure {
    contextNum: number
}

/*Here we are creating context to be used later. We use diamond brackets to give the context a datatype; the datatype could
be something as simple as a number or a string, or it could be an entire interface. Also, in the parenthesis we need
to provide default value(s) for the context's data.
*/
export const demoContext = React.createContext<MyContextStructure>({ contextNum: 0 });


///COMPONENT DEMO
interface MyProps {
}


const DemoContextProviderComponent: React.FC<MyProps> = (props: MyProps) => {

    //Creating some state for the component
    const [demoNumberState, setDemoNumberState] = useState(0);

    return (
        <React.Fragment>
            <h4>Demo Context Provider Component</h4>

            {/* Here we are creating a way to change the state of the context so we can see if the changes cascade into the children components. */}
            <button onClick={() => { setDemoNumberState(demoNumberState - 1) }}>Minus 1 to number state</button>
            <button onClick={() => { setDemoNumberState(demoNumberState + 1) }}>Add 1 to number state</button>
            <p>From the parent, the provider's data is currently: {demoNumberState}</p>


            {/* In order to utilize the context in children/grandchildren/etc components, we need to wrap them in a context provider tag and give a value attribute that represents
            WHICH variable(s) will be passed down the lineage. */}
            <demoContext.Provider value={{ contextNum: demoNumberState }}>

                <div className="section-container">
                    <DemoConsumerOneComponent></DemoConsumerOneComponent>
                </div>

                <div className="section-container">
                    <DemoConsumerTwoComponent></DemoConsumerTwoComponent>
                </div>

            </demoContext.Provider>

        </React.Fragment>
    );
}

export default DemoContextProviderComponent;