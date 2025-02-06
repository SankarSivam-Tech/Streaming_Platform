import Header from "../Components/common/Header";
import ConnectedAccounts from "../Components/Settings/ConnectedAccounts";
import DangerZone from "../Components/Settings/DangerZone";
import Notifications from "../Components/Settings/Notifications";
import Profile from "../Components/Settings/Profile";
import Security from "../Components/Settings/Security";

const SettingsPage = () => {
  return (
    <main className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title="Settings" />

      <section className="max-w-4xl mx-auto py-6 px-4 lg:px-8">
        <Profile />

        <Notifications/>

        <Security/>

        <ConnectedAccounts/>

        <DangerZone/>
      </section>
    </main>
  );
};

export default SettingsPage;
