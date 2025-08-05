import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Citerna",
  canonical: links.servizi["pulizia-fognature"]["citerna"],
});
export default withBaseProps({
  title: "Pulizia fognature Citerna",
  locationNames: { label: "Citerna", href: "citerna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
