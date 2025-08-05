import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Borgo San Lorenzo",
  canonical: links.servizi["noleggio-bagni-chimici"]["borgo-san-lorenzo"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Borgo San Lorenzo",
  locationNames: { label: "Borgo San Lorenzo", href: "borgo-san-lorenzo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
