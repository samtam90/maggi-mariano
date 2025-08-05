import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Benevento",
  canonical: links.servizi["frantoio-mobile-inerti"]["benevento"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Benevento",
  locationNames: { label: "Benevento", href: "benevento" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["benevento"],
      name: "Benevento",
  }),
});
