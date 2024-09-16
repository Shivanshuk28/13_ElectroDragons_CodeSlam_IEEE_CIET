import { useState } from 'react';

export default function Component() {
    const [menuItems] = useState([
        { name: 'Tuna Roast Source', price: '$24.5' },
        { name: 'Tuna Roast Source', price: '$24.5' },
        { name: 'Tuna Roast Source', price: '$24.5' },
        { name: 'Tuna Roast Source', price: '$24.5' },
        { name: 'Tuna Roast Source', price: '$24.5' },
    ]);

    return (
        <div className="grid">
            <div>
                <img src="src/assets/Layer 91.png" alt="" />
            </div>
        </div>
    );
}