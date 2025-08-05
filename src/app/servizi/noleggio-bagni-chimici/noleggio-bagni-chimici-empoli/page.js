import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Empoli",
  canonical: links.servizi["noleggio-bagni-chimici"]["empoli"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Empoli",
  locationNames: { label: "Empoli", href: "empoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
