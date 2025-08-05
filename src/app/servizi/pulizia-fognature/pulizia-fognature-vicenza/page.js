import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Vicenza",
  canonical: links.servizi["pulizia-fognature"]["vicenza"],
});
export default withBaseProps({
  title: "Pulizia fognature Vicenza",
  locationNames: { label: "Vicenza", href: "vicenza" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["vicenza"],
      name: "Vicenza",
  }),
});
