import React from 'react';
import { GreenLabel, GreenLabelWithIcon }  from './labels/GreenLabel';
import { RedLabel } from './labels/RedLabel';
 
const boilingVerdict = (props) => {
  if (props.celsius >= 200) {
      return <GreenLabelWithIcon>It's over 200 Celsius, it's boooiiiilingg! </GreenLabelWithIcon>
  } else if (props.celsius >= 100) {
      return <GreenLabel>The water would boil.</GreenLabel>;
  } else {
      return <RedLabel>The water would not boil.</RedLabel>;
  }
}
 
export default boilingVerdict;