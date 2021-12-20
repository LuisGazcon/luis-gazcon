import React from 'react';
import type { FC, ReactNode } from 'react';

interface InputFeedbackProps {
	children?: ReactNode;
}

const InputFeedback: FC<InputFeedbackProps> = ({ children }) => {
	return <div>{children}</div>;
};

export default InputFeedback;
