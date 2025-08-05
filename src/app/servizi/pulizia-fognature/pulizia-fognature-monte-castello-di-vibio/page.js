import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Monte Castello di Vibio",
  canonical: links.servizi["pulizia-fognature"]["monte-castello-di-vibio"],
});
export default withBaseProps({
  title: "Pulizia fognature Monte Castello di Vibio",
  locationNames: { label: "Monte Castello di Vibio", href: "monte-castello-di-vibio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
