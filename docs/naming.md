# Нейминг

#### :memo: Оглавление: :memo:

1. [Общее](#общее)
2. [Нейминг](#нейминг)
3. [JSX](#jsx)
4. [Экспорт и Импорт](#экспорт-и-импорт)
5. [Структура](#структура)

## Общее

- 1.1. Используйте [функциональные компоненты](https://ru.legacy.reactjs.org/docs/components-and-props.html) вместо
  классовых:

```javascript
// не рекомендуется
import { PureComponent } from 'react';

class Comp extends PureComponent {
	// ...
};

// рекомендуется
const Comp = () => (
	// ...
);
```

- 1.2.
  Используйте [стрелочные функции](https://developer.mozilla.org/ru-RU/docs/Web/JavaScript/Reference/Functions/Arrow_functions):

```javascript
// не рекомендуется
function Comp() {
	// ...
};

// рекомендуется
const Comp = () => (
	// ...
);
```

<sup>[[оглавление]](#оглавление)</sup>

## Нейминг

- 2.1. Называйте файл по имени компонента:

```javascript
// не рекомендуется
import { SearchBar } from 'components/SearchField/SearchField.tsx';

// рекомендуется
import { SearchBar } from 'components/SearchBar/SearchBar.tsx';
```

- 2.2. Используйте [PascalCase](https://wiki.c2.com/?PascalCase) для именования:
  <br/>
  файлов:

```javascript
// не рекомендуется
import { ContactCard } from 'components/contactCard/сontactCard.tsx';

// рекомендуется
import { ContactCard } from 'components/ContactCard/ContactCard.tsx';
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;компонентов:

```javascript
// не рекомендуется
import { сontactCard } from 'components/ContactCard/ContactCard.tsx';

// рекомендуется
import { ContactCard } from 'components/ContactCard/ContactCard.tsx';
```

- 2.3. Используйте [camelCase](https://en.wikipedia.org/wiki/Camel_case) для именования:
  <br/>
  экземпляров:

```javascript
// не рекомендуется
const ContactCard = <ContactCard/>;

// рекомендуется
const сontactCard = <ContactCard/>;
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;свойств (props):

```javascript
// не рекомендуется
<ContactCard
	FirstName="Ivan"
	phone_number={1234567}
/>

// рекомендуется
<ContactCard
	firstName="Ivan"
	phoneNumber={1234567}
/>
```

<sup>[[оглавление]](#оглавление)</sup>

## JSX

- 3.1. Используйте самозакрывающиеся теги при отсутствии дочерних элементов:

```javascript
// не рекомендуется
<InfoBox text="abc"></InfoBox>

// рекомендуется
<InfoBox text="abc"/>
```

<sup>[[оглавление]](#оглавление)</sup>

## Свойства

- 5.1. Откажитесь от использования DOM-свойств компонента для целей, отличных от их прямого назначения:

```javascript
// не рекомендуется
<InfoBox
	style="inline"
	text="abc"
/>

const InfoBox = ({ style, text }) => {
	return style === 'inline' ? <span>{text}</span> : <div>{text}</div>
};

// рекомендуется
<InfoBox
	displayType="inline"
	text="abc"
/>

const InfoBox = ({ displayType, text }) => {
	return displayType === 'inline' ? <span>{text}</span> : <div>{text}</div>
};
```

[//]: # (- 5.2. Откажитесь от указания значения, если оно явно `true`:)

[//]: # ()

[//]: # (```javascript)

[//]: # (// не рекомендуется)

[//]: # (<InfoBox)

[//]: # (	isVisible={true})

[//]: # (/>)

[//]: # ()

[//]: # (// рекомендуется)

[//]: # (<InfoBox)

[//]: # (	isVisible)

[//]: # (/>)

[//]: # (```)

<sup>[[оглавление]](#оглавление)</sup>

## Экспорт и Импорт

[//]: # (- 6.1. Используйте именованный экспорт:)

[//]: # ()

[//]: # (```javascript)

[//]: # (// не рекомендуется)

[//]: # (const Comp = &#40;&#41; => {)

[//]: # (	// ...)

[//]: # (};)

[//]: # ()

[//]: # (export default Comp;)

[//]: # ()

[//]: # (// рекомендуется)

[//]: # (const Comp = &#40;&#41; => {)

[//]: # (	// ...)

[//]: # (};)

[//]: # ()

[//]: # (export { Comp };)

[//]: # ()

[//]: # (// рекомендуется)

[//]: # (export const Comp = &#40;&#41; => {)

[//]: # (	// ...)

[//]: # (};)

[//]: # (```)

- 6.1. Импортируйте требуемые методы:

```javascript
// не рекомендуется
const Comp = () => {
	const [state, setState] = React.useState(true);
	
	return (
		// ...
	);
};

// рекомендуется
import { useState } from 'react';

const Comp = () => {
	const [state, setState] = useState(true);
	
	return (
		// ...
	);
};
```

<sup>[[оглавление]](#оглавление)</sup>

## Структура

- 7.1. Придерживайтесь правила `один файл - один компонент`:

```javascript
// не рекомендуется
// ComponentsABC.tsx
const CompA = () => {
	// ...
};

const CompB = () => {
	// ...
};

const CompC = () => {
	// ...
};

// рекомендуется
// ComponentA.tsx
const CompA = () => {
	// ...
};

// ComponentB.tsx
const CompB = () => {
	// ...
};

// ComponentC.tsx
const CompC = () => {
	// ...
};
```

- 7.3. Придерживайтесь следующих принципов ранжирования логики внутри компонента:

```javascript
// рекомендуется
const Comp = () => {
	// глобальный стейт
	const appState = useSelector(appSelector);
	const themeState = useContext(ThemeContext);
	
	// локальный стейт
	const [compState, setCompState] = useState({
		// ...
	});
	
	// рефы
	const divRef = useRef();
	
	// хэндлеры
	const handleClick = () => {
		// ...
	};
	
	// эффекты
	useLayoutEffect(() => {
		// ...
	});
	
	useEffect(() => {
		// ...
	});
	
	return (
		// ...
	);
};
```

<sup>[[оглавление]](#оглавление)</sup>
