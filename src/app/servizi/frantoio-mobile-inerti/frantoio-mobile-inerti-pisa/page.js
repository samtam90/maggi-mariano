import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Pisa",
  canonical: links.servizi["frantoio-mobile-inerti"]["pisa"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Pisa",
  locationNames: { label: "Pisa", href: "pisa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["pisa"],
      name: "Pisa",
  }),
});
