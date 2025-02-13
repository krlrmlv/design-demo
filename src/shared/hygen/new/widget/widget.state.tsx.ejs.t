---
to: <%= absPath %>/<%= widget %>.state.tsx
---
import { useMemo, useState } from 'react';

interface Props {
}

export const use<%= widget %>State = (props: Props) => {
	const [state, setState] = useState();
  return useMemo(() => ({
  	state
  }), [state]);
};
