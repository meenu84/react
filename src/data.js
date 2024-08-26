import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const Examples = {
  components:{

    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
      'components are the building blocks of react applications. a components',
      code:
      function welcome() {
        return <h1>hello world!</h1>;
  },
     }
    jsx: { 
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
      code:
      function welcome(){
        return <h2>hello world!</h2>; 
      }
  },
  {
    props:{
    title: 'Props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
      code: 
      function welcome(){
        return<h3>hello world!!</h3>;
      }
  },
  {
    State
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
      code:
      function welcome(){

        return <h4>hello world!!</h4>;
      }
  };

