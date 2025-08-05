import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Anghiari",
  canonical: links.servizi["noleggio-bagni-chimici"]["anghiari"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Anghiari",
  locationNames: { label: "Anghiari", href: "anghiari" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
