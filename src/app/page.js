import { Banner, Categories, NewArrivals } from "@/sections";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <NewArrivals/>
      <Categories/>
    </div>
  );
}
