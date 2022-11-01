export function Greetings({ lang, children }) {
  const response = () => {
    if (lang === 'en') {
      return 'Hello ';
    } else if (lang === 'de') {
      return 'Hallo ';
    } else if (lang === 'es') {
      return 'Hola ';
    } else if (lang === 'fr') {
      return 'Bonjour ';
    }
  };
  return (
    <div>
      <p>
        {response()} {children}
      </p>
    </div>
  );
}
