import CardMain from "@/components/CardMain";
import HighlightDisplay from "@/components/HighlightDisplay";
import { dummyData } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <div className="container min-h-screen grid md:grid-cols-2 lg:grid-cols-3 md:gap-4">
        {dummyData.map((data: DummyData, idx: number): any => (
          <CardMain key={idx} data={data} />
        ))}
      </div>
      <div className="container">
        <HighlightDisplay />
      </div>
    </>
  )
}
