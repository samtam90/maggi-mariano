import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Arezzo",
  canonical: links.servizi["noleggio-bagni-chimici"]["arezzo"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Arezzo",
  locationNames: { label: "Arezzo", href: "arezzo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
