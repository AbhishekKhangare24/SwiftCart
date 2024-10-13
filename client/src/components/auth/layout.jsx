import { Outlet } from "react-router-dom";
import authImg from "../../assets/authImg.png";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-[90%] m-auto bg-emerald-500">
      <div
        className="hidden lg:flex items-center justify-center w-1/2 bg-red-300 px-96"
        style={{
          backgroundImage: `url(${authImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-md space-y-6 text-center text-primary-foreground">
          <h1
            className="text-4xl font-semibold tracking-tight"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            {/* Welcome to Swiftkart ECommerce Store */}
          </h1>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
