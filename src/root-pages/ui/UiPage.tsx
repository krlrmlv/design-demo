'use client';

import React, { useState } from 'react';

import Breadcrumbs from '@/shared/ui/components/Breadcrumbs/Breadcrumbs';
import { Button } from '@/shared/ui/components/Button';
import { Counter } from '@/shared/ui/components/Counter';
import DropDown, { DropDownOption } from '@/shared/ui/components/DropDown/DropDown';
import Icon from '@/shared/ui/components/Icon/Icon';
import { IconButton } from '@/shared/ui/components/IconButton';

const UiPage = () => {
	const [value, setValue] = useState<DropDownOption>({ label: 'Выберите что-нибудь', value: '' });

	const options = [
		{ label: 'test', value: 'test' },
		{ label: 'test1', value: 'test1' },
		{ label: 'test2', value: 'test2' }
	];

	const [count, setCount] = useState(1);
	const handleChangeCount = (newCount: number) => {
		setCount(newCount);
	};

	return (
		<div style={{ display: 'flex', gap: '16px 16px', padding: '0 24px', flexDirection: 'column' }}>
			<div style={{ display: 'flex', gap: '0 16px', padding: '0 24px' }}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '26px 0' }}>
					<Button>Показать еще</Button>
					<Button isLoading={true}>Показать еще</Button>
					<Button disabled={true}>Показать еще</Button>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '26px 0' }}>
					<Button size={'md'}>Показать еще</Button>
					<Button size={'md'} isLoading={true}>
						Показать еще
					</Button>
					<Button size={'md'} disabled={true}>
						Показать еще
					</Button>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '26px 0' }}>
					<Button size={'sm'}>Показать еще</Button>
					<Button size={'sm'} isLoading={true}>
						Показать еще
					</Button>
					<Button size={'sm'} disabled={true}>
						Показать еще
					</Button>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '26px 0' }}>
					<Button color={'primaryOutlined'}>Показать еще</Button>
					<Button color={'primaryOutlined'} isLoading={true}>
						Показать еще
					</Button>
					<Button color={'primaryOutlined'} disabled={true}>
						Показать еще
					</Button>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '26px 0' }}>
					<Button size={'md'} color={'primaryOutlined'}>
						Показать еще
					</Button>
					<Button size={'md'} color={'primaryOutlined'} isLoading={true}>
						Показать еще
					</Button>
					<Button size={'md'} color={'primaryOutlined'} disabled={true}>
						Показать еще
					</Button>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '26px 0' }}>
					<Button size={'sm'} color={'primaryOutlined'}>
						Показать еще
					</Button>
					<Button size={'sm'} color={'primaryOutlined'} isLoading={true}>
						Показать еще
					</Button>
					<Button size={'sm'} color={'primaryOutlined'} disabled={true}>
						Показать еще
					</Button>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '26px 0' }}>
					<Button icon={<Icon icon={'Edit/Add_Plus'} color={'white'} colorType={'stroke'} />}>
						Показать еще
					</Button>
					<Button
						iconPosition={'start'}
						icon={<Icon icon={'Edit/Add_Plus'} color={'white'} colorType={'stroke'} />}
					>
						Показать еще
					</Button>
					<Button
						iconPosition={'both'}
						icon={<Icon icon={'Edit/Add_Plus'} color={'white'} colorType={'stroke'} />}
					>
						Показать еще
					</Button>
					<Button
						iconPosition={'both'}
						disabled={true}
						icon={<Icon icon={'Edit/Add_Plus'} color={'primary02'} colorType={'stroke'} />}
					>
						Показать еще
					</Button>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '26px 0' }}>
					<Button
						color={'primaryOutlined'}
						icon={<Icon icon={'Edit/Add_Plus'} color={'primary02'} colorType={'stroke'} />}
					>
						Показать еще
					</Button>
					<Button
						iconPosition={'start'}
						color={'primaryOutlined'}
						icon={<Icon icon={'Edit/Add_Plus'} color={'primary02'} colorType={'stroke'} />}
					>
						Показать еще
					</Button>
					<Button
						iconPosition={'both'}
						color={'primaryOutlined'}
						icon={<Icon icon={'Edit/Add_Plus'} color={'primary02'} colorType={'stroke'} />}
					>
						Показать еще
					</Button>
					<Button
						iconPosition={'both'}
						color={'primaryOutlined'}
						disabled={true}
						icon={<Icon icon={'Edit/Add_Plus'} color={'primary02'} colorType={'stroke'} />}
					>
						Показать еще
					</Button>
				</div>
			</div>
			<div style={{ display: 'flex', gap: '0 16px', padding: '0 24px' }}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '26px 0' }}>
					<IconButton icon={<Icon icon={'Arrow/Arrow_Right_MD'} color={'white'} />} />
					<IconButton
						icon={<Icon icon={'Arrow/Arrow_Right_MD'} color={'white'} />}
						isLoading={true}
					/>
					<IconButton
						icon={<Icon icon={'Arrow/Arrow_Right_MD'} color={'white'} />}
						disabled={true}
					/>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '26px 0' }}>
					<IconButton icon={<Icon icon={'Arrow/Arrow_Right_MD'} color={'white'} />} size={'sm'} />
					<IconButton
						icon={<Icon icon={'Arrow/Arrow_Right_MD'} color={'white'} />}
						isLoading={true}
						size={'sm'}
					/>
					<IconButton
						icon={<Icon icon={'Arrow/Arrow_Right_MD'} color={'white'} />}
						disabled={true}
						size={'sm'}
					/>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '26px 0' }}>
					<IconButton
						icon={<Icon icon={'Arrow/Arrow_Right_MD'} color={'black'} />}
						color={'primaryOutlined'}
					/>
					<IconButton
						icon={<Icon icon={'Arrow/Arrow_Right_MD'} color={'black'} />}
						isLoading={true}
						color={'primaryOutlined'}
					/>
					<IconButton
						icon={<Icon icon={'Arrow/Arrow_Right_MD'} color={'black'} />}
						disabled={true}
						color={'primaryOutlined'}
					/>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '26px 0' }}>
					<IconButton
						icon={<Icon icon={'Arrow/Arrow_Right_MD'} color={'black'} />}
						color={'primaryOutlined'}
						size={'sm'}
					/>
					<IconButton
						icon={<Icon icon={'Arrow/Arrow_Right_MD'} color={'black'} />}
						isLoading={true}
						color={'primaryOutlined'}
						size={'sm'}
					/>
					<IconButton
						icon={<Icon icon={'Arrow/Arrow_Right_MD'} color={'black'} />}
						disabled={true}
						color={'primaryOutlined'}
						size={'sm'}
					/>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '26px 0' }}>
					<Counter value={count} onChange={handleChangeCount} />
					<Counter value={count} onChange={handleChangeCount} />
					<Counter value={count} onChange={handleChangeCount} isLoading={true} />
					<Counter value={count} onChange={handleChangeCount} disabled={true} />
				</div>
			</div>
			<div style={{ maxWidth: '300px' }}>
				<DropDown options={options} name={'DropDown'} value={value} setOption={setValue} />
			</div>
			<div>
				<Breadcrumbs
					breadcrumbs={[
						{ name: 'Главная', link: '/' },
						{
							name: 'Категория 1 уровня',
							link: '/catalog'
						},
						{ name: 'Категория 2 уровня', link: '/catalog/2' }
					]}
				/>
			</div>
		</div>
	);
};

export default UiPage;
