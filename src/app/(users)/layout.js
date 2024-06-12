import UserNavbar from "@/components/user/UserNavbar";
import UserFooter from "@/components/user/Userfooter";
export const metadata = {
  title: "IndieStreet",
  description: "Generated by create next app",
};

export default function UserLayout({ children }) {
  return (
    <main className=" min-h-[33rem]">
      <UserNavbar />
      {children}
      <UserFooter />
    </main>
  );
}
