import React from 'react';
import { Categories, Sort, PizzaBlock } from '../Components';


function Home() {
    return (
        <div className="container">
        <div className="content__top">
          <Categories onClick={name => console.log(name)} items={['Мясные', 'Вегетарианская', 'Гриль', 'Закрытые']} />
          <Sort items={['популярности', 'цене', 'алфавиту']} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          <PizzaBlock/>
          <PizzaBlock/>
          <PizzaBlock/>
          <PizzaBlock/>
          <PizzaBlock/>
          <PizzaBlock/>
          <PizzaBlock/>
          <PizzaBlock/>
          <PizzaBlock/>
        </div>
      </div>
    
    )
}

export default Home
