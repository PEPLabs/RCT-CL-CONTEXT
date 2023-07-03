import React, { useContext} from 'react';


interface MyProps {
}


const TodoConsumerComponent: React.FC<MyProps> = (props: MyProps) => {

    //Getting access to the context provider in this component so it can be consumed
    //TODO: gain access to the context provider, and name it "todoContextReference"
    //CODE HERE

    return (
        <React.Fragment>
            <h4>Todo Consumer Component</h4>

            <p>TODO: replace "ALTERTHISTEXT" with the proper syntax that will display the "Surprise!" data from the context provider.</p>
            {/* CODE HERE */}
            <p>From the child, we see the data from our context provider is: ALTERTHISTEXT</p>

        </React.Fragment>
    );
}

export default TodoConsumerComponent;