import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Polino",
  canonical: links.servizi["pulizia-fognature"]["polino"],
});
export default withBaseProps({
  title: "Pulizia fognature Polino",
  locationNames: { label: "Polino", href: "polino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
