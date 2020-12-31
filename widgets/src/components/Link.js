import React from 'react';

const Link = ({ className, href, children }) => {
    const onClick = (e) => {
        
        //ctrl누르고 링크 클릭하면 새로운창 뜸
        if(e.metaKey || e.ctrlKey) {
            return;
        }
        // 페이지가 리로드되는걸 방지하기위해 preventDefault 넣음
        e.preventDefault();

        // URL이 변경됨 href로 들어온게 url임
        window.history.pushState({}, '', href);

        //popstate라는 이벤트를 받아오고 브라우저에 event발생을 알려줌
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }
    return (
        <a onClick={onClick} className={className} href={href}>
            {children}
        </a>
    )
}

export default Link;