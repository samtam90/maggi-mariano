import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Firenze",
  canonical: links.servizi["pulizia-fognature"]["firenze"],
});
export default withBaseProps({
  title: "Pulizia fognature Firenze",
  locationNames: { label: "Firenze", href: "firenze" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
