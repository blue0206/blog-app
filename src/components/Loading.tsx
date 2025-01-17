import { ReactElement } from "react";

export default function LoadingScreen(): ReactElement {
    return (
        <>
            <div className='h-screen w-screen bg-white flex'>
                <div className='justify-center m-auto flex flex-col gap-4'>
                    <div className='h-1/5 aspect-square motion-safe:animate-spin border-blue-400 rounded-full border-8 border-dotted border-'></div>
                    <div className='ml-2'>Loading...</div>
                </div>
            </div>
        </>
    );
};