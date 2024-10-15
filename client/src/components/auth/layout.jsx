import { Outlet } from "react-router-dom";
import authImg from "../../assets/authImg.png";
import { GrSkype } from "react-icons/gr";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-[90%] m-auto bg-green-100">
      <div
        className="hidden lg:flex items-center justify-center w-1/2 bg-green-100 px-96"
        style={{
          backgroundImage: `url(${authImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-md bg-red-300 space-y-6 text-center text-primary-foreground">
          {/* <h1
            className="text-4xl font-semibold tracking-tight"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            {" "}
            Welcome to
            <GrSkype className="h-7 ml-2 w-7 inline mb-0.5 text-green-600" />
            <span className="text-green-600 text-3xl letter-spacing-[10px]">
              wiftkart
            </span>{" "}
            ECommerce
          </h1> */}
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex w-full gap-10 flex-col">
          <h1 className="text text-3xl font-semibold text-center">
            Welcome to
            <GrSkype className="h-7 ml-2 w-7 inline mb-0.5 text-green-600" />
            <span className="text-green-600 text-3xl letter-spacing-[10px]">
              wiftkart
            </span>{" "}
            ECommerce
          </h1>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
