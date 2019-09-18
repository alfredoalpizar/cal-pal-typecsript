import * as React from 'react';
import { useSelector } from 'react-redux';
import LabeledText from './LabeledText';
import { StoreState } from '../../types/index';

const MacrosDisplay: React.FC = () => {
  const { macrosToday } = useSelector((state: StoreState) => state.macros);
  return (
    <div className="innerbox" id="macros">
      <div>
        {Object.entries(macrosToday).map(([label, text]) => (
          <LabeledText label={label} text={text} key={`${label}${text}`} />
        ))}
      </div>
    </div>
  );
};

export default MacrosDisplay;
