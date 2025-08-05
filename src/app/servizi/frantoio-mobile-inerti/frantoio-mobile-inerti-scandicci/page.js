import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Scandicci",
  canonical: links.servizi["frantoio-mobile-inerti"]["scandicci"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Scandicci",
  locationNames: { label: "Scandicci", href: "scandicci" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
