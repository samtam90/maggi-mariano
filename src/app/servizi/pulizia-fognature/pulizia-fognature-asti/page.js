import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Asti",
  canonical: links.servizi["pulizia-fognature"]["asti"],
});
export default withBaseProps({
  title: "Pulizia fognature Asti",
  locationNames: { label: "Asti", href: "asti" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["asti"],
      name: "Asti",
  }),
});
