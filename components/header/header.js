import tw, { css } from 'twin.macro';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [overFlowActive, setOverFlowActive] = useState(false);
  const [overFlownLinks, setOverFlownLinks] = useState([]);
  const [overFlownItemCount, setOverFlownItemCount] = useState(0);
  const [dropDownActive, setDropDownActive] = useState(false);

  const linksRef = useRef();

  const onResize = () => {
    itemOverFlown(linksRef.current.scrollWidth - linksRef.current.offsetWidth);
    return setOverFlowActive(
      linksRef.current.offsetWidth < linksRef.current.scrollWidth
    );
  };

  const itemOverFlown = (offset) => {
    setOverFlownItemCount((offset / 40).toFixed(0));
    if (overFlownItemCount > 0) {
      setOverFlownLinks(navLinks.slice(-overFlownItemCount));
      console.log(overFlownLinks);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  });

  return (
    <div
      css={tw`flex px-4 py-2 bg-white h-24 items-center text-sm font-semibold text-gray-500`}
    >
      {overFlownLinks.length < 3 && (
        <div>
          <Image
            src={'/vercel.svg'}
            height={80}
            width={80}
            alt={'vercel logo'}
          />
        </div>
      )}
      <ul
        css={tw`flex list-none w-6/12 overflow-hidden space-x-2 `}
        ref={linksRef}
      >
        {navLinks.map((el) => (
          <li key={el} css={tw`cursor-pointer`}>
            {el}
          </li>
        ))}
      </ul>
      {overFlowActive && (
        <div css={tw`cursor-pointer flex flex-col relative ml-4`}>
          <span onClick={() => setDropDownActive(!dropDownActive)}>More</span>
          <ul
            css={tw`absolute flex flex-col list-none bg-gray-50 top-2 py-1 px-8`}
          >
            {dropDownActive &&
              overFlownLinks.map((el) => (
                <li key={el} css={tw`cursor-pointer`}>
                  {el}
                </li>
              ))}
          </ul>
        </div>
      )}
      {overFlownLinks.length < 3 && (
        <div css={tw`flex items-center space-x-4 ml-auto`}>
          <div>English</div>
          <div>+30 21000000000000</div>
          <button
            css={tw`py-2 px-3 flex-none h-8 border-0 rounded-lg text-white uppercase cursor-pointer`}
          >
            reserve
          </button>
        </div>
      )}
    </div>
  );
}

const navLinks = [
  'Home',
  'Gallery',
  'Suites',
  'Accommodation',
  'Attractions',
  'Contact',
  'Location',
  'Tours',
];
