import { Dispatch, FC, SetStateAction } from 'react';
import Select from 'react-select';
import classNames from 'classnames';

import ErrorText from '@/shared/ui/components/ErrorText/ErrorText';

export type DropDownOption = {
	label: string;
	value: string;
};

type Props = {
	value?: DropDownOption | null;
	options: DropDownOption[];
	setValue?: (value: string) => void;
	setOption?: Dispatch<SetStateAction<DropDownOption>>;
	name: string;
	ref?: any;
	error?: string;
	size?: string;
	placeholder?: string;
	isDisabled?: boolean;
	isLoading?: boolean;
	isClearable?: boolean;
	isSearchable?: boolean;
	className?: string;
};

const DropDown: FC<Props> = ({
	value = null,
	options,
	name,
	error,
	setValue,
	setOption,
	ref,
	size = 'medium',
	placeholder = '',
	isDisabled = false,
	isLoading = false,
	isClearable = false,
	isSearchable = false,
	className
}) => {
	return options?.length > 0 ? (
		<div className={classNames('select-wrapper', className)}>
			<Select
				className={classNames('select-container', {
					['select-error']: !!error,
					[size]: size
				})}
				classNamePrefix='select'
				value={value}
				onChange={(option) => {
					if (option) {
						if (setOption) {
							setOption(option);
						}
						if (setValue) {
							setValue(option.value);
						}
					}
				}}
				isDisabled={isDisabled}
				isLoading={isLoading}
				isClearable={isClearable}
				isSearchable={isSearchable}
				ref={ref}
				name={name}
				options={options}
				placeholder={placeholder}
			/>
			{error && <ErrorText error={error} />}
		</div>
	) : null;
};

export default DropDown;
