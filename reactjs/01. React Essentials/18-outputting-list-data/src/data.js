import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
    {
        image: componentsImg, 
        title: 'Components', 
        description: `The core UI building block - compose the user interface by combining multiple components`, 
    }, 

    {
        image: jsxImg, 
        title: 'JSX', 
        description: `Return (potentially dynamic) HTML (ish) code to define the actual markup that will be rendered`, 
    }, 

    {
        image: propsImg, 
        title: 'Props', 
        description: `Make components configurable (and therefore reusable) by passing input date to time`, 
    }, 


    {
        image: componentsImg, 
        title: 'Components', 
        description: `The core UI building block - compose the user interface by combining multiple components`, 
    }, 

    {
        image: jsxImg, 
        title: 'JSX', 
        description: `Return (potentially dynamic) HTML (ish) code to define the actual markup that will be rendered`, 
    }, 

    {
        image: stateImg, 
        title: 'State', 
        description: `React-managed data which, when changed, causes the component to re-render and the UI to update`, 
    }, 
];


export const EXAMPLES = {
    components: {
        title: 'Components', 
        description: 'Components are the Building Blocks of React Applications. A Component is a Self-Contained Module (HTML + Optional CSS + JS) that Renders some control', 
        code: `
            function Welcome() {
                return <h1>Hello Guest User!!</h1>
            }
        `, 
    }, 
    jsx: {
        title: 'JSX', 
        description: 'JSX is a Syntax Extension to JavaScript. It is similar to a Template Language, but it has Full Power of JavaScript (eg., It may Output Dynamic Content)', 
        code: `
            <div>
                <h1>Welcome Guest User!</h1>
                <p>It's Time to Understand about JSX!</p>
            </div>
        `
    }, 
    props: {
        title: 'Props', 
        description: 'Components accepr Arbitrary Inputs called Props. They are like Function Arguments.', 
        code: `
            function Welcome(props) {
                return <h1>Hello {props.name}</h1>
            }
        `
    }, 
    state: {
        title: 'State', 
        description: 'State allows React Components to Change their Output over time in Response to User Actions, Network Responses and anything else', 
        code: `
            function Counter() {
                const [isVisible, setIsVisible] = useState(false);

                function handleClick() {
                    setIsVisible(true);
                }

                return(
                    <div>
                        <button onClick={handleClick}>Show Details</button>
                        {isVisible ? <p>Amazing Details</p> : null}
                    </div>
                )
            }
        `, 
    },
};