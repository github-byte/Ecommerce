import { createRoot } from 'react-dom/client';
import App from './app';
import '../index.css'

const EcommerceApp = () => {
    return (
        <App/>
    );
}
// console.log("inside indes")
// const docNode = document.getElementById('root') as HTMLElement;
const root = createRoot(document.getElementById('root')!);
root.render(<EcommerceApp/>);