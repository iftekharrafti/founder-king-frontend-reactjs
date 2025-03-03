import React from 'react';

const Spinner = () => {
    return (
        <div>
            <div class="flex">
                <div class="relative">
                    <div class="w-12 h-12 rounded-full absolute
                            border-4 border-dashed border-global-primary"></div>

                    <div class="w-12 h-12 rounded-full animate-spin absolute
                            border-4 border-dashed border-global-primary border-t-transparent"></div>
                </div>
            </div>
        </div>
    );
};

export default Spinner;