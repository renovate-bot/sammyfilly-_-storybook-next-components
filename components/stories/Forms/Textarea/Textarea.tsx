import React from 'react';
import { Textarea, FormControl } from '../../../ui-components';

const TextareaStory = ({ ...props }: any) => {
  return (
    <Textarea {...props}>
      <Textarea.Input placeholder='Your text goes here...' />
    </Textarea>
  );
};

export default TextareaStory;

export { Textarea, FormControl };
