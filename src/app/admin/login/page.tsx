"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (password === "admin123") {
      localStorage.setItem("admin-auth", "true");
      router.push("/admin");
    } else {
      alert("Sai mật khẩu!");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20">
      <h2 className="text-xl font-bold mb-4">Đăng nhập Admin</h2>
      <input
        className="border p-2 w-full mb-4"
        type="password"
        placeholder="Nhập mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Đăng nhập
      </button>
    </div>
  );
}
