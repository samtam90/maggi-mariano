import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Lucca",
  canonical: links.servizi["pulizia-fognature"]["lucca"],
});
export default withBaseProps({
  title: "Pulizia fognature Lucca",
  locationNames: { label: "Lucca", href: "lucca" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["lucca"],
      name: "Lucca",
  }),
});
