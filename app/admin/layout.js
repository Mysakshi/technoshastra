import AdminLayout from "@/components/AdminLayout";

export const metadata = {
  title: 'Admin Dashboard | Technoshashtra Community',
};

export default function Layout({ children }) {
  return <AdminLayout>{children}</AdminLayout>;
}
