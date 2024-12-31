const toggleMode = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    <Shadow className="hidden"></Shadow>;
    <Show className="block"></Show>;
  } else {
    document.documentElement.classList.add("dark");
    <Show className="block"></Show>;
    <Shadow className="hidden"></Shadow>;
  }
};

export const Show = () => {
  return (
    <div className="flex content-center hidden dark:block" onClick={toggleMode}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 9C16.8065 10.1935 16.136 11.8122 16.136 13.5C16.136 15.1878 16.8065 16.8065 18 18C19.1935 19.1935 20.8122 19.864 22.5 19.864C24.1878 19.864 25.8065 19.1935 27 18C27 19.78 26.4722 21.5201 25.4832 23.0001C24.4943 24.4802 23.0887 25.6337 21.4442 26.3149C19.7996 26.9961 17.99 27.1743 16.2442 26.8271C14.4984 26.4798 12.8947 25.6226 11.636 24.364C10.3774 23.1053 9.5202 21.5016 9.17294 19.7558C8.82567 18.01 9.0039 16.2004 9.68509 14.5558C10.3663 12.9113 11.5198 11.5057 12.9999 10.5168C14.4799 9.52784 16.22 9 18 9Z"
          stroke="#D1D5DB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25 9V13"
          stroke="#D1D5DB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M27 11H23"
          stroke="#D1D5DB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export const Shadow = () => {
  return (
    <div
      className="flex content-center items-center dark:hidden"
      onClick={toggleMode}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
          stroke="#4B5563"
          strokeWinecap="2"
          strokeLinecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 2V4"
          stroke="#4B5563"
          strokeWinecap="2"
          strokeLinecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 20V22"
          stroke="#4B5563"
          strokeWinecap="2"
          strokeLinecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.92993 4.92969L6.33993 6.33969"
          stroke="#4B5563"
          strokeWinecap="2"
          strokeLinecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.6599 17.6602L19.0699 19.0702"
          stroke="#4B5563"
          strokeWinecap="2"
          strokeLinecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2 12H4"
          stroke="#4B5563"
          strokeWinecap="2"
          strokeLinecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20 12H22"
          stroke="#4B5563"
          strokeWinecap="2"
          strokeLinecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.33993 17.6602L4.92993 19.0702"
          stroke="#4B5563"
          strokeWinecap="2"
          strokeLinecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.0699 4.92969L17.6599 6.33969"
          stroke="#4B5563"
          strokeWinecap="2"
          strokeLinecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};
