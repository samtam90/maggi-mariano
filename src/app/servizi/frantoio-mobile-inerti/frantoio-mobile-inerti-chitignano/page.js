import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Chitignano",
  canonical: links.servizi["frantoio-mobile-inerti"]["chitignano"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Chitignano",
  locationNames: { label: "Chitignano", href: "chitignano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
