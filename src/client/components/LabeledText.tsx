import * as React from 'react';

interface LabelProps{
  label: string;
  text: string;
}
const LabeledText: React.SFC<LabelProps> = ({ label, text }: LabelProps) => (
  <p>
    <strong>{`${label}: `}</strong>
    {text}
  </p>
);

export default LabeledText;
