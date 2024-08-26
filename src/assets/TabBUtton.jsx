export default function TabBUtton({children,onSelect}) {
    console.log('APP COMPONENT EXECUTING');
    return(
    <li>
        <button onClick={onSelect}>{children}</button>
        </li> 
        );
    }
