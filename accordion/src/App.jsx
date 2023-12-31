import { useState } from 'react';

const faqs = [
  {
    title: 'Where are these chairs assembled?',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.'
  },
  {
    title: 'How long do I have to return my chair?',
    text:
      'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.'
  },
  {
    title: 'Do you ship to countries outside the EU?',
    text:
      'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!'
  }
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [isOpen, setIsOpen] = useState(null);

  function handleToggle(num) {
    setIsOpen((n) => (n === num ? null : num));
  }

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          onCurOpen={isOpen}
          onOpen={handleToggle}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, onCurOpen, onOpen, children }) {
  const isOpen = num === onCurOpen;

  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={() => onOpen(num)}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

