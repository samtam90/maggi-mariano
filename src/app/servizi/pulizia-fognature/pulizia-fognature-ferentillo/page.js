import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Ferentillo",
  canonical: links.servizi["pulizia-fognature"]["ferentillo"],
});
export default withBaseProps({
  title: "Pulizia fognature Ferentillo",
  locationNames: { label: "Ferentillo", href: "ferentillo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
