import tw, { css } from 'twin.macro';
import Image from 'next/image';

export default function TopHeader() {
  return (
    <div css={tw`hidden md:flex justify-between lg:hidden px-4 py-2`}>
      <div css={tw``}>
        <Image src={'/vercel.svg'} height={80} width={80} alt={'vercel logo'} />
      </div>
      <div css={tw`flex items-center space-x-4 ml-auto`}>
        <div>English</div>
        <div>+30 21000000000000</div>
        <button
          css={tw`py-2 px-3 flex-none h-8 border-0 rounded-lg text-white uppercase cursor-pointer`}
        >
          reserve
        </button>
      </div>
    </div>
  );
}
