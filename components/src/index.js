import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';


const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                name="Sam" 
                date="2019-2-12"
                text="fuck you!"
                avatar={faker.image.image()}
            />
            <CommentDetail 
                name="Lala" 
                date="2020-1-30"
                text="tell me fuck"
                avatar={faker.image.image()}
            />
            <CommentDetail 
                name="Jane" 
                date="2020-10-13"
                text="ok let's move out"
                avatar={faker.image.image()}
            />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));