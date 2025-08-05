import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Pienza",
  canonical: links.servizi["pulizia-fognature"]["pienza"],
});
export default withBaseProps({
  title: "Pulizia fognature Pienza",
  locationNames: { label: "Pienza", href: "pienza" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
