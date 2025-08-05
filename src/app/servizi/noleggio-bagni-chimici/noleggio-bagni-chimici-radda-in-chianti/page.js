import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Radda in Chianti",
  canonical: links.servizi["noleggio-bagni-chimici"]["radda-in-chianti"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Radda in Chianti",
  locationNames: { label: "Radda in Chianti", href: "radda-in-chianti" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
