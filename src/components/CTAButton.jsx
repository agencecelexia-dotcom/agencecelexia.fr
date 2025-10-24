import { Link } from 'react-router-dom';

const CTAButton = ({ to, children, variant = 'primary', className = '', onClick }) => {
  const baseClasses = 'px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300';

  const variants = {
    primary: 'bg-primary-purple text-white hover:bg-purple-500 shadow-lg hover:shadow-xl',
    secondary: 'border-2 border-primary-purple text-primary-purple hover:bg-primary-purple hover:text-white',
    white: 'bg-white text-primary-purple hover:bg-gray-100',
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default CTAButton;
