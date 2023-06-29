import { Rampart_One } from "next/font/google";

const RampartOneFont = Rampart_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="text-4xl">
      <div className={RampartOneFont.className}>人類社会のすべての構成員の固有の尊厳と平等で譲ることのできない権利とを承認することは</div>
    </main>
  )
}