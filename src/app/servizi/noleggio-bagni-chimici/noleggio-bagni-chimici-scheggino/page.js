import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Scheggino",
  canonical: links.servizi["noleggio-bagni-chimici"]["scheggino"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Scheggino",
  locationNames: { label: "Scheggino", href: "scheggino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
