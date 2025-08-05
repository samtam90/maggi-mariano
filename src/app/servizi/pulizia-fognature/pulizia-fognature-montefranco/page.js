import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Montefranco",
  canonical: links.servizi["pulizia-fognature"]["montefranco"],
});
export default withBaseProps({
  title: "Pulizia fognature Montefranco",
  locationNames: { label: "Montefranco", href: "montefranco" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
