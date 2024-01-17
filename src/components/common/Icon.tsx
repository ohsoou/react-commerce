import Link from 'next/link';
import { IconContext } from 'react-icons';
import { IconType } from 'react-icons/lib';

interface Props {
    Icon: IconType;
    nameOfIcon?: string;
    linkAddress: string;
    option?: IconContext
}
const Icon = ({ Icon, nameOfIcon, linkAddress, option }: Props) => {
    const iconOption = option ?? {size : '28px', color: 'rgb(124,124,125)'}
    return (
        <Link
            href={linkAddress}
            className="text-primary1 relative block text-center transition hover:text-hovercolor"
            scroll={false}
        >
            <div className="px-3 text-2xl">
                <IconContext.Provider value={iconOption}>
                <Icon />
                </IconContext.Provider>
            </div>
            <div className="pt-1 text-xs leading-4">{nameOfIcon}</div>
        </Link>
    );
};

export default Icon;
