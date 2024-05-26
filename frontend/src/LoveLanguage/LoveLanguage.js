import './LoveLanguage.css';
import '../common.css';

function LoveLanguageOption({ type, description, onSelect }) {
    return (
        <button className='love-language-option' onClick={() => onSelect(type)}>
            <h2>{type}</h2>
            <p>{description}</p>
        </button>
    )
}

function LoveLanguageMenu() {
    const love_languages = {
        "봉사": "상대방을 위해 무언가를 도와줌으로써 사랑을 나타낸다.",
        "선물": "작은 선물이나 기념품을 주고받으며 사랑을 표현한다.",
        "스킨십": "포옹, 손잡기 등 신체적 접촉을 통해 애정을 표현한다.",
        "인정하는 말": "상대방에게 칭찬이나 긍정적인 말을 통해 사랑을 표현한다.",
        "함께하는 시간": "질적으로 높은 시간을 함께 보내는 것을 중시한다."
    }

    return (
        <div className="love-language-menu">
            {Object.entries(love_languages).map(([type, description]) => (
                <LoveLanguageOption key={type} type={type} description={description} onSelect={console.log} />
            ))}
        </div>
    )
}

export default function SelectLoveLanguagePage() {


    return (
        <div className='total-page'>
            <div className='select-love-language-content'>
                <h3>Step 2.</h3>
                <h1>원하는 이상형의 연애 성향는?</h1>
                <div></div>
                <h3>사랑의 다섯 가지 언어 중에서 상대방에게 바라는 것을 선택해 주세요.</h3>
                <div>
                    <LoveLanguageMenu />
                </div>
                <div className='next-button-container'>
                    <button className='next-button'>다음</button>
                </div>
            </div>
        </div>

    )
}