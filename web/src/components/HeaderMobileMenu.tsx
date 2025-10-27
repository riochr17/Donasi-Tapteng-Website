import { useSystemConfig } from "@/hooks/useSystemConfig";
import { UserSession } from "@/user-session";

interface HeaderMobileMenuProps {
  onLogout(): void
}

export function HeaderMobileMenu(props: HeaderMobileMenuProps) {
  const user = UserSession.getUser();
  const { system_name } = useSystemConfig();
  
  return (
    <div className="flex flex-col items-end gap-4 py-5 px-7">
      <a href="/" className="flex items-center gap-3">
        <div className="text-2xl font-semibold">
          { system_name }
        </div>
      </a>
      <div className="pl-3 font-semibold">
        { user.username }
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
