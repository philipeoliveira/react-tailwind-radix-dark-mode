import * as Switch from '@radix-ui/react-switch';
import { twMerge } from 'tailwind-merge';
import { MoonStar } from 'lucide-react';
import { Sun } from 'lucide-react';

const RadixSwitch = ({ clickAction, theme }) => (
   <form>
      <div className='flex items-center'>
         <Switch.Root
            className='border border-my-blue-400 w-12 h-7 rounded-full relative cursor-pointer'
            id='airplane-mode'
            onClick={clickAction}
            checked={theme === 'dark'}
         >
            <div className='absolute left-1 bottom-[5px]'>
               <Sun strokeWidth={2} size={16} />
            </div>
            <div className='absolute right-1 bottom-[5px]'>
               <MoonStar strokeWidth={1} size={16} />
            </div>
            <Switch.Thumb
               className={twMerge(
                  'bg-my-blue-400 hover:bg-my-blue-600 block size-5 rounded-full translate-x-[3px] transition-transform',
                  'SwitchThumb'
               )}
            />
         </Switch.Root>
      </div>
   </form>
);

export default RadixSwitch;
