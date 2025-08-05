import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Cesa in valdichiana",
  canonical: links.servizi["pulizia-fognature"]["cesa-in-valdichiana"],
});
export default withBaseProps({
  title: "Pulizia fognature Cesa in valdichiana",
  locationNames: { label: "Cesa in valdichiana", href: "cesa-in-valdichiana" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
