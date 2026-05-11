import AdminLayout from "@/components/AdminLayout";

export const metadata = {
  title: 'Admin Dashboard | TechnoshastraX',
};

export default function Layout({ children }) {
  return <AdminLayout>{children}</AdminLayout>;
}
