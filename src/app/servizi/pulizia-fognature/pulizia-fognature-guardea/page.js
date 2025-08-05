import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Guardea",
  canonical: links.servizi["pulizia-fognature"]["guardea"],
});
export default withBaseProps({
  title: "Pulizia fognature Guardea",
  locationNames: { label: "Guardea", href: "guardea" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
