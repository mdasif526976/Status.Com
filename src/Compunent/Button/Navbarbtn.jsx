import React from 'react';

const Navbarbtn = (svg) => {
    return (
        <div>
            <button className='w-14 h-14 rounded bg-white pl-[11px]'>
                <span>
                {svg}
                </span>

				</button>
        </div>
    );
};

export default Navbarbtn;