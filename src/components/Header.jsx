import Logo from "./Logo";
import Toggle from "./Toggle";

export default function Header() {
    return (
        <div className="flex items-center justify-between h-16 bg-darkBlue padding">
            <Logo />
            <Toggle />
        </div>
    )
 }