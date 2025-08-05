import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Rimini",
  canonical: links.servizi["noleggio-bagni-chimici"]["rimini"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Rimini",
  locationNames: { label: "Rimini", href: "rimini" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["rimini"],
      name: "Rimini",
  }),
});
