import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Vicchio",
  canonical: links.servizi["pulizia-fognature"]["vicchio"],
});
export default withBaseProps({
  title: "Pulizia fognature Vicchio",
  locationNames: { label: "Vicchio", href: "vicchio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
