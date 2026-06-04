export interface FAQItem {
  id: string
  question: string
  answer: string
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'pedidos-personalizados',
    question: '¿Realizan pedidos personalizados?',
    answer:
      'Sí, elaboramos tortas, postres y bandejas personalizadas para cumpleaños, eventos corporativos y celebraciones especiales. Contáctanos por WhatsApp para diseñar tu pedido.',
  },
  {
    id: 'anticipacion',
    question: '¿Con cuánto tiempo de anticipación debo realizar mi pedido?',
    answer:
      'Para productos del día a día no necesitas reservar. Para pedidos personalizados recomendamos entre 48 y 72 horas de anticipación, según la complejidad.',
  },
  {
    id: 'delivery',
    question: '¿Tienen delivery?',
    answer:
      'Sí, realizamos entregas en zonas seleccionadas de la ciudad. Consultanos disponibilidad, horarios y costo de envío al momento de tu pedido.',
  },
  {
    id: 'metodos-pago',
    question: '¿Qué métodos de pago aceptan?',
    answer:
      'Aceptamos efectivo, transferencia bancaria, tarjetas de débito y crédito, y pagos digitales. Te confirmamos las opciones disponibles al coordinar tu pedido.',
  },
]
