import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Sant'Anatolia di Narco",
  canonical: links.servizi["pulizia-fognature"]["sant-anatolia-di-narco"],
});
export default withBaseProps({
  title: "Pulizia fognature Sant'Anatolia di Narco",
  locationNames: { label: "Sant'Anatolia di Narco", href: "sant-anatolia-di-narco" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
