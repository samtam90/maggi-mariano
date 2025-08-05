import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici San Gimignano",
  canonical: links.servizi["noleggio-bagni-chimici"]["san-gimignano"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici San Gimignano",
  locationNames: { label: "San Gimignano", href: "san-gimignano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
