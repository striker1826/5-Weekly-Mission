import { redirect } from "next/navigation";
import { useRouter } from "next/router";

export function useAuthGuard() {
  const router = useRouter();
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("accessToken");

    if (token && router.pathname === "/signin") {
      router.push("/folder");
    } else if (!token && router.pathname === "/folder") {
      router.push("/signin");
    }
  }
}

export const config = {
  matcher: "/about/:path*",
};
