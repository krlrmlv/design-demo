---
to: <%= absPath %>/<%= feature %>.state.tsx
---
import { useMemo, useState } from 'react';

interface Props {
}

export const use<%= feature %>State = (props: Props) => {
	const [state, setState] = useState();
  return useMemo(() => ({
  	state
  }), [state]);
};
