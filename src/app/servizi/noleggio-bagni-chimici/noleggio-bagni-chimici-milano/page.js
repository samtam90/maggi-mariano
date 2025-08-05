import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Milano",
  canonical: links.servizi["noleggio-bagni-chimici"]["milano"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Milano",
  locationNames: { label: "Milano", href: "milano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["milano"],
      name: "Milano",
  }),
});
