import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Modena",
  canonical: links.servizi["pulizia-fognature"]["modena"],
});
export default withBaseProps({
  title: "Pulizia fognature Modena",
  locationNames: { label: "Modena", href: "modena" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["modena"],
      name: "Modena",
  }),
});
