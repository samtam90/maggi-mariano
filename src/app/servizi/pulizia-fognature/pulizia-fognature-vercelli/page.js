import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Vercelli",
  canonical: links.servizi["pulizia-fognature"]["vercelli"],
});
export default withBaseProps({
  title: "Pulizia fognature Vercelli",
  locationNames: { label: "Vercelli", href: "vercelli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["vercelli"],
      name: "Vercelli",
  }),
});
