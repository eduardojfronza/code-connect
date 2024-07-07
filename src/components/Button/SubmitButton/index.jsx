'use client';

import { useFormStatus } from 'react-dom'
import { Spinner } from '@/components/Spinner';
import { ArrowFoward } from '@/components/Icons/ArrowForward';
import {Button} from '../index'

export const SubmitButton = ({children}) => {
    const { pending } = useFormStatus();
    
    return (
        <Button aria-disabled={pending} type="submit">
             {pending ? <Spinner /> : <>{children} <ArrowFoward /></>}
        </Button>
    )
}