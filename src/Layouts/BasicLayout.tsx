import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default function BasicLayout(props: React.PropsWithChildren<RouteComponentProps>) {
  const { children, history, location } = props;
  console.log(history);
  console.log(location);
  return (
    <>
      <div style={{ height: 48, paddingLeft: 16, color: '#fff', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
        布局(Layouts)
      </div>
      <div style={{ margin: '20px 16px' }}>{children}</div>
    </>
  );
}
