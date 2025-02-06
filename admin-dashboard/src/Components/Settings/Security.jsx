import { Lock } from "lucide-react";
import SettingsSection from "./SettingsSection";
import ToggleSwitch from "./ToggleSwitch";
import { useState } from "react";

const Security = () => {
  const [security, setSecurity] = useState(true);

  return (
    <SettingsSection icon={Lock} title={"Security"}>
      <ToggleSwitch
        label={"Two Factor Authorization"}
        isOn={security}
        onToggle={() => setSecurity(!security)}
      ></ToggleSwitch>

      <div className="mt-4">
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded 
        transition duration-200
        "
        >
          Change Password
        </button>
      </div>
    </SettingsSection>
  );
};

export default Security;
