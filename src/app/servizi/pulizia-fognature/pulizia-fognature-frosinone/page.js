import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Frosinone",
  canonical: links.servizi["pulizia-fognature"]["frosinone"],
});
export default withBaseProps({
  title: "Pulizia fognature Frosinone",
  locationNames: { label: "Frosinone", href: "frosinone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["frosinone"],
      name: "Frosinone",
  }),
});
