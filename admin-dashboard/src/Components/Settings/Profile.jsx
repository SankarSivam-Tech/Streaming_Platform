import { User } from "lucide-react";
import SettingsSection from "./SettingsSection";

const Profile = () => {
  return (
    <SettingsSection icon={User} title={"Profile"}>
      <section className="flex items-center flex-col sm:flex-row mb-6">
        <img
          src="./photo.jpg"
          alt=""
          className="rounded-full size-20 object-cover mr-4"
        />

        <div>
          <h2 className="text-lg font-semibold text-gray-100">Veera Sankar</h2>
          <p className="text-gray-400">Veerasankar@gravitorix.com</p>
        </div>
      </section>

      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto">
        Edit Profile
      </button>
    </SettingsSection>
  );
};

export default Profile;
