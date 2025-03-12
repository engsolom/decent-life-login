import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      fields: {
        Email: email,
        Password: password,
      },
    };

    try {
      const response = await fetch(
        "https://api.airtable.com/v0/appVIknwkh8pEH2er/tblLoaHmFwooqY5JP",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      console.log("Response:", result);

      if (response.ok) {
        toast.success("تم تسجيل الدخول بنجاح! تم حفظ بياناتك.");
      } else {
        throw new Error(result.error?.message || "فشل في تسجيل البيانات");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("تعذر حفظ البيانات، حاول مرة أخرى.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">تسجيل الدخول</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
          disabled={isLoading}
        >
          {isLoading ? "جاري التسجيل..." : "تسجيل الدخول"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
