import React, { useState, useEffect, useRef } from 'react';
import './DynamicMenu.scss';

const DynamicMenu = ({ items }) => {
    const [menuItems, setMenuItems] = useState([]);
    const [moreItems, setMoreItems] = useState([]);
    const [isCompact, setIsCompact] = useState(false);
    const [moreClicked, setMoreClicked] = useState(false); 
    const [selectedItemId, setSelectedItemId] = useState(null);
    const menuRef = useRef(null);

    const handleItemClick = (itemId) => {
        setSelectedItemId(itemId);
    };
    const handleMoreClick = () => {
        setMoreClicked(!moreClicked);
    };
    useEffect(() => {

    const initialVisibleItems = [1,2,3,4,5,6,7];
    const initialMoreItems = [8, 9, 10, 11]; 

  setMenuItems(items.filter(item => initialVisibleItems.includes(item.id)));
  setMoreItems(items.filter(item => initialMoreItems.includes(item.id)));

        const updateMenu = () => {
            const thresholdWidth = 175;
            const currentWidth = window.innerWidth;

            if (currentWidth <= thresholdWidth) {
                setIsCompact(true);
            } else {
                setIsCompact(false);

                const menuItemWidth = 175;

             
                const availableWidth = currentWidth - 175; 

                const visibleItemsCount = Math.floor(availableWidth / menuItemWidth);
                const itemsToShow = items.slice(0, visibleItemsCount);
                const itemsToHide = items.slice(visibleItemsCount);

                setMenuItems(itemsToShow);
                setMoreItems(itemsToHide);
            }
        };

        updateMenu();
  window.addEventListener('resize', updateMenu);
  

  // Cleanup
  return () => {
    window.removeEventListener('resize', updateMenu);
  };
}, [items]);

    if (isCompact) {
        return (
            <nav className="dynamic-menu compact-view">
            <div className="hamburger-menu">
              <img src="/images/logo.jpg" alt="Menu Icon" />
              <span>E-COMM</span>
            </div>
            <div className="search-bar">
              <div className="input-wrapper">
                <input type="text" placeholder="Search something" />
              </div>
            </div>
          </nav>
        );
    }

    return (
      <nav className="dynamic-menu" ref={menuRef}>
            <div className="hamburger-menu">
              <img src="/images/logo.jpg" alt="Menu Icon" style={{ width: '23px', height: '22.94px' }} />
              <span className="brand-name">E-COMM</span>
            </div>
            <ul>
        {menuItems.map(item => <li key={item.id}>{item.label}</li>)}
        {moreItems.length > 0 && (
            <li className={`more ${moreClicked ? 'clicked' : ''}`} onClick={handleMoreClick}>
                MORE
                <img src={moreClicked ? '/images/selectedarrow.jpg' : '/images/nonselectedarrow.jpg'} alt="Arrow" />
                {moreClicked && (
                <ul className="more-items">
                    {moreItems.map(item => (
                        <li key={item.id} 
                            className={selectedItemId === item.id ? 'selected' : ''} 
                            onClick={() => handleItemClick(item.id)}
                            style={{
                                position: 'relative',
                                backgroundColor: selectedItemId === item.id ? '#fff' : '',
                                color: selectedItemId === item.id ? '#000' : '',
                            }}>
                            {item.label}
                            {selectedItemId === item.id && (
                                <img 
                                    src="images/tick.jpg" 
                                    alt="Selected" 
                                    style={{
                                        position: 'absolute',
                                        right: '10px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                   
                                    }}
                                />
                            )}
                        </li>
                    ))}
                </ul>
                )}
            </li>
        )}
      </ul>
            <div className="search-bar">
  <div className="input-wrapper">
    <img src="/images/search.jpg" alt="Search" className="search-icon" />
    <input type="text" placeholder="Search something" />
    
  </div>
</div>


        </nav>
    );
};

export default DynamicMenu;
