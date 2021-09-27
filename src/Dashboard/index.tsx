import React from 'react';
import { RouteComponentProps, useParams } from 'react-router-dom';
import { Key, pathToRegexp } from 'path-to-regexp';

export default function Dashboard(props: RouteComponentProps) {
  const params = useParams<{ name: string }>();
  const keys: Key[] = [];
  const regexp = pathToRegexp('/foo/:bar', keys);

  console.log(regexp);
  console.log(keys);
  console.log(regexp.exec('/foo/:bar'));
  return <div>首页{params.name}</div>;
}
