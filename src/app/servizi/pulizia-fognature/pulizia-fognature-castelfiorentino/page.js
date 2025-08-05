import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Castelfiorentino",
  canonical: links.servizi["pulizia-fognature"]["castelfiorentino"],
});
export default withBaseProps({
  title: "Pulizia fognature Castelfiorentino",
  locationNames: { label: "Castelfiorentino", href: "castelfiorentino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
