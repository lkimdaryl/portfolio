import React from 'react';
import './section-wrapper.css';

const SectionWrapper = <P extends object>(Component: React.ComponentType<P>) => {
    return function HOC(props: P) {
        return (
            <section className="section-wrapper">
                <Component {...props} />
            </section>
        );
    };
};

export default SectionWrapper;
