
import ReactDOM from 'react-dom/client';
import './index.css';

const ctx = ReactDOM.createRoot(
    document.getElementById('ctx') as HTMLElement
);

export function Contacts()
{
    return(
        <div className = "Contacts">
            <header className="Contact Info">
                stuff
            </header>
        Hello!
        </div>
    );
}

ctx.render(
        <Contacts />
);

export default Contacts;