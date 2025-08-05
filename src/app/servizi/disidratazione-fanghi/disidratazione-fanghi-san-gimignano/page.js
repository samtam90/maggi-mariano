import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi San Gimignano",
  canonical: links.servizi["disidratazione-fanghi"]["san-gimignano"],
});
export default withBaseProps({
  title: "Disidratazione fanghi San Gimignano",
  locationNames: { label: "San Gimignano", href: "san-gimignano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
