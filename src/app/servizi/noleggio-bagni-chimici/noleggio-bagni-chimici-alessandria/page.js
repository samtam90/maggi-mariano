import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Alessandria",
  canonical: links.servizi["noleggio-bagni-chimici"]["alessandria"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Alessandria",
  locationNames: { label: "Alessandria", href: "alessandria" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["alessandria"],
      name: "Alessandria",
  }),
});
