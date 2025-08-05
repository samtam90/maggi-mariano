import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Monterchi",
  canonical: links.servizi["noleggio-bagni-chimici"]["monterchi"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Monterchi",
  locationNames: { label: "Monterchi", href: "monterchi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
