import { BiMap } from 'react-icons/bi';
import { BsPower } from 'react-icons/bs';
import { CgArrowsExchangeAltV } from 'react-icons/cg';
import { FiGrid } from 'react-icons/fi';
import { MdChatBubbleOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Navbar } from './styles';

export function DashboardNavbar() {
    return (
        <Navbar>
            <div className="logo">
                <Link to="/dashboard">
                    <CgArrowsExchangeAltV />
                </Link>
            </div>
            <div>
                <BiMap />
                <FiGrid />
                <MdChatBubbleOutline />
            </div>
            <Link to="/">
                <BsPower />
            </Link>
        </Navbar>
    )
}