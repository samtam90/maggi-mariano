import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Terranuova Bracciolini",
  canonical: links.servizi["frantoio-mobile-inerti"]["terranuova-bracciolini"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Terranuova Bracciolini",
  locationNames: { label: "Terranuova Bracciolini", href: "terranuova-bracciolini" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
