import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Sestino",
  canonical: links.servizi["frantoio-mobile-inerti"]["sestino"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Sestino",
  locationNames: { label: "Sestino", href: "sestino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
