import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import TermsOfService from '@/components/TermsOfService.jsx'
import { 
  Code, 
  Globe, 
  Smartphone, 
  Shield, 
  CreditCard, 
  Users, 
  CheckCircle, 
  ArrowLeft,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [paymentAmount, setPaymentAmount] = useState('')
  const [customerName, setCustomerName] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  const [projectDescription, setProjectDescription] = useState('')

  const services = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "تطوير البرمجيات التجارية",
      description: "حلول برمجية متقدمة للشركات والمؤسسات التجارية لتحسين الكفاءة والإنتاجية",
      features: ["أنظمة إدارة المحتوى", "تطبيقات المحاسبة", "أنظمة إدارة العملاء"]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-green-600" />,
      title: "البرمجيات المنزلية",
      description: "تطبيقات ذكية للاستخدام المنزلي تجعل حياتك أسهل وأكثر راحة",
      features: ["تطبيقات الهواتف الذكية", "برامج إدارة المنزل", "حلول الأتمتة المنزلية"]
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: "بوابات الويب",
      description: "مواقع ويب احترافية وبوابات إلكترونية متطورة لجميع أنواع الأعمال",
      features: ["مواقع التجارة الإلكترونية", "البوابات الحكومية", "منصات التعلم الإلكتروني"]
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "استشارات تكنولوجيا المعلومات",
      description: "خدمات استشارية متخصصة لمساعدة الشركات في اتخاذ القرارات التقنية الصحيحة",
      features: ["تحليل الأنظمة", "استراتيجيات التحول الرقمي", "أمن المعلومات"]
    }
  ]

  const handlePayPalPayment = () => {
    if (!paymentAmount || !customerName || !customerEmail) {
      alert('يرجى ملء جميع الحقول المطلوبة')
      return
    }
    
    // Redirect to PayPal with the provided link
    const paypalUrl = `https://www.paypal.com/paypalme/BROSAPPLIMITED/${paymentAmount}`
    window.open(paypalUrl, '_blank')
  }

  // Show Terms of Service page if currentPage is 'terms'
  if (currentPage === 'terms') {
    return <TermsOfService onBack={() => setCurrentPage('home')} />
  }

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
                <p className="text-sm text-gray-600">حلول تقنية متطورة</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              متاح للدفع الآن
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section flex items-center justify-center px-4 py-20">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              نحول أفكارك إلى
              <span className="block text-yellow-300">حلول تقنية متطورة</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              شركة BROS APP LIMITED متخصصة في تطوير البرمجيات التجارية والمنزلية، 
              بوابات الويب، واستشارات تكنولوجيا المعلومات. نقدم حلولاً مبتكرة تلبي احتياجاتك التقنية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="paypal-button text-white px-8 py-4 text-lg"
                onClick={() => document.getElementById('payment-section').scrollIntoView({ behavior: 'smooth' })}
              >
                <CreditCard className="w-5 h-5 ml-2" />
                ادفع الآن عبر PayPal
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 px-8 py-4 text-lg"
                onClick={() => document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' })}
              >
                تصفح خدماتنا
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">خدماتنا المتميزة</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم مجموعة شاملة من الخدمات التقنية المتطورة لمساعدة عملائنا على تحقيق أهدافهم الرقمية
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 ml-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section id="payment-section" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">الدفع الآمن عبر PayPal</h2>
              <p className="text-xl text-gray-600">
                ادفع بأمان وسهولة مقابل خدماتنا التقنية المتميزة
              </p>
            </div>

            <Card className="bros-card shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  نموذج الدفع
                </CardTitle>
                <CardDescription className="text-gray-600">
                  املأ البيانات أدناه للمتابعة إلى PayPal
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="customerName" className="text-gray-700 font-medium">
                      الاسم الكامل *
                    </Label>
                    <Input
                      id="customerName"
                      placeholder="أدخل اسمك الكامل"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="text-right"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="customerEmail" className="text-gray-700 font-medium">
                      البريد الإلكتروني *
                    </Label>
                    <Input
                      id="customerEmail"
                      type="email"
                      placeholder="example@email.com"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="text-left"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="paymentAmount" className="text-gray-700 font-medium">
                    المبلغ (بالدولار الأمريكي) *
                  </Label>
                  <Input
                    id="paymentAmount"
                    type="number"
                    placeholder="100"
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(e.target.value)}
                    className="text-center text-lg font-semibold"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectDescription" className="text-gray-700 font-medium">
                    وصف المشروع أو الخدمة (اختياري)
                  </Label>
                  <Textarea
                    id="projectDescription"
                    placeholder="اكتب وصفاً مختصراً للمشروع أو الخدمة المطلوبة..."
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    className="text-right min-h-[100px]"
                    rows={4}
                  />
                </div>

                <Button 
                  onClick={handlePayPalPayment}
                  className="w-full paypal-button text-white py-4 text-lg font-semibold"
                  size="lg"
                >
                  <CreditCard className="w-5 h-5 ml-2" />
                  متابعة الدفع عبر PayPal
                </Button>

                <div className="text-center text-sm text-gray-500">
                  <p>سيتم توجيهك إلى PayPal لإتمام عملية الدفع بأمان</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">تواصل معنا</h2>
            <p className="text-xl text-gray-300">
              نحن هنا لمساعدتك في تحقيق أهدافك التقنية
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">البريد الإلكتروني</h3>
              <p className="text-gray-300">info@brosapp.com</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">الهاتف</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">الموقع</h3>
              <p className="text-gray-300">المملكة المتحدة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 space-x-reverse mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold">BROS APP LIMITED</h3>
                <p className="text-sm text-gray-400">حلول تقنية متطورة</p>
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="mb-2">
                <button 
                  onClick={() => setCurrentPage('terms')}
                  className="text-blue-400 hover:text-blue-300 underline text-sm mb-2 block"
                >
                  شروط الخدمة
                </button>
              </div>
              <p className="text-gray-400">
                © 2024 BROS APP LIMITED. جميع الحقوق محفوظة.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

