import react, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('');
    const [result, setResult] = useState([]);

    console.log(result);

    // useEffect내에서 return이 어떻게 동작하는지 설명
    // 1. 일단 전체 useEffect의 에로우함수가 실행됨
    // 2. return 에로우 함수가 실행됨
    // 3. 다시 실행하면 위의 1,2 반복
    // 결과적으론 execute! 나오고 가만히 있다가 다시 useEffect발동하면
    // 그때 return 에로우함수가 반환되어 나타남
    // 유데미 react강의 165번 참고
    /* 
    useEffect(() => {
        console.log('execute!');

        return (() => {

        })
    }, []);
    */

    useEffect(() => {
        // useEffect안에서 비동기 처리법 3가지
        // 1.
        
        const search = async () => {
            const { data } = await axios.get('https://ko.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                }
            });
            
            setResult(data.query.search);
        }
        // ############################################
        // ############### 여기가 중요 #################
        // ############################################
        console.log(term);
        /* if(term && !result.length){
            search();
        } else { */
            const timeoutId = setTimeout(() => {
                if(term){
                    search();
                }
            }, 500);
    
            return () => {
                clearTimeout(timeoutId)
            }
        //}
        
        // ############################################
        
        // 전문적인 프로젝트에서 자주 쓰는법
        // 2.
        /* 
        (async ()  => {
            await axios.get("~~");
        })();
        */
        //1번 제일 많이 쓴데
    }, [term]);

    // 결과값 mapping
    const renderedResult = result.map((result) => {
        
        // dangerouslySetInnerHTML은 API사용시 javascipt를 제거해줌?
        // 제거하지않으면 xss공격 받기 쉬움
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a 
                        className="ui button"
                        href={`https://ko.wikipedia.org?curid=${result.pageid}`}
                    >
                        GO
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input"
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResult}
            </div>
        </div>
    )
}

export default Search;