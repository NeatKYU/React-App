import react, { useState } from 'react';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index)
    }

    //react.Freagment는 div같은 태그 없이 값을 넘겨주고 싶을 때 사용하는듯
    const renderedItem = items.map((item, index) => {
        
        const active = index === activeIndex ? 'active' : '';

        return (
            <react.Fragment key={item.title}>
                <div 
                //왜 {onTitleClick(index)}라고하면 안될까?
                //왜 에로우 함수를 써야하는가???
                // 그냥함수 쓰면 무한루프에 빠진다 강의에선 클릭하기전에 발동해서 안쓴다는데....
                    className={`title ${active}`}
                    onClick={() => onTitleClick(index)} 
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </react.Fragment>
        )
    })

    return (
        <div className="ui styled accordion">
            {renderedItem}
            <h1>{activeIndex}</h1>
        </div>
    )
}

export default Accordion;