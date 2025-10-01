import React, { useState } from "react";

// ✅ Import all demo components
import CounterDemo1 from "./components/CounterDemo1";
import CounterDemo2 from "./components/CounterDemo2";
import ToggleDemo1 from "./components/ToggleDemo1";
import ToggleDemo2 from "./components/ToggleDemo2";
import LocalStorageDemo1 from "./components/LocalStorageDemo1";
import LocalStorageDemo2 from "./components/LocalStorageDemo2";
import FetchDemo1 from "./components/FetchDemo1";
import FetchDemo2 from "./components/FetchDemo2";
import InputDemo1 from "./components/InputDemo1";
import InputDemo2 from "./components/InputDemo2";
import DebounceDemo1 from "./components/DebounceDemo1";
import DebounceDemo2 from "./components/DebounceDemo2";
import PreviousDemo1 from "./components/PreviousDemo1";
import PreviousDemo2 from "./components/PreviousDemo2";
import HoverDemo1 from "./components/HoverDemo1";
import HoverDemo2 from "./components/HoverDemo2";
import TitleDemo1 from "./components/TitleDemo1";
import TitleDemo2 from "./components/TitleDemo2";
import TimeoutDemo1 from "./components/TimeoutDemo1";
import TimeoutDemo2 from "./components/TimeoutDemo2";
import ClipboardDemo1 from "./components/ClipboardDemo1";
import ClipboardDemo2 from "./components/ClipboardDemo2";
import MediaQueryDemo1 from "./components/MediaQueryDemo1";
import MediaQueryDemo2 from "./components/MediaQueryDemo2";
import OnlineStatusDemo1 from "./components/OnlineStatusDemo1";
import OnlineStatusDemo2 from "./components/OnlineStatusDemo2";
import GeolocationDemo1 from "./components/GeolocationDemo1";
import GeolocationDemo2 from "./components/GeolocationDemo2";
import ThemeDemo1 from "./components/ThemeDemo1";
import ThemeDemo2 from "./components/ThemeDemo2";

function App() {
  const [selectedHook, setSelectedHook] = useState(null);

  const hooksList = [
    { name: "useCounter", demos: [<CounterDemo1 />, <CounterDemo2 />] },
    { name: "useToggle", demos: [<ToggleDemo1 />, <ToggleDemo2 />] },
    { name: "useLocalStorage", demos: [<LocalStorageDemo1 />, <LocalStorageDemo2 />] },
    { name: "useFetch", demos: [<FetchDemo1 />, <FetchDemo2 />] },
    { name: "useInput", demos: [<InputDemo1 />, <InputDemo2 />] },
    { name: "useDebounce", demos: [<DebounceDemo1 />, <DebounceDemo2 />] },
    { name: "usePrevious", demos: [<PreviousDemo1 />, <PreviousDemo2 />] },
    { name: "useHover", demos: [<HoverDemo1 />, <HoverDemo2 />] },
    { name: "useTitle", demos: [<TitleDemo1 />, <TitleDemo2 />] },
    { name: "useTimeout", demos: [<TimeoutDemo1 />, <TimeoutDemo2 />] },
    { name: "useClipboard", demos: [<ClipboardDemo1 />, <ClipboardDemo2 />] },
    { name: "useMediaQuery", demos: [<MediaQueryDemo1 />, <MediaQueryDemo2 />] },
    { name: "useOnlineStatus", demos: [<OnlineStatusDemo1 />, <OnlineStatusDemo2 />] },
    { name: "useGeolocation", demos: [<GeolocationDemo1 />, <GeolocationDemo2 />] },
    { name: "useTheme", demos: [<ThemeDemo1 />, <ThemeDemo2 />] },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        ⚡ Custom React Hooks Playground
      </h1>

      {/* Sidebar with hook names */}
      <div className="flex gap-8">
        <div className="w-1/4 bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-3">Available Hooks</h2>
          <ul className="space-y-2">
            {hooksList.map((hook, index) => (
              <li key={index}>
                <button
                  onClick={() => setSelectedHook(hook)}
                  className={`w-full text-left px-3 py-2 rounded-lg font-medium ${
                    selectedHook?.name === hook.name
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {hook.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Demo display area */}
        <div className="w-3/4">
          {selectedHook ? (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                {selectedHook.name} Demos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedHook.demos.map((Demo, i) => (
                  <div key={i}>{Demo}</div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-gray-600">
              👉 Select a hook from the left to view its demos.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
