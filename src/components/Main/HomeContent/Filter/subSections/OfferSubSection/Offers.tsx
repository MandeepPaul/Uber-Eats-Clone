import SubOffer from "./SubOffers";

const OfferData = [
  {
    svg: (
      <svg
        width="22px"
        height="22px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 8H8.01M11.5858 4.58579L19.5858 12.5858C20.3668 13.3668 20.3668 14.6332 19.5858 15.4142L15.4142 19.5858C14.6332 20.3668 13.3668 20.3668 12.5858 19.5858L4.58579 11.5858C4.21071 11.2107 4 10.702 4 10.1716V6C4 4.89543 4.89543 4 6 4H10.1716C10.702 4 11.2107 4.21071 11.5858 4.58579Z"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Offers",
    className: "pt-2",
  },
  {
    svg: (
      <svg
        fill="#000000"
        width="22px"
        height="22px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22.838,1.455A1,1,0,0,0,22,1H16a1,1,0,0,0-.895.553L12,7.764,8.9,1.553A1,1,0,0,0,8,1H2a1,1,0,0,0-.914,1.406L5.739,12.889A6.937,6.937,0,0,0,5,16a7,7,0,0,0,14,0,6.937,6.937,0,0,0-.739-3.111L22.914,2.406A1,1,0,0,0,22.838,1.455ZM3.538,3H7.382l3.087,6.174A6.991,6.991,0,0,0,7.1,11.014ZM12,21a5,5,0,1,1,5-5A5.006,5.006,0,0,1,12,21Zm4.905-9.986a6.991,6.991,0,0,0-3.374-1.84L16.618,3h3.844ZM15,15.292l-1.667,1.375L13.854,19,12,17.667,10.146,19l.521-2.333L9,15.292,11,15l1-2,1,2Z" />
      </svg>
    ),
    title: "Best Overall",
  },
];

const Offers = () => {
  return (
    <>
      {OfferData.map((offer, index) => (
        <SubOffer key={index} {...offer} />
      ))}
    </>
  );
};

export default Offers;
