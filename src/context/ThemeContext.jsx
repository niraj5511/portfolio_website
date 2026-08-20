import { createContext, useCallback, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({ theme: "light", toggleTheme: () => {} });

// Read whatever the blocking script in index.html already decided, rather than
// re-deriving it from localStorage. Re-deriving is how the DOM attribute and
// the React state drift apart.
function currentTheme() {
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(currentTheme);

  const apply = useCallback((next) => {
    setTheme(next);
    if (next === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    apply(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage blocked — the toggle still works for this page view, it just
      // won't be remembered. Not worth surfacing to the visitor.
    }
  }, [theme, apply]);

  // Follow the OS only while the visitor has never made an explicit choice.
  // Once localStorage holds a theme, their choice outranks the system setting —
  // that is the difference between "follow system, remember override" and
  // "follow system, and silently undo the user's click".
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mq) return;

    const onChange = (e) => {
      let saved = null;
      try {
        saved = localStorage.getItem("theme");
      } catch {
        // treat unreadable storage as "no explicit choice"
      }
      if (!saved) apply(e.matches ? "dark" : "light");
    };

    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [apply]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
