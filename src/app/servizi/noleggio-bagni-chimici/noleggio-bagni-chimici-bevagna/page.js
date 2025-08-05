import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Bevagna",
  canonical: links.servizi["noleggio-bagni-chimici"]["bevagna"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Bevagna",
  locationNames: { label: "Bevagna", href: "bevagna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
