import { uniqueId } from 'lodash';
import * as React from 'react';
import { Label } from "../Label";
import { Wrapper } from './styles';
import { useCombinedRefs } from '../UseCombinedRefs';

interface ICheckbox extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, ICheckbox>(({label, ...checkboxProps}, ref) => {
  const checkboxId = checkboxProps.id ?? uniqueId();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const combinedRef = useCombinedRefs<HTMLInputElement>(ref, inputRef);
  const handleSpanClicked = () => inputRef.current?.click();

  return (
  <Wrapper className={checkboxProps.className}>
    <input {...checkboxProps} type="checkbox" id={checkboxId} ref={combinedRef}/>
    <span onClick={handleSpanClicked}/>
    {label && <Label htmlFor={checkboxId}>{label}</Label>}
  </Wrapper>
  )
});
