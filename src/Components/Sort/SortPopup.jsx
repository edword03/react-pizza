import React from 'react'

const SortPopup = ({items, setPopup}) => {
    const [activeItem, setActiveItem] = React.useState(0);
    
    const selectItem = (index) => {
        setActiveItem(index);
        setPopup(false);
    }

    return (
        <div className="sort__popup">
            <ul>

                {items.map((item, index) => 
                    <li 
                        className={activeItem === index ? 'active' : ''} 
                        onClick={() => selectItem(index)}
                        key={`${index}_${new Date().getDate()}`}
                    >
                            {item}
                    </li>)}
            </ul>
      </div>
    )
}

export default SortPopup
