import { useState } from "react";

export default function Item({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className="bg-orange-400 mx-auto w-[80%] text-lg font-semibold py-5 space-y-6 px-5 rounded-lg shadow-lg mb-6">
      <h1
        className="cursor-pointer flex justify-between"
        onClick={() => handleIsOpen()}
      >
        {item.title}
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="transition-all duration-300"
          >
            <path d="M0 10h24v4h-24z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
          </svg>
        )}
      </h1>
      {isOpen && (
        <p className="duration-400 ease-linear">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </p>
      )}
    </div>
  );
}
