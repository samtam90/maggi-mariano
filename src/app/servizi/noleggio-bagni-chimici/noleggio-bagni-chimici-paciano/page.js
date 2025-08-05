import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Paciano",
  canonical: links.servizi["noleggio-bagni-chimici"]["paciano"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Paciano",
  locationNames: { label: "Paciano", href: "paciano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
