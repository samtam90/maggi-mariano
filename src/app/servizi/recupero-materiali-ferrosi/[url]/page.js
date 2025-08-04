import { redirect } from "next/navigation";
import { links } from "../../../../../app.config";

export default function Page() {
  return redirect(links.servizi["recupero-materiali-ferrosi"]);
}
