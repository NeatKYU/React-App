import react, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('');
    const [result, setResult] = useState([]);

    console.log(result);

    useEffect(() => {
        // useEffect안에서 비동기 처리법 3가지
        // 1.
        
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
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

        if(term){
            search();
        }
        
        // 전문적인 프로젝트에서 자주 쓰는법
        // 2.
        /* 
        (async ()  => {
            await axios.get("~~");
        })();
        */
        //1번 제일 많이 쓴데
    }, [term]);

    return (
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
    )
}

export default Search;