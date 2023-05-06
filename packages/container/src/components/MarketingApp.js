import React,{useEffect,useRef} from 'react';
import { mountMarketing } from 'marketing/MarketingApp';

const marketingDivElement = document.getElementById('marketing');

export const MarketingApp = () => {    

    const ref = useRef(null);

    useEffect(() => {
        console.log('Inside useEffect................')
        mountMarketing(ref.current);
    });    

    return <div ref={ref} />;
}


