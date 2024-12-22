import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { loginFormControls } from "@/config";
import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  const [activeRole, setActiveRole] = useState("manual"); // Set default to "manual"
  const dispatch = useDispatch();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();

    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  }

  function handleRoleSelection(role, email, password) {
    setActiveRole(role);
    setFormData({ email, password });
  }

  function handleManualSelection() {
    setActiveRole("manual");
    setFormData(initialState); // Reset the form to empty
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <p className="mt-2">
          Don't have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>

      <div className="flex justify-between">
        <span>Login as Default User</span>
        <span>
          <button
            className={`px-2 hidden py-1 rounded-ssm ml-2 rounded-[4px] ${
              activeRole === "admin"
                ? "bg-green-600 text-white "
                : "bg-gray-200 border-green-600"
            }`}
            onClick={() =>
              handleRoleSelection("admin", "admin@gmail.com", "iamadmin")
            }
          >
            Admin
          </button>
          <button
            className={`px-2 py-1 rounded-ssm ml-2 rounded-[4px] ${
              activeRole === "user"
                ? "bg-green-600 text-white"
                : "bg-gray-200 border-green-600"
            }`}
            onClick={() =>
              handleRoleSelection("user", "user@gmail.com", "iamuser")
            }
          >
            User
          </button>
          <button
            className={`px-2 py-1 rounded-ssm ml-2 rounded-[4px] ${
              activeRole === "manual"
                ? "bg-green-600 text-white"
                : "bg-gray-200 border-green-600"
            }`}
            onClick={handleManualSelection}
          >
            Manual
          </button>
        </span>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthLogin;
