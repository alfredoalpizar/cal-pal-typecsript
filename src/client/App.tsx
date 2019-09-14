import * as React from 'react';

const App: React.FC = () => {
    const [value, setValue] = React.useState<string>('');

    return (
        <div>
            <h1>{'HELLO WORLD'}</h1>
            <p>{value}</p>
            <input value={value} onChange={(e: { target: { value: string; }; })=>setValue(e.target.value)}/>
        </div>
    )

};

export default App
