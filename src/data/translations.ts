export const translations = {
  ru: {
    hero: {
      subtitle: "Фронтенд-разработчик",
      title: "Ибодулло Исматов",
      description: "Разрабатываю сайты и веб-приложения для малого и среднего бизнеса. Занимаюсь дизайном, версткой и фронтенд-разработкой.",
      button: "Бесплатная консультация"
    },
    features: {
      title: "Со мной удобно работать",
      items: [
        {
          title: "По договору",
          text: "Предоставлю все документы для бухгалтерии: договоры, счета и акты. Работаю как ИП без НДС."
        },
        {
          title: "Точно в срок",
          text: "В договоре прописана моя ответственность за срок проекта. Если просрочу — плачу неустойку."
        },
        {
          title: "Ценник под вас",
          text: "Если у вас нетиповой проект, сделаю рассчет цены за работу и объясню, как складывается цена."
        },
        {
          title: "Промежуточные итоги",
          text: "Показываю работу поэтапно, а не в последий момент перед крайним сроком."
        },
        {
          title: "Хостинг и домен",
          text: "Если мы договорились о цене проекта, в неё входит всё: домен и хостинг на год + SSL сертификат."
        },
        {
          title: "Не брошу после сдачи",
          text: "Научу вас или вашего сотрудника пользоваться сайтом, запишу видео-инструкции."
        }
      ]
    },
    projects: {
      title: "Последние проекты",
      labels: {
        time: "Срок",
        cost: "Стоимость",
        feedback: "Отзыв клиента"
      },
      items: [
        {
          title: "Сайт строительной фирмы “Велстрой”",
          time: "4 рабочих дня",
          cost: "14 000 ₽",
          feedback: "Мне понравилось работать с Ибодулло, потому что он все время был на связи и предлагал свои решения, когда мы заходили в тупик с дизайном. Мне нужны были закрывающие документы для бухгалтерии, и он — тот редкий фрилансер, у которого с документами все в порядке"
        }
      ]
    },
    footer: {
      title: "Свяжитесь со мной",
      description: "Лучший способ связаться со мной — написать в Telegram. Обычно я отвечаю в течение часа.",
      tgButton: "Написать в Telegram",
      policy: "Политика конфиденциальности"
    }
  },
  en: {
    hero: {
      subtitle: "Frontend Developer",
      title: "Ibodullo Ismatov",
      description: "I develop websites and web applications for small and medium businesses. I provide design, layout, and frontend development.",
      button: "Free Consultation"
    },
    features: {
      title: "Easy to work with me",
      items: [
        {
          title: "Under Contract",
          text: "I provide all documents for accounting: contracts, invoices, and acts. I work as a sole proprietor."
        },
        {
          title: "On Time",
          text: "The contract specifies my responsibility for the project deadline. If I'm late, I pay a penalty."
        },
        {
          title: "Tailored Pricing",
          text: "If you have a non-standard project, I will calculate the price for the work and explain how the price is formed."
        },
        {
          title: "Intermediate Results",
          text: "I show the work in stages, not at the last moment before the deadline."
        },
        {
          title: "Hosting and Domain",
          text: "If we agreed on the project price, it includes everything: domain and hosting for a year + SSL certificate."
        },
        {
          title: "Support After Delivery",
          text: "I will teach you or your employee how to use the site, and record video instructions."
        }
      ]
    },
    projects: {
      title: "Latest Projects",
      labels: {
        time: "Timeline",
        cost: "Cost",
        feedback: "Client Feedback"
      },
      items: [
        {
          title: "Construction company website 'Velstroy'",
          time: "4 working days",
          cost: "$200",
          feedback: "I liked working with Ibodullo because he was always in touch and offered his solutions when we reached a dead end with the design. I needed closing documents for accounting, and he is that rare freelancer who has everything in order with documents."
        }
      ]
    },
    footer: {
      title: "Contact Me",
      description: "The best way to reach me is via Telegram. I usually reply within an hour.",
      tgButton: "Message on Telegram",
      policy: "Privacy Policy"
    }
  }
};

export type Language = 'ru' | 'en';
export type Translation = typeof translations.ru;