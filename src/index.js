import React from 'react';
import { createRoot } from 'react-dom/client';

const EcommerceApp = (props) => {
    return (
        <div>
            <h1>Hello World from React boilerplate</h1>
        </div>
    );
}
const root = createRoot(document.getElementById('root'));
root.render(<EcommerceApp/>);