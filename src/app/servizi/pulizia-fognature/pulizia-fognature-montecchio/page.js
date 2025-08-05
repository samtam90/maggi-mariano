import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Montecchio",
  canonical: links.servizi["pulizia-fognature"]["montecchio"],
});
export default withBaseProps({
  title: "Pulizia fognature Montecchio",
  locationNames: { label: "Montecchio", href: "montecchio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
