import Button from "../../../UI/Button";
import SubOption from "./SubOption";

let sideNavIcons = [
  {
    id: "a1",
    svg: (
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        id="receipt"
      >
        <path d="M216,40H40A16.01833,16.01833,0,0,0,24,56V208a8,8,0,0,0,11.57812,7.15527L64,200.94434l28.42188,14.21093a8.00257,8.00257,0,0,0,7.15624,0L128,200.94434l28.42188,14.21093a8.00049,8.00049,0,0,0,7.15624,0L192,200.94434l28.42188,14.21093A8,8,0,0,0,232,208V56A16.01833,16.01833,0,0,0,216,40ZM180,144H76a8,8,0,0,1,0-16H180a8,8,0,0,1,0,16Zm0-32H76a8,8,0,0,1,0-16H180a8,8,0,0,1,0,16Z"></path>
      </svg>
    ),
    title: "Orders",
  },
  {
    id: "a2",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        version="1"
        id="heart"
      >
        <path d="M2.2 9.4c0 1.3.2 3.3 2 5.1 1.6 1.6 6.9 5.2 7.1 5.4.2.1.4.2.6.2s.4-.1.6-.2c.2-.2 5.5-3.7 7.1-5.4 1.8-1.8 2-3.8 2-5.1 0-3-2.4-5.4-5.4-5.4-1.6 0-3.2.9-4.2 2.3C11 4.9 9.4 4 7.6 4 4.7 4 2.2 6.4 2.2 9.4z"></path>
      </svg>
    ),
    title: "Favorites",
  },
  {
    id: "a3",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        id="wallet"
      >
        <path
          fill="#000"
          d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2h-4a3 3 0 1 0 0 6h4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"
        ></path>
        <path
          fill="#000"
          fillRule="evenodd"
          d="M15 12a2 2 0 0 1 2-2h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a2 2 0 0 1-2-2Zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    title: "Wallet",
  },
  {
    id: "a5",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 32 32"
        id="handbag"
      >
        <path d="M7.09 10.68a9 9 0 0 1 17.82 0A3.28 3.28 0 0 1 26 10.5a3.08 3.08 0 0 1 .91.13 11 11 0 0 0-21.82 0A3.08 3.08 0 0 1 6 10.5a3.28 3.28 0 0 1 1.09.18zM21.5 25.5v.5a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5v-.5H2a1.47 1.47 0 0 1-1-.39V30a1 1 0 0 0 1 1h28a1 1 0 0 0 1-1v-4.89a1.47 1.47 0 0 1-1 .39zM9 14a3 3 0 0 0-6 0v.5h6zm14 0v.5h6V14a3 3 0 0 0-6 0z"></path>
        <rect width="10" height="6" x="11" y="21" rx="1" ry="1"></rect>
        <path d="M30 15H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8.5v-3a1.5 1.5 0 0 1 1.5-1.5h8a1.5 1.5 0 0 1 1.5 1.5v3H30a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Z"></path>
      </svg>
    ),
    title: "Meal plan",
  },
  {
    id: "a6",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="help">
        <path fill="none" d="M0 0h24v24H0V0z"></path>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v2h-2zm1.61-9.96c-2.06-.3-3.88.97-4.43 2.79-.18.58.26 1.17.87 1.17h.2c.41 0 .74-.29.88-.67.32-.89 1.27-1.5 2.3-1.28.95.2 1.65 1.13 1.57 2.1-.1 1.34-1.62 1.63-2.45 2.88 0 .01-.01.01-.01.02-.01.02-.02.03-.03.05-.09.15-.18.32-.25.5-.01.03-.03.05-.04.08-.01.02-.01.04-.02.07-.12.34-.2.75-.2 1.25h2c0-.42.11-.77.28-1.07.02-.03.03-.06.05-.09.08-.14.18-.27.28-.39.01-.01.02-.03.03-.04.1-.12.21-.23.33-.34.96-.91 2.26-1.65 1.99-3.56-.24-1.74-1.61-3.21-3.35-3.47z"></path>
      </svg>
    ),
    title: "Help",
  },
  {
    id: "a7",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 48 48"
        id="deal"
      >
        <g data-name="hand recieve money">
          <path d="M45 7V4H42A3 3 0 0 0 45 7zM15 17v3h3A3 3 0 0 0 15 17zM18 4H15V7A3 3 0 0 0 18 4z"></path>
          <circle cx="30" cy="12" r="3"></circle>
          <path d="M20 20H40a5 5 0 0 1 5-5V9a5 5 0 0 1-5-5H20a5 5 0 0 1-5 5v6A5 5 0 0 1 20 20zm18.29-8.71A1 1 0 0 1 40 12a1 1 0 1 1-1.71-.71zM30 7a5 5 0 1 1-5 5A5 5 0 0 1 30 7zm-9.71 4.29A1 1 0 0 1 22 12a1 1 0 1 1-1.71-.71zM45 20V17a3 3 0 0 0-3 3z"></path>
          <rect width="6" height="17" x="1" y="24"></rect>
          <path d="M46.67,30.63a3,3,0,0,0-4-1.3L31.4,35.07c-1.43,2.23-3.76,3.67-6.11,2.54L17.4,33.9a1,1,0,0,1,.86-1.8c8.59,4,8.07,3.88,8.74,3.9,2.37.11,3.87-3.57,1.28-4.72C14.16,24.65,16.16,24.86,9,25.75V39a6.63,6.63,0,0,1,3.18.54c14.56,6.61,10.46,6.75,33.19-4.87A3,3,0,0,0,46.67,30.63Z"></path>
        </g>
      </svg>
    ),
    title: "Promotions",
  },
  {
    id: "a8",
    svg: (
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 3.51221C5.50442 4.74772 3 8.08143 3 12.0001C3 16.9707 7.02944 21.0001 12 21.0001C16.9706 21.0001 21 16.9707 21 12.0001C21 8.08143 18.4956 4.74772 15 3.51221"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Uber One",
    description: "Get $0 Delivery Fees and more",
  },
  {
    id: "a4",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        id="gift"
      >
        <g data-name="Layer 2">
          <path
            d="M4.64 15.27v4.82a.92.92 0 0 0 .92.91h5.62v-5.73zM12.82 21h5.62a.92.92 0 0 0 .92-.91v-4.82h-6.54zM20.1 7.09h-1.84a2.82 2.82 0 0 0 .29-1.23A2.87 2.87 0 0 0 15.68 3 4.21 4.21 0 0 0 12 5.57 4.21 4.21 0 0 0 8.32 3a2.87 2.87 0 0 0-2.87 2.86 2.82 2.82 0 0 0 .29 1.23H3.9c-.5 0-.9.59-.9 1.31v3.93c0 .72.4 1.31.9 1.31h7.28V7.09h1.64v6.55h7.28c.5 0 .9-.59.9-1.31V8.4c0-.72-.4-1.31-.9-1.31zm-11.78 0a1.23 1.23 0 1 1 0-2.45c1.4 0 2.19 1.44 2.58 2.45zm7.36 0H13.1c.39-1 1.18-2.45 2.58-2.45a1.23 1.23 0 1 1 0 2.45z"
            data-name="gift"
          ></path>
        </g>
      </svg>
    ),
    title: "Invite Friends",
    description: "You get $20 off",
  },
];

const Options = () => {
  return (
    <div className="flex flex-col justify-start gap-7 text-lg my-6 pl-6 pt-2 max-w-[300px]">
      {sideNavIcons.map((item) => (
        <SubOption
          key={item.id}
          icon={item.svg}
          title={item.title}
          description={item.description}
        />
      ))}

      <Button className="self-start text-gray-400">Sign out</Button>
    </div>
  );
};

export default Options;
