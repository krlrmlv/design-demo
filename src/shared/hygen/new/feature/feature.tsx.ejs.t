---
to: <%= absPath %>/<%= feature %>.tsx
---
import React, { FC } from 'react';

import { use<%= feature %>State } from './<%= feature %>.state';

import styles from './<%= feature %>.module.scss';

interface Props {
}

const <%= feature %>: FC<Props> = (props) => {
	const {} = use<%= feature %>State({});
  return <div className={styles.root}><%= feature %></div>;
};

export default <%= feature %>;