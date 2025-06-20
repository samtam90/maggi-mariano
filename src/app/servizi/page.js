import { redirect } from "next/navigation";
import appConfig from "../../../app.config";

export default function Page() {
  return redirect(
    appConfig.links.servizi["centrifugazione-o-disidratazione-fanghi"]
  );
}
