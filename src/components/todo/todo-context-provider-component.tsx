import React, { useState } from 'react';
import TodoConsumerComponent from './todo-consumer-component';


///CONTEXT DEMO
interface MyContextStructure {
    contextString: string
}

/*TODO: create a context named "todoContext" that uses "MyContextStructure" as its datatype and has an initial value of "".
*/
//CODE HERE


///COMPONENT DEMO
interface MyProps {
}


const TodoContextProviderComponent: React.FC<MyProps> = (props: MyProps) => {

    //Creating some state for the component
    const [todoStringState, setTodoStringState] = useState("Surprise!!!");

    return (
        <React.Fragment>
            <h4>Demo Context Provider Component</h4>

            {/* Here we are creating a way to change the state of the context so we can see if the changes cascade into the children components. */}
            <button onClick={() => { setTodoStringState(todoStringState + "!") }}>Add a "!"</button>
            <p>From the parent, the provider's data is currently: {todoStringState}</p>


            {/* TODO: setup the provider.*/}
            <div className="section-container">
                <TodoConsumerComponent></TodoConsumerComponent>
            </div>


        </React.Fragment>
    );
}

export default TodoContextProviderComponent;