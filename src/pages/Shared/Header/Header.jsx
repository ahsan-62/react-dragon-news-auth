
import logo from '../../../assets/log.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='pt-2 pb-4 text-center bg-green-200 '>
            <img className='mx-auto w-[600px]' src={logo} alt="logo" />
            <p className='mb-3 text-[#706F6F] text-lg font-normal'>Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium '> {moment().format('dddd,')}<span className='text-[#706F6F]'>{moment().format(' MMMM D ,YYYY')}</span></p>
        </div>
    );
};

export default Header;