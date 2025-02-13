import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/shared/ui/components/Button';
import { IconList } from '@/shared/ui/components/Icon/IconList.constants';

const iconList = {
	AddPlus: IconList['Edit/Add_Plus'],
	Info: IconList['Warning/Info'],
	None: null
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'Shared/Button',
	tags: ['autodocs'],
	component: Button,
	parameters: {
		// привязка к фигме
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/fr35DeeBjSN2iOHC7AlqoU/%F0%9F%92%BB-Design-%2F%2F-Aero-Platform?type=design&node-id=25-1231&mode=dev'
		}
		// Добавляем общие тесты для историй
		// Но при этом, если истории передать конкретный тест в ее parameters - общий тест из meta перезапишется конкретным
		// jest: 'Button.test.tsx'
	},
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		children: {
			// добавляем описание тут только если нельзя добавлить JSDoc в пропсах
			description: 'Содержимое кнопки'
		},
		icon: {
			control: { type: 'select' },
			options: Object.keys(iconList),
			mapping: iconList
		}
	},
	//общие аргументы для всех историй
	args: {
		children: 'Кнопка',
		isLoading: false,
		size: 'lg',
		color: 'primaryFilled',
		iconPosition: 'end',
		icon: iconList.None
	}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PrimaryFilled: Story = {
	parameters: {
		// пердаем конкретные тесты в историю
		// jest: ['Button.test.tsx', 'ButtonPrimaryFilled.test.tsx']
	}
};

export const PrimaryOutlined: Story = {
	args: {
		color: 'primaryOutlined'
	},
	parameters: {
		jest: ['Button.test.tsx', 'ButtonPrimaryOutlined.test.tsx']
	}
};

export const Small: Story = {
	args: {
		size: 'sm'
	},
	parameters: {
		jest: ['Button.test.tsx', 'ButtonSmall.test.tsx']
	}
};

export const Medium: Story = {
	args: {
		size: 'md'
	},
	parameters: {
		jest: ['Button.test.tsx', 'ButtonMedium.test.tsx']
	}
};

export const Large: Story = {
	args: {
		size: 'lg'
	},
	parameters: {
		jest: ['Button.test.tsx', 'ButtonLarge.test.tsx']
	}
};

export const Disabled: Story = {
	args: {
		disabled: true
	},
	parameters: {
		jest: ['Button.test.tsx', 'ButtonDisabled.test.tsx']
	}
};
