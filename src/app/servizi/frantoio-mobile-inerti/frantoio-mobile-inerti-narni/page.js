import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Narni",
  canonical: links.servizi["frantoio-mobile-inerti"]["narni"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Narni",
  locationNames: { label: "Narni", href: "narni" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
