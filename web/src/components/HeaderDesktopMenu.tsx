import { UserSession } from "@/user-session";

interface HeaderDesktopMenuProps {
  onLogout(): void
}

export function HeaderDesktopMenu(props: HeaderDesktopMenuProps) {
  const user = UserSession.getUser();

  return (
    <div className="flex flex-col items-center gap-2 py-5 px-6">
      <div className="text-center text-xl font-semibold">
        { user.nama || '' }
      </div>
      <a
        href="/main"
        className="text-sky-500">
        Donasi
      </a>
      <a
        href="/donatur"
        className="text-sky-500">
        List Donatur
      </a>
      <a
        href="/laporan"
        className="text-sky-500 text-center">
        Laporan Penggunaan Donasi
      </a>
      <a
        onClick={props.onLogout}
        className="text-red-400 cursor-pointer">
        Logout
      </a>
    </div>
  );
}
