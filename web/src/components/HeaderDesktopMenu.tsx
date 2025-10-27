import { UserSession } from "@/user-session";

interface HeaderDesktopMenuProps {
  onLogout(): void
}

export function HeaderDesktopMenu(props: HeaderDesktopMenuProps) {
  const user = UserSession.getUser();

  return (
    <div className="flex flex-col items-center gap-2 py-5 px-6">
      <div className="text-center text-xl font-semibold">
        { user.username || '' }
      </div>
      <a
        href="/main"
        className="text-sky-500">
        Dashboard
      </a>
      <a
        href="/main/setting"
        className="text-sky-500">
        Setting
      </a>
      <a
        onClick={props.onLogout}
        className="text-red-400 cursor-pointer">
        Logout
      </a>
    </div>
  );
}
