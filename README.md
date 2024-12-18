# text2vdom
jsx스럽게 생긴 문자열을 파싱하여 React 노드로 변환해줍니다.

번역텍스트 사이에 리액트 컴포넌트를 끼워넣고 싶은 경우에 사용하기 위해 만들었습니다.

## 설치하기
```sh
npm install text2vdom
```

## 사용법
DEMO: <https://disjukr.github.io/text2vdom>

```tsx
import $ from 'text2vdom';

const text = `
    react-dom에서 <b>기본 지원되는 태그는</b> 바로 사용할 수 있습니다.<br/>
    <b>중첩된 <i>태그 사용</i></b>도 지원됩니다.<br/>
    부등호를 쓰고싶으면 &lt;이렇게&gt; 사용해야합니다.<br/>
    애트리뷰트는 쌍따옴표를 두르는 경우가 허용됩니다만,
    그 정도로 복잡한 표현이 필요하다면 <my-tag>커스텀 태그</my-tag>를 사용하세요.<br/>
    애트리뷰트 안에서 쌍따옴표를 사용하고 싶으면 "&quot;이렇게&quot; 사용해야합니다."<br/>
    다른 html 엔티티를 지원하지는 않습니다.
`;

const MyComponent = () => <div>
    { $(text, {
        'my-tag': ({ children }) => <a href='https://github.com/disjukr'>
            { children }
        </a>,
    }) }
</div>;
```
