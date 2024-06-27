import clsx from "clsx"; // Импортируем библиотеку clsx для условного объединения классов

/**
 * Компонент кнопки UI.
 * @param {Object} props - Свойства компонента.
 * @param {string} [props.className] - Дополнительные CSS классы для кнопки.
 * @param {React.ReactNode} props.children - Дочерние элементы, отображаемые внутри кнопки.
 * @param {'md' | 'lg'} [props.size] - Размер кнопки. Допустимые значения: 'md', 'lg'.
 * @param {'primary' | 'outline'} [props.variant] - Вариант кнопки. Допустимые значения: 'primary', 'outline'.
 * @returns {JSX.Element} Элемент кнопки.
 */
export function UiButton({ className, children, size, variant }) {
  // Используем clsx для условного объединения классов
  const buttonClassName = clsx(
    "transition-colors", // Базовый класс для всех кнопок, добавляющий переход для изменения цвета
    className, // Дополнительный класс, который можно передать через пропс className
    {
      // Условное добавление классов в зависимости от пропса size
      md: "rounded px-6 py-2 text-sm leading-tight", // Классы для размера md
      lg: "rounded-lg px-5 py-2 text-2xl leading-tight", // Классы для размера lg
    }[size],
    {
      // Условное добавление классов в зависимости от пропса variant
      primary: "bg-teal-600 hover:bg-teal-500 text-white", // Классы для варианта primary
      outline: "border border-teal-600 text-teal-600 hover:bg-teal-50", // Классы для варианта outline
    }[variant],
  );

  // Возвращаем элемент кнопки с установленными классами и вложенными детьми
  return <button className={buttonClassName}>{children}</button>;
}
