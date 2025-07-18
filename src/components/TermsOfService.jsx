import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { ArrowLeft, Code } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const TermsOfService = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 arabic-text">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">BROS APP LIMITED</h1>
                <p className="text-sm text-gray-600">شروط الخدمة</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              onClick={onBack}
              className="flex items-center space-x-2 space-x-reverse"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>العودة للصفحة الرئيسية</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Terms Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl">
            <CardHeader className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="text-3xl font-bold mb-2">شروط الخدمة</CardTitle>
              <p className="text-blue-100">
                مرحباً بك في موقعنا الإلكتروني. باستخدامك لهذا الموقع، فإنك توافق على الالتزام بالشروط والأحكام التالية.
              </p>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2">
                  1. الموافقة على الشروط
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  استخدامك للموقع يعني أنك قرأت وفهمت هذه الشروط وتوافق على الالتزام بها بالكامل. إذا لم توافق على هذه الشروط، يرجى عدم استخدام الموقع.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2">
                  2. تحديث الشروط
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  نحتفظ بالحق في تعديل هذه الشروط في أي وقت دون إشعار مسبق. سيتم نشر التعديلات على هذه الصفحة، ويُعد استمرار استخدامك للموقع بعد النشر موافقة على التعديلات.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2">
                  3. الاستخدام المشروع
                </h2>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li>• يجب استخدام الموقع فقط لأغراض قانونية ومشروعة وفقًا لقوانين المملكة المتحدة.</li>
                  <li>• يُمنع استخدام الموقع لنشر أو توزيع محتوى غير قانوني أو مخل بالآداب أو ينتهك حقوق الغير.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2">
                  4. حقوق الملكية الفكرية
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  جميع الحقوق المتعلقة بالمحتوى، التصميم، الشعارات، والبرمجيات على الموقع مملوكة لنا أو للمرخصين لدينا، ومحميّة بموجب قوانين حقوق النشر والعلامات التجارية في المملكة المتحدة.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2">
                  5. الخصوصية
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  نلتزم بحماية بياناتك الشخصية وفقًا لقانون حماية البيانات (UK GDPR). يرجى مراجعة سياسة الخصوصية الخاصة بنا لمعرفة كيفية جمع واستخدام معلوماتك.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2">
                  6. المدفوعات
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  إذا كانت هناك خدمات مدفوعة، فستتم المعالجة عبر بوابات دفع آمنة. جميع الأسعار تشمل ضريبة القيمة المضافة (VAT) إن طُبقت.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2">
                  7. إنهاء الخدمة
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  يجوز لنا تعليق أو إنهاء وصولك للموقع دون إشعار إذا خالفت أي من هذه الشروط.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2">
                  8. حدود المسؤولية
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  نحن لا نضمن أن يكون الموقع خاليًا من الأخطاء أو الفيروسات. استخدامك للموقع يكون على مسؤوليتك الشخصية.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2">
                  9. القانون المعمول به
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  تخضع هذه الشروط لقوانين إنجلترا وويلز، وتكون المحاكم الإنجليزية هي المختصة بالنظر في أي نزاع ينشأ بشأنها.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2">
                  10. سياسة الاسترداد
                </h2>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 font-semibold mb-2">
                    جميع المشتريات نهائية
                  </p>
                  <p className="text-red-700 leading-relaxed">
                    بمجرد إتمام الدفع مقابل أي من خدماتنا أو منتجاتنا الرقمية، لا يمكن استرداد المبلغ أو إرجاع الخدمة. 
                    باستخدامك للموقع وشرائك لأي خدمة، فإنك تقرّ وتوافق على هذه السياسة.
                  </p>
                </div>
              </section>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                <p className="text-blue-800 font-semibold text-center">
                  بمجرد تحويل الأموال، فإنك توافق على جميع الشروط المذكورة أعلاه
                </p>
              </div>

              <div className="text-center mt-8">
                <Button 
                  onClick={onBack}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                >
                  العودة للصفحة الرئيسية
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService

