import AddBlogForm from "@/components/forms/AddBlogForm";
import ProtectedRoute from "@/components/shared/ProtectedRoute";

export const metadata = {
  title: "Add Blog | StackStories",
};

const AddBlogPage = () => {
  return (
    <ProtectedRoute>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <AddBlogForm />
      </div>
    </ProtectedRoute>
  );
};

export default AddBlogPage;