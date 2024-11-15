import * as Switch from '@radix-ui/react-switch';
import { twMerge } from 'tailwind-merge';

const RadixSwitch = ({ clickAction, theme }) => (
   <form>
      <div className='flex items-center'>
         <Switch.Root
            className='border border-my-blue-400 w-12 h-7 rounded-full relative cursor-pointer'
            id='airplane-mode'
            onClick={clickAction}
            checked={theme === 'dark'}
         >
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
