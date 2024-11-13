const Toast = () => {
  return (
    <div
      className="absolute bottom-0 right-0 flex w-[fit-content] max-w-xs items-center space-x-4 divide-x divide-gray-200 rounded-lg bg-white p-4 text-gray-500 shadow rtl:divide-x-reverse dark:divide-gray-700 dark:bg-gray-800 dark:text-gray-400"
      role="alert"
    >
      <div className="text-sm font-normal">Email was successly sent!</div>
    </div>
  );
};

export default Toast;
