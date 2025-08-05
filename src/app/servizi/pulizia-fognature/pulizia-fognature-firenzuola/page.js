import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Firenzuola",
  canonical: links.servizi["pulizia-fognature"]["firenzuola"],
});
export default withBaseProps({
  title: "Pulizia fognature Firenzuola",
  locationNames: { label: "Firenzuola", href: "firenzuola" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
