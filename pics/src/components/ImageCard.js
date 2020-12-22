import react from 'react';

class ImageCard extends react.Component {
    constructor(props) {
        super(props);

        this.state = { span: 0 };

        this.imageRef = react.createRef();
    }

    // 강의에선 여기에선 이미지가 다운로드 되기 전에 불러와서 높이가 0으로 나오는데
    // 난 재대로 나온다 react가 업그레이드 된건가????
    componentDidMount() {
        //console.log(this.imageRef.current.clientHeight) //이거 정상적으로 나옴
        this.imageRef.current.addEventListener('load', this.setSpans);
    }
    
    // 이미지의 높이를 알아내서 그만큼 span을 구하는것
    setSpans = () => {
        const GridAutoRows = 10; //imageList.css 참조
        const height = this.imageRef.current.clientHeight;
        const span = Math.ceil( height / GridAutoRows );

        this.setState({ span: span })
    }

    render() {
        const { description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.span}`}}>
                <img ref={this.imageRef} alt={description} src={urls.regular}></img>
            </div>
        )
    }
}

export default ImageCard;