import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Taranto",
  canonical: links.servizi["noleggio-bagni-chimici"]["taranto"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Taranto",
  locationNames: { label: "Taranto", href: "taranto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["taranto"],
      name: "Taranto",
  }),
});
