import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Scandicci",
  canonical: links.servizi["pulizia-fognature"]["scandicci"],
});
export default withBaseProps({
  title: "Pulizia fognature Scandicci",
  locationNames: { label: "Scandicci", href: "scandicci" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
