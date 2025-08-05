import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Arrone",
  canonical: links.servizi["pulizia-fognature"]["arrone"],
});
export default withBaseProps({
  title: "Pulizia fognature Arrone",
  locationNames: { label: "Arrone", href: "arrone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
