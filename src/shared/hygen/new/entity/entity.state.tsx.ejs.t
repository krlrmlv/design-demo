---
to: <%= absPath %>/<%= component_name %>.state.tsx
---
import { useMemo, useState } from 'react';

interface Props {
}

export const use<%= component_name %>State = (props: Props) => {
	const [state, setState] = useState();
  return useMemo(() => ({
  	state
  }), [state]);
};
