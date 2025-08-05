import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature San Gimignano",
  canonical: links.servizi["pulizia-fognature"]["san-gimignano"],
});
export default withBaseProps({
  title: "Pulizia fognature San Gimignano",
  locationNames: { label: "San Gimignano", href: "san-gimignano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
