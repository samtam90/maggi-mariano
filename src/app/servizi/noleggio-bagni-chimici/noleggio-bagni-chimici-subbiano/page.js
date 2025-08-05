import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Subbiano",
  canonical: links.servizi["noleggio-bagni-chimici"]["subbiano"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Subbiano",
  locationNames: { label: "Subbiano", href: "subbiano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
