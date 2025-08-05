import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Matera",
  canonical: links.servizi["pulizia-fognature"]["matera"],
});
export default withBaseProps({
  title: "Pulizia fognature Matera",
  locationNames: { label: "Matera", href: "matera" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["matera"],
      name: "Matera",
  }),
});
