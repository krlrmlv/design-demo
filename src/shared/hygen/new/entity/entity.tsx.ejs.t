---
to: <%= absPath %>/<%= component_name %>.tsx
---
import React, { FC } from 'react';

import { use<%= component_name %>State } from './<%= component_name %>.state';

import styles from './<%= component_name %>.module.scss';

interface Props {
}

const <%= component_name %>: FC<Props> = (props) => {
	const {} = use<%= component_name %>State({});
  return <div className={styles.root}><%= component_name %></div>;
};

export default <%= component_name %>;