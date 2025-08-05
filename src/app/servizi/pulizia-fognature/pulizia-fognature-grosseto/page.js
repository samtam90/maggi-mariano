import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Grosseto",
  canonical: links.servizi["pulizia-fognature"]["grosseto"],
});
export default withBaseProps({
  title: "Pulizia fognature Grosseto",
  locationNames: { label: "Grosseto", href: "grosseto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["grosseto"],
      name: "Grosseto",
  }),
});
