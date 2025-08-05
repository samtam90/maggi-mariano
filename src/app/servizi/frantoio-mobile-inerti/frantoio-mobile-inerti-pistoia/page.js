import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Pistoia",
  canonical: links.servizi["frantoio-mobile-inerti"]["pistoia"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Pistoia",
  locationNames: { label: "Pistoia", href: "pistoia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["pistoia"],
      name: "Pistoia",
  }),
});
