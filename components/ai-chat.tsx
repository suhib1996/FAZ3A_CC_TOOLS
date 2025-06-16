"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bot, Send, User, X, Maximize2, Minimize2 } from "lucide-react"

type Message = {
  role: "user" | "assistant"
  content: string
}

// قاعدة معرفة نموذج المساعد الذكي
const knowledgeBase = {
  platforms: {
    superLive: {
      name: "Super Live",
      description: "منصة بث مباشر شهيرة مع نظام مكافآت متميز وفرص كبيرة للمذيعين",
      salary: "150$ شهريًا",
      workHours: "3 ساعات يوميًا لمدة 15 يوم شهريًا",
      downloadLink: "https://sprlv.link/y8x2c09d",
    },
    partystar: {
      name: "Party Star",
      description: "منصة تفاعلية للبث المباشر مع ميزات فريدة وجمهور واسع من المستخدمين",
      features: ["عمولة مرتفعة", "جوائز أسبوعية", "مسابقات شهرية"],
    },
    popoLive: {
      name: "Popo Live",
      description: "منصة متنامية للبث المباشر توفر فرصًا كبيرة للمذيعين الجدد والمحترفين",
      regularSystem: "مكافآت: 3000 - 70000 كونز لكل مهمة، 100,000 كونز = 10$",
      fixedSalary: "40$ أسبوعيًا مقابل 18 ساعة عمل وتحقيق 500,000 كونز",
      agencyId: "4207397",
      downloadLink: "https://h5-global.v.show/inviteNew/share?c=poppo&link_id=5375297&user_id=4207397",
    },
  },
  financial: {
    withdrawal: {
      methods: ["تحويل بنكي", "USDT", "Bitcoin", "استلام نقدي"],
      minimumAmount: "10$",
      schedule: "يومي 16 و 30 من كل شهر",
    },
    advance: {
      requirements: "تحقيق هدف 500$+ لمدة 3 أشهر",
      process: "تخصيص المبلغ من الرصيد القادم",
    },
  },
  badges: {
    types: [
      { name: "حساب مؤكد", symbol: "✓", color: "زرقاء", benefits: "تخفيض عمولات السحب وأولوية في البحث" },
      { name: "حساب مضيف", symbol: "🎤", color: "ذهبية", benefits: "وصول مبكر إلى الميزات الجديدة" },
      { name: "حساب مشرف", symbol: "⭐", color: "حمراء", benefits: "صلاحيات مراقبة المحتوى" },
      { name: "حساب بروكر", symbol: "🤝", color: "خضراء", benefits: "عمولة إضافية على أرباح المحالين" },
    ],
  },
  competitions: {
    types: [
      { name: "تحدي المشاهدات", description: "مسابقة لتحقيق أكبر عدد من المشاهدات" },
      { name: "تحدي الإيرادات", description: "مسابقة لتحقيق أعلى إيرادات" },
    ],
    prizes: ["مكافآت نقدية", "ترقية العضوية", "شارات خاصة"],
  },
  contacts: {
    femaleSupervisor: { name: "ميسو", whatsapp: "https://wa.me/963942236479" },
    maleSupervisor: { name: "ابن الشيخ", whatsapp: "https://wa.me/905526455582" },
    agent: { whatsapp: "https://wa.me/962781477774", email: "halman555@yahoo.com" },
  },
  membership: {
    basic: { name: "أساسية", target: "للمضيفين العاديين والجدد" },
    premium: { name: "مميزة", target: "للمذيعين التوبات", features: ["امتيازات خاصة", "شارة مميز"] },
  },
}

