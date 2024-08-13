import NavbarSecondary from "@/components/navbar-secondary";

export default function ImagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarSecondary />
      <main>{children}</main>
    </>
  );
}
