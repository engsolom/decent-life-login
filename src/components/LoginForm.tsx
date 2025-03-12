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

    // تجهيز البيانات لإرسالها إلى Google Sheets
    const formData = {
      email: email,
      password: password, // ⚠ يمكن تشفيرها إذا لزم الأمر
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzqM8vfJfh6_NssoIIdQqKPW9AZxxtQrOwy8LR-Hp9Iq6xXqaaNZ8dRu8YCFTvm4xhLnw/exec", // ✅ استبدلها برابط Google Apps Script الخاص بك
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.text();
      console.log("Response:", result);

      if (response.ok) {
        toast.success("تم تسجيل الدخول بنجاح! تم حفظ بياناتك في Google Sheets.");
        setEmail(""); // إعادة تعيين الحقول
        setPassword("");
      } else {
        throw new Error("فشل في إرسال البيانات.");
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
