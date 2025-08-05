import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Isernia",
  canonical: links.servizi["frantoio-mobile-inerti"]["isernia"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Isernia",
  locationNames: { label: "Isernia", href: "isernia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["isernia"],
      name: "Isernia",
  }),
});
