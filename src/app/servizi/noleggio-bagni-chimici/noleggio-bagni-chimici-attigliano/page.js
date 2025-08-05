import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Attigliano",
  canonical: links.servizi["noleggio-bagni-chimici"]["attigliano"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Attigliano",
  locationNames: { label: "Attigliano", href: "attigliano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
