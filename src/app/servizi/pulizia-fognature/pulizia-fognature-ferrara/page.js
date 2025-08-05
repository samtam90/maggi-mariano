import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Ferrara",
  canonical: links.servizi["pulizia-fognature"]["ferrara"],
});
export default withBaseProps({
  title: "Pulizia fognature Ferrara",
  locationNames: { label: "Ferrara", href: "ferrara" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["ferrara"],
      name: "Ferrara",
  }),
});
