import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Cagliari",
  canonical: links.servizi["frantoio-mobile-inerti"]["cagliari"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Cagliari",
  locationNames: { label: "Cagliari", href: "cagliari" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["cagliari"],
      name: "Cagliari",
  }),
});
