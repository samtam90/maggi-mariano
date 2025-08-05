import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Giove",
  canonical: links.servizi["pulizia-fognature"]["giove"],
});
export default withBaseProps({
  title: "Pulizia fognature Giove",
  locationNames: { label: "Giove", href: "giove" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
