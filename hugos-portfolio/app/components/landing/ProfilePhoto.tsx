import Image from 'next/image'

export const ProfilePhoto = () => {
  return (
    <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden">
      <Image
        src="/hugo.png"
        alt="Hugo Ramalho"
        fill
        className="object-cover object-[center_15%]"
        priority
      />
    </div>
  )
}