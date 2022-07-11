import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store';

export const UseTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
