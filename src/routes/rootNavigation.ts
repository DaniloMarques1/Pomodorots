
import React from 'react';
import {NavigationContainerRef} from '@react-navigation/native'

export const navigationRef = React.createRef<NavigationContainerRef>();

//TODO: handle route with params
export function navigate(name: string, ) {
  console.log({name});
  navigationRef.current?.navigate(name);
}
