// import { describe, expect, test } from '@jest/globals';

import { ArrayUtils } from '@/shared/utils/misc';

describe('utils test ', () => {
	test('areArraysEqual test', () => {
		// ARRANGE
		const array1 = ['1', '2', '3', '4'];
		const array2 = ['4', '3', '2', '1'];
		const array3 = ['123'];

		// ACT
		const expectTrueResult = ArrayUtils.areArraysEqual(array1, array2);
		const expectFalseResult = ArrayUtils.areArraysEqual(array1, array3);

		// ASSERT
		expect(expectTrueResult).toEqual(true);
		expect(expectFalseResult).toEqual(false);
	});
});
