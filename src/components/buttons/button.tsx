const Button = ({
  ctaText,
  ctaAction,
  className,
  type,
  disabled,
  loading,
}: {
  ctaText: string;
  ctaAction?: () => void;
  className: string;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
  loading?: boolean;
}) => {
  return (
    <button
      onClick={ctaAction}
      type={type}
      className={`outline-none p-4 font-bold flex items-center justify-center rounded-[13px] ${className}`}
      disabled={disabled}
    >
      {loading ? (
        <img src="/icons/loading-spinner.svg" className="animate-spin py-1 px-3" />
      ) : (
        ctaText
      )}
    </button>
  );
};

export default Button;
