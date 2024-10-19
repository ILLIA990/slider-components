import { useMediaQuery } from 'react-responsive';
import DesktopComponent from "./components/DesktopComponent.jsx";
import MobileComponent from "./components/MobileComponent.jsx";

export default function App() {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <div>
            {isMobile ? <MobileComponent/> : <DesktopComponent />}
        </div>
    );
}
