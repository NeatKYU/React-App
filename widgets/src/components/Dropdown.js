import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
    const [visible, setVisible] = useState(false);
    const ref = useRef(); //form태그에 연결

    useEffect(() => {
        document.body.addEventListener('click', (event) => {
            // ref가 지금 form태그에 설정되있는데 거기에서 event발생하면 무시하고 넘어감
            // react 16v에선 if(ref.current.contains(event.target)) 이렇게 작성함
            // dropdown메뉴를 숨기면 ref.current가 null이 되어서 contains를 못찾게됨
            // 그래서 조건문에 ref.current가 존재하면이라는 조건을 줌
            if(ref.current && ref.current.contains(event.target)){
                return;
            }
            setVisible(false);
        }, {capture: true}); //react 17v 부터 추가하라던데 뭔지 모르겠음 
    }, []);
    // ---------->>>
    // react 16v일땐 이렇게 사용함 17에선 if문에 ref.current추가하면 에러안남
    /* 
    useEffect(() => {
        const onBodyClick = (event) => {
            if(ref.current.contains(event.target)){
                return;
            }
            setVisible(false);
        };

        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        }
    })
    */
    const renderedOption = options.map((option) => {
        //같은값이면 아무일도 없게하기
        if( option.value === selected.value ){
            return null;
        }
        return (
            <div 
                key={option.value}
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        );
    });

    const handleMenuVisible = () => {
        setVisible(!visible)
        //visible값이 문자열로 하고싶을땐 이렇게하면됨
        /* 
        if(visible){
            setVisible('')
        }else {
            setVisible('visible')
        }
        */
    }

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div className={`ui selection dropdown ${visible ? 'visible' : ''} active`} onClick={handleMenuVisible}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu transition ${visible ? 'visible' : ''}`}>
                        {renderedOption}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;