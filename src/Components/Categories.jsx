import React from 'react';

const Categories = ({items, onClick}) => {
    const [name, setName] = React.useState(null)
    return (
        <div className="categories">
            <ul>
                <li className={name === null ? 'active' : ''} onClick={() => setName(null)}>Все</li>
                {items && items.map((item, index) => 
                        <li 
                            className={name === index ? 'active' : ''} 
                            onClick={() => setName(index)} 
                            key={`${index}_${new Date().getDate()}`}>
                            {item}
                        </li>)
                }
            </ul>
        </div>
    )
}

export default Categories