export function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "مرحبًا! أنا المساعد الذكي لنظام إدارة الوكالات. كيف يمكنني مساعدتك اليوم؟",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isMinimized, setIsMinimized] = useState(true)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  // وظيفة لتحليل استفسار المستخدم وإنشاء رد مناسب
  const analyzeQuery = (query: string): string => {
    const queryLower = query.toLowerCase()

    // التحقق من الاستفسارات المتعلقة بالمنصات
    if (
      queryLower.includes("منصات") ||
      queryLower.includes("بث") ||
      queryLower.includes("البث") ||
      queryLower.includes("super") ||
      queryLower.includes("سوبر") ||
      queryLower.includes("party") ||
      queryLower.includes("بارتي") ||
      queryLower.includes("popo") ||
      queryLower.includes("بوبو")
    ) {
      if (queryLower.includes("super") || queryLower.includes("سوبر")) {
        return `منصة ${knowledgeBase.platforms.superLive.name} هي ${knowledgeBase.platforms.superLive.description}. 
        تقدم راتبًا ثابتًا قدره ${knowledgeBase.platforms.superLive.salary} مقابل ${knowledgeBase.platforms.superLive.workHours}.
        يمكنك تحميل التطبيق من خلال الرابط: ${knowledgeBase.platforms.superLive.downloadLink}
        هل ترغب في معرفة المزيد عن شروط الانضمام أو المكافآت؟`
      }

      if (queryLower.includes("party") || queryLower.includes("بارتي")) {
        return `منصة ${knowledgeBase.platforms.partystar.name} هي ${knowledgeBase.platforms.partystar.description}.
        تتميز المنصة بـ ${knowledgeBase.platforms.partystar.features.join("، ")}.
        هل ترغب في معرفة المزيد عن كيفية الانضمام إلى هذه المنصة؟`
      }

      if (queryLower.includes("popo") || queryLower.includes("بوبو")) {
        return `منصة ${knowledgeBase.platforms.popoLive.name} هي ${knowledgeBase.platforms.popoLive.description}.
        تقدم نظامين للعمل:
        1. النظام العادي: ${knowledgeBase.platforms.popoLive.regularSystem}
        2. نظام الراتب الثابت: ${knowledgeBase.platforms.popoLive.fixedSalary}
        للانضمام، قم بتحميل التطبيق وإدخال ID الوكالة: ${knowledgeBase.platforms.popoLive.agencyId}
        رابط التحميل: ${knowledgeBase.platforms.popoLive.downloadLink}`
      }

      return `نحن ندعم ثلاث منصات رئيسية للبث المباشر:
      1. ${knowledgeBase.platforms.superLive.name}: ${knowledgeBase.platforms.superLive.description}
      2. ${knowledgeBase.platforms.partystar.name}: ${knowledgeBase.platforms.partystar.description}
      3. ${knowledgeBase.platforms.popoLive.name}: ${knowledgeBase.platforms.popoLive.description}
      
      هل ترغب في معرفة المزيد عن منصة معينة؟`
    }

    // التحقق من الاستفسارات المالية
    if (
      queryLower.includes("سحب") ||
      queryLower.includes("إيداع") ||
      queryLower.includes("تحويل") ||
      queryLower.includes("مال") ||
      queryLower.includes("راتب") ||
      queryLower.includes("سلفة") ||
      queryLower.includes("أرباح") ||
      queryLower.includes("دفع")
    ) {
      if (queryLower.includes("سحب") || queryLower.includes("تحويل")) {
        return `نوفر عدة طرق للسحب: ${knowledgeBase.financial.withdrawal.methods.join("، ")}.
        الحد الأدنى للسحب هو ${knowledgeBase.financial.withdrawal.minimumAmount}.
        يتم السحب التلقائي إلى حساب الوكيل ${knowledgeBase.financial.withdrawal.schedule} إذا تم تفعيل هذه الخدمة.
        هل تحتاج إلى مساعدة في إجراء عملية سحب؟`
      }

      if (queryLower.includes("سلفة") || queryLower.includes("قرض")) {
        return `يمكنك الحصول على سلفة إذا حققت ${knowledgeBase.financial.advance.requirements}.
        يتم ${knowledgeBase.financial.advance.process}.
        هل ترغب في معرفة المزيد عن شروط السلف؟`
      }

      return `نوفر خدمات مالية متكاملة تشمل:
      - السحب: متاح عبر ${knowledgeBase.financial.withdrawal.methods.join("، ")}
      - السلف: متاحة بعد ${knowledgeBase.financial.advance.requirements}
      - تحويل الأرباح: يتم تلقائيًا ${knowledgeBase.financial.withdrawal.schedule}
      
      هل تحتاج مساعدة في إجراء عملية مالية معينة؟`
    }

    // التحقق من الاستفسارات المتعلقة بالشارات والمسابقات
    if (
      queryLower.includes("شارات") ||
      queryLower.includes("مسابقات") ||
      queryLower.includes("جوائز") ||
      queryLower.includes("تحدي") ||
      queryLower.includes("مكافآت")
    ) {
      if (queryLower.includes("شارات")) {
        const badgesInfo = knowledgeBase.badges.types
          .map((badge) => `${badge.name} (${badge.symbol} ${badge.color}): ${badge.benefits}`)
          .join("\n- ")

        return `نظام الشارات لدينا يتضمن عدة أنواع:
        - ${badgesInfo}
        
        هل ترغب في معرفة كيفية الحصول على شارة معينة؟`
      }

      if (queryLower.includes("مسابقات") || queryLower.includes("تحدي")) {
        const competitionsInfo = knowledgeBase.competitions.types
          .map((comp) => `${comp.name}: ${comp.description}`)
          .join("\n- ")

        return `نقدم مسابقات دورية مثل:
        - ${competitionsInfo}
        
        الجوائز تشمل: ${knowledgeBase.competitions.prizes.join("، ")}
        
        هل ترغب في معرفة المزيد عن المسابقات القادمة؟`
      }

      return `نظام الشارات والمسابقات لدينا يتيح للمذيعين كسب شارات تقديرية ومكافآت قيمة.
      لدينا ${knowledgeBase.badges.types.length} أنواع من الشارات للإنجازات والعضويات.
      كما نقدم مسابقات دورية مثل ${knowledgeBase.competitions.types.map((c) => c.name).join(" و")}.
      
      هل ترغب في معرفة المزيد عن الشارات أو المسابقات؟`
    }

    // التحقق من الاستفسارات المتعلقة بالتسجيل والانضمام
    if (
      queryLower.includes("تسجيل") ||
      queryLower.includes("حساب") ||
      queryLower.includes("انضمام") ||
      queryLower.includes("اشتراك") ||
      queryLower.includes("عضوية")
    ) {
      if (queryLower.includes("عضوية")) {
        return `نقدم نوعين من العضويات:
        1. ${knowledgeBase.membership.basic.name}: ${knowledgeBase.membership.basic.target}
        2. ${knowledgeBase.membership.premium.name}: ${knowledgeBase.membership.premium.target} مع ${knowledgeBase.membership.premium.features.join(" و")}
        
        هل ترغب في معرفة المزيد عن مزايا كل عضوية؟`
      }

      return `يمكنك التسجيل في وكالة خلك فخم بسهولة من خلال صفحة إنشاء حساب.
      خطوات التسجيل:
      1. إدخال رقم الهاتف وتلقي رمز التحقق عبر SMS
      2. تعبئة البيانات الشخصية (الاسم، تاريخ الميلاد، البريد الإلكتروني)
      3. إدخال كود الإحالة (اختياري)
      4. رفع صورة الهوية للمراجعة
      
      هل تحتاج مساعدة في عملية التسجيل؟`
    }

    // التحقق من الاستفسارات المتعلقة بالتواصل والدعم
    if (
      queryLower.includes("تواصل") ||
      queryLower.includes("اتصال") ||
      queryLower.includes("دعم") ||
      queryLower.includes("مشرف") ||
      queryLower.includes("مشرفة") ||
      queryLower.includes("وكيل") ||
      queryLower.includes("واتساب") ||
      queryLower.includes("whatsapp")
    ) {
      if (queryLower.includes("مشرفة") || queryLower.includes("نسائية") || queryLower.includes("ميسو")) {
        return `يمكنك التواصل مع المشرفة النسائية (${knowledgeBase.contacts.femaleSupervisor.name}) عبر واتساب: ${knowledgeBase.contacts.femaleSupervisor.whatsapp}`
      }

      if (queryLower.includes("مشرف") || queryLower.includes("رجالي") || queryLower.includes("ابن الشيخ")) {
        return `يمكنك التواصل مع المشرف الرجالي (${knowledgeBase.contacts.maleSupervisor.name}) عبر واتساب: ${knowledgeBase.contacts.maleSupervisor.whatsapp}`
      }

      if (queryLower.includes("وكيل")) {
        return `يمكنك التواصل مع الوكيل عبر:
        - واتساب: ${knowledgeBase.contacts.agent.whatsapp}
        - البريد الإلكتروني: ${knowledgeBase.contacts.agent.email}`
      }

      return `يمكنك التواصل معنا عبر عدة قنوات:
      - المشرفة النسائية (${knowledgeBase.contacts.femaleSupervisor.name}): ${knowledgeBase.contacts.femaleSupervisor.whatsapp}
      - المشرف الرجالي (${knowledgeBase.contacts.maleSupervisor.name}): ${knowledgeBase.contacts.maleSupervisor.whatsapp}
      - الوكيل: ${knowledgeBase.contacts.agent.whatsapp}
      - البريد الإلكتروني: ${knowledgeBase.contacts.agent.email}
      
      فريق الدعم متاح على مدار الساعة لمساعدتك.`
    }

    // رد افتراضي إذا لم يتم التعرف على الاستفسار
    return `شكرًا لتواصلك معنا. يمكنني مساعدتك في العديد من الأمور المتعلقة بوكالة خلك فخم، مثل:
    - المنصات المدعومة (Super Live، Party Star، Popo Live)
    - الخدمات المالية (السحب، الإيداع، السلف)
    - نظام الشارات والمسابقات
    - كيفية الانضمام إلينا
    - التواصل مع فريق الدعم
    
    ما الذي ترغب في معرفة المزيد عنه؟`
  }

  const handleSend = async () => {
    if (input.trim() === "") return

    const userMessage: Message = {
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // استخدام نموذج خلك فخم AI لتحليل الاستفسار وإنشاء رد
      setTimeout(() => {
        const response = analyzeQuery(userMessage.content)

        const assistantMessage: Message = {
          role: "assistant",
          content: response,
        }
        setMessages((prev) => [...prev, assistantMessage])
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error("Error sending message:", error)
      setIsLoading(false)
    }
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 left-4 z-50">
        <Button onClick={() => setIsMinimized(false)} className="rounded-full h-14 w-14 shadow-lg">
          <Bot className="h-6 w-6" />
        </Button>
      </div>
    )
  }

  return (
    <div
      className={`fixed z-50 ${
        isFullScreen ? "inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm" : "bottom-4 left-4"
      }`}
    >
      <Card
        className={`${isFullScreen ? "w-full max-w-2xl h-[80vh]" : "w-full max-w-md"} flex flex-col shadow-xl`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="ai-chat-title"
        aria-describedby="ai-chat-description"
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle id="ai-chat-title" className="flex items-center gap-2">
            <Bot className="h-5 w-5" />
            مساعد خلك فخم الذكي
          </CardTitle>
          <p id="ai-chat-description" className="sr-only">
            نافذة محادثة مع مساعد خلك فخم الذكي. يمكنك طرح أسئلتك والحصول على إجابات فورية.
          </p>
          <div className="flex items-center gap-1">
            {isFullScreen ? (
              <Button variant="ghost" size="icon" onClick={() => setIsFullScreen(false)}>
                <Minimize2 className="h-4 w-4" />
              </Button>
            ) : (
              <Button variant="ghost" size="icon" onClick={() => setIsFullScreen(true)}>
                <Maximize2 className="h-4 w-4" />
              </Button>
            )}
            <Button variant="ghost" size="icon" onClick={() => setIsMinimized(true)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="flex-grow overflow-hidden p-4">
          <ScrollArea className="h-[350px] pr-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`flex items-start gap-2 max-w-[80%] ${
                      message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                    } rounded-lg p-3`}
                  >
                    {message.role === "assistant" && <Bot className="h-5 w-5 mt-1 shrink-0" />}
                    <div className="text-sm whitespace-pre-line">{message.content}</div>
                    {message.role === "user" && <User className="h-5 w-5 mt-1 shrink-0" />}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 bg-muted rounded-lg p-3">
                    <Bot className="h-5 w-5" />
                    <div className="text-sm">جاري الكتابة...</div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            className="flex w-full items-center space-x-2 space-x-reverse"
          >
            <Input
              placeholder="اكتب رسالتك هنا..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
              className="flex-grow"
            />
            <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  )
}
