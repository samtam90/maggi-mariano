import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Lucignano",
  canonical: links.servizi["noleggio-bagni-chimici"]["lucignano"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Lucignano",
  locationNames: { label: "Lucignano", href: "lucignano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
