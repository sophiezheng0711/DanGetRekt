import React, {useState} from 'react';
import Text from "./centeredText";

export default function Joe (props) {
  return (
    <Text text="For those of you who do not know,
                    I absolutely love mathematics, and everything that has to do with the field.
                    That's why I am making my puzzle math based! If it was up to me I would have made it PDE
                    focused, but thats a little unfair. Oh well guess I'll have to settle for a number theory
                    problem instead. P.s: These numbers are a little big, it might be worthwhile to shrink
                    them into smaller pieces." title="Math, Numbers, and Algorithms" />
  );
}