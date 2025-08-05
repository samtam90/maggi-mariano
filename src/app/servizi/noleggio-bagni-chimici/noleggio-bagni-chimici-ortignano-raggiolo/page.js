import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Ortignano Raggiolo",
  canonical: links.servizi["noleggio-bagni-chimici"]["ortignano-raggiolo"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Ortignano Raggiolo",
  locationNames: { label: "Ortignano Raggiolo", href: "ortignano-raggiolo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
