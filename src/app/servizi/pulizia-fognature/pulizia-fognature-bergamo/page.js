import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Bergamo",
  canonical: links.servizi["pulizia-fognature"]["bergamo"],
});
export default withBaseProps({
  title: "Pulizia fognature Bergamo",
  locationNames: { label: "Bergamo", href: "bergamo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["bergamo"],
      name: "Bergamo",
  }),
});
