import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Lucignano",
  canonical: links.servizi["frantoio-mobile-inerti"]["lucignano"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Lucignano",
  locationNames: { label: "Lucignano", href: "lucignano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
