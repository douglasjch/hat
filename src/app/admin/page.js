import { isUserAdmin } from "@app/neondb/users/auth0/isUserAdmin";
import { redirect } from "next/navigation";

async function AdminPage() {
  const isAdmin = await isUserAdmin();

  if (!isAdmin) {
    return redirect("/unauthorized");
  }

  return (
    <div className="min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="p-6 bg-white rounded-lg shadow">
          <h1 className="mb-6 text-3xl font-bold text-gray-900">
            Admin Dashboard
          </h1>
          <p className="mb-4 text-gray-600">
            Welcome to the admin area. This page is only accessible to
            administrators.
          </p>
          <div className="pt-4 border-t border-gray-200">
            <h2 className="mb-3 text-xl font-semibold text-gray-800">
              Admin Controls
            </h2>
            <p className="text-gray-600">
              Admin functionality will be added here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;