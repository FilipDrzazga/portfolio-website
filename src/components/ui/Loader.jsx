import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const Loader = ()=>{
    const count = useMotionValue(0);
    const rounded = useTransform(count, (value) => Math.trunc(value));

    const scaleX = useTransform(count, [0, 100], ['0%', '50%']);

    useEffect(() => {
        const controls = animate(count, 100, { duration: 3 });
        return () => controls.stop();
      }, [count]);

    return(
        <section className='w-screen h-screen overflow-hidden flex justify-center items-center bg-white'>
            <div className='w-full h-1/4 flex flex-col justify-center items-center'>
                <motion.span className=' font-oswald-b text-small text-black'>{rounded}</motion.span>
                <motion.div style={{scaleX}} className='w-1/2 h-0.5 origin-left translate-x-1/4 bg-black'></motion.div>
            </div>
        </section>
    )
};

export default Loader;