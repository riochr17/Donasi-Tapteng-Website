import { HTMLAttributes } from "react";
import { Header } from "./Header";
import { Link } from "@heroui/react";
import { ContactPerson } from "@/utility";

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {}

export function Layout(props: LayoutProps) {
  return (
    <div
      {...props}
      className={`flex flex-col min-h-[100dvh]`}>
      <div className="sticky top-0 z-[29]">
        <Header />
      </div>
      <div className={`
        px-3 py-5
        lg:px-[15%] lg:py-10
        ${props.className || ''}
      `}>
        { props.children }
      </div>
      <div className="p-4 bg-zinc-50 text-center">
        Contact Person WhatsApp <Link href={`https://wa.me/${ContactPerson.wa}`}>{ ContactPerson.phone }</Link>
      </div>
    </div>
  );
}
