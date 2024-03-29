import * as api from "@/api/site";
import Search from "@/components/site/Search";
import { redirect } from "next/navigation";

type Props = {
  params: {
    id: string;
  }
}

const Page = async ({ params }: Props) => {
  const eventItem = await api.getEvent(parseInt(params.id))
  if (!eventItem || !eventItem.status) return redirect('/')

  return (
    <div className="text-center mx-auto max-w-lg p-5">
      <header>
        <h1 className="text-2xl text-yellow-400">Amigo Secreto</h1>
        <h2 className="text-3xl mt-5 mb-2">** {eventItem.title} **</h2>
        <p className="text-sm mb-5">** {eventItem.description} **</p>
      </header>

      <Search id={eventItem.id} />

      <footer className="mt-5 text-sm">Criado pela B7WEB</footer>
    </div>
  )
}

export default Page