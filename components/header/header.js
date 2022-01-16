import tw, { css } from 'twin.macro';

import Image from 'next/image';

export default function Header() {
  return (
    <div
      css={tw`flex px-10 py-2 bg-white h-24 items-center text-sm font-semibold text-gray-500`}
    >
      <div>
        <Image src={'/vercel.svg'} height={80} width={80} alt={'vercel logo'} />
      </div>
      <ul css={tw`flex list-none space-x-2`}>
        <li css={tw`cursor-pointer`}>Home</li>
        <li css={tw`cursor-pointer`}>Gallery</li>
        <li css={tw`cursor-pointer`}>Suites</li>
        <li css={tw`cursor-pointer`}>Accommodation</li>
        <li css={tw`cursor-pointer`}>Attractions</li>
        <li css={tw`cursor-pointer`}>Contact</li>
        <li css={tw`cursor-pointer`}>Location</li>
        <li css={tw`cursor-pointer`}>Tours</li>
      </ul>
      <div css={tw`flex items-center space-x-4 ml-auto`}>
        <div>English</div>
        <div>+30 21000000000000</div>
        <button
          css={tw`py-2 px-3 flex-none h-8 border-0 rounded-lg text-white uppercase`}
        >
          reserve
        </button>
      </div>
    </div>
  );
}
