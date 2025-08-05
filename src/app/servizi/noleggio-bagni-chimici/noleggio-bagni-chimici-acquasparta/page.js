import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Acquasparta",
  canonical: links.servizi["noleggio-bagni-chimici"]["acquasparta"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Acquasparta",
  locationNames: { label: "Acquasparta", href: "acquasparta" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
