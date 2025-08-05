import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti San Gimignano",
  canonical: links.servizi["frantoio-mobile-inerti"]["san-gimignano"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti San Gimignano",
  locationNames: { label: "San Gimignano", href: "san-gimignano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
