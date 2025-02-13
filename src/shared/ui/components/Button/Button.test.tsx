/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { Button } from '@/shared/ui/components/Button/Button';

afterEach(() => {
	jest.clearAllMocks();
});

const handleClick = jest.fn();

describe('Тесты кнопки', () => {
	test('Тестирование пропсов кнопки', () => {
		// ARRANGE
		const { getByText, container } = render(
			<Button size={'md'} disabled>
				Показать еще
			</Button>
		);

		// ASSERT
		expect(getByText('Показать еще'));
		expect(container.firstChild).toHaveClass('md');
		expect(getByText(/Показать еще/i).closest('button')).toBeDisabled();
	});

	test('Тестирование клика по кнопке', () => {
		// ARRANGE

		render(
			<Button size={'md'} onClick={handleClick}>
				Показать еще
			</Button>
		);

		// ACT
		fireEvent.click(screen.getByText('Показать еще'));

		// ASSERT
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
