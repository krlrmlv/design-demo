---
to: <%= absPath %>/<%= widget %>.tsx
---
import React, { FC } from 'react';

import { use<%= widget %>State } from './<%= widget %>.state';

import styles from './<%= widget %>.module.scss';

interface Props {
}

const <%= widget %>: FC<Props> = (props) => {
	const {} = use<%= widget %>State({});
  return <div className={styles.root}><%= widget %></div>;
};

export default <%= widget %>;