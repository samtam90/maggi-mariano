import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Poppi",
  canonical: links.servizi["noleggio-bagni-chimici"]["poppi"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Poppi",
  locationNames: { label: "Poppi", href: "poppi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
