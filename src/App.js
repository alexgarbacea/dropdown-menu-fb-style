import { ReactComponent as BellIcon } from './components/icons/bell.svg';
import { ReactComponent as MessengerIcon } from './components/icons/messenger.svg';
import { ReactComponent as CaretIcon } from './components/icons/caret.svg';
import { ReactComponent as PlusIcon } from './components/icons/plus.svg';

import Navbar from './components/Navbar';
import NavItem from './components/NavItem';
import DropdownMenu from './components/DropdownMenu';

function App() {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />
      <NavItem icon={<CaretIcon />} dropdownMenu={<DropdownMenu />}/>
    </Navbar>
  );
}


export default App;
