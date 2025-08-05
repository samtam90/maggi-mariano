import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Panicale",
  canonical: links.servizi["pulizia-fognature"]["panicale"],
});
export default withBaseProps({
  title: "Pulizia fognature Panicale",
  locationNames: { label: "Panicale", href: "panicale" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
