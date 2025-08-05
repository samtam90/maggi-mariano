import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Ragusa",
  canonical: links.servizi["pulizia-fognature"]["ragusa"],
});
export default withBaseProps({
  title: "Pulizia fognature Ragusa",
  locationNames: { label: "Ragusa", href: "ragusa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["ragusa"],
      name: "Ragusa",
  }),
});
