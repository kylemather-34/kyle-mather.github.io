import {useState} from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    return (
        <button onClick={() => setIsDarkMode((prev) => !prev)}>
            {isDarkMode ? ( <Sun className="h-6 w-6 text-yellow-300"/> ) 
            : 
            ( <Moon className = "h-6 w-6 text-blue-900" /> 
                
            )}
        </button>
    );
}