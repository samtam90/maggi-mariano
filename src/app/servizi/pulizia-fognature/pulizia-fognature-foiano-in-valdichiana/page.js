import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Foiano in Valdichiana",
  canonical: links.servizi["pulizia-fognature"]["foiano-in-valdichiana"],
});
export default withBaseProps({
  title: "Pulizia fognature Foiano in Valdichiana",
  locationNames: { label: "Foiano in Valdichiana", href: "foiano-in-valdichiana" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
