# مشروع الملف الشخصي للطلبة

## نظرة عامة
مشروع بسيط لإنشاء موقع ملف شخصي للطلبة باستخدام HTML، CSS، و JavaScript. هذا المشروع مصمم لتعليم طلبة الجامعة أساسيات Git و GitHub من خلال مشروع عملي وممتع.

## محتويات المشروع
- `index.html` - الهيكل الأساسي للموقع
- `styles/index.css` - التنسيقات والتصميم
- `src/index.js` - الوظائف التفاعلية
- `README.md` - دليل المشروع

## الميزات
- تصميم متجاوب يعمل على جميع الأجهزة
- قسم معلومات شخصية
- عرض المشاريع بتصميم بطاقات
- تأثيرات تفاعلية وأنيميشن
- تمرير سلس بين الأقسام
- تصميم عربي من اليمين لليسار

## التطوير المحلي

### المتطلبات
- متصفح ويب حديث
- محرر نصوص (VS Code, Sublime Text, إلخ)

### تشغيل المشروع محلياً
1. انسخ المستودع:
```bash
git clone https://github.com/username/student-portfolio.git
cd student-portfolio
```

2. استخدم Live Server extension لتشغيل المشروع:
   - تأكد من تثبيت **Live Server** extension من Ritwick Dey في VS Code
   - انقر بالزر الأيمن على `index.html` واختر **"Open with Live Server"**
   - أو اضغط على زر **"Go Live"** في شريط الحالة السفلي
   - سيتم فتح المشروع تلقائياً في المتصفح على `http://127.0.0.1:5500`

## التخصيص
1. غيّر المعلومات الشخصية في `index.html`
2. أضف مشاريعك الخاصة في قسم المشاريع
3. خصص الألوان والخطوط في `styles/index.css`
4. أضف وظائف تفاعلية جديدة في `src/index.js`

## النشر باستخدام GitHub Pages

1. ارفع المشروع إلى مستودع GitHub
2. اذهب إلى Settings > Pages
3. اختر source: Deploy from a branch
4. اختر branch: main و folder: / (root)
5. احفظ التغييرات
6. سيصبح الموقع متاحاً على: `https://username.github.io/repository-name`

## مهام Git للممارسة
1. **أول commit**: أضف الملفات الأساسية
2. **تخصيص المحتوى**: غيّر المعلومات الشخصية
3. **إضافة مشروع جديد**: أضف بطاقة مشروع في HTML و CSS
4. **تحسين التصميم**: غيّر الألوان أو الخطوط
5. **إضافة ميزة تفاعلية**: أضف وظيفة جديدة في JavaScript

## نصائح للتعلم
- استخدم commit messages واضحة ووصفية
- اعمل على فروع منفصلة للميزات الجديدة
- تدرب على merge و rebase
- استخدم issues و pull requests للتعاون

## استخدام أيقونات Iconify

### ما هو Iconify؟
Iconify هو نظام أيقونات موحد يوفر الوصول لأكثر من 150,000 أيقونة مفتوحة المصدر من مجموعات مختلفة في مكتبة واحدة.

### طريقة الإضافة
1. **إضافة مكتبة Iconify**:
```html
<script src="https://code.iconify.design/3/3.1.1/iconify.min.js"></script>
```

2. **استخدام الأيقونات**:
```html
<!-- الطريقة المفضلة: span مع data-icon -->
<span class="iconify-inline icon" data-icon="ph:heart-fill"></span>
<span class="iconify-inline icon" data-icon="mdi:github"></span>
<span class="iconify-inline icon" data-icon="ic:baseline-email"></span>

<!-- أو باستخدام العنصر المخصص -->
<iconify-icon icon="ph:heart-fill"></iconify-icon>
```

3. **تخصيص الأيقونات بـ CSS**:
```css
.iconify-inline {
  font-size: 1.5rem;
  color: #333;
}

/* تخصيص أيقونة محددة */
.social-icon {
  font-size: 2rem;
  color: #0066cc;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: #004499;
}
```

### مجموعات الأيقونات الشائعة
- **Phosphor**: `ph:icon-name` - أيقونات حديثة ومتنوعة
- **Material Design**: `mdi:icon-name` - أيقونات جوجل
- **Heroicons**: `heroicons:icon-name` - أيقونات بسيطة وأنيقة
- **Font Awesome**: `fa:icon-name` - الأيقونات الأكثر شهرة
- **Tabler**: `tabler:icon-name` - أيقونات مصممة للواجهات

### البحث عن الأيقونات
يمكنك البحث عن الأيقونات وتصفح المجموعات المختلفة في:
**🔗 [مجموعات أيقونات Iconify](https://icon-sets.iconify.design/)**

### نصائح مهمة
- استخدم أسماء أيقونات واضحة ومفهومة
- حافظ على تناسق حجم الأيقونات في نفس القسم
- اختبر الأيقونات على خلفيات مختلفة للتأكد من الوضوح
- استخدم مجموعة واحدة من الأيقونات للحفاظ على التصميم المتناسق

### مثال من المشروع
```html
<!-- أيقونة الملف الشخصي -->
<span class="iconify-inline icon" data-icon="ph:user-circle-fill"></span>

<!-- أيقونات المشاريع -->
<span class="iconify-inline icon" data-icon="ph:calculator-fill"></span>
<span class="iconify-inline icon" data-icon="ph:list-checks-fill"></span>

<!-- أيقونات التواصل الاجتماعي -->
<span class="iconify-inline icon" data-icon="ph:envelope-bold"></span>
<span class="iconify-inline icon" data-icon="ph:github-logo-bold"></span>
```

## الدعم الفني
إذا واجهت أي مشكلة، يمكنك:
- البحث في issues المستودع
- إنشاء issue جديد
- مراجعة documentation الرسمي لـ Git و GitHub