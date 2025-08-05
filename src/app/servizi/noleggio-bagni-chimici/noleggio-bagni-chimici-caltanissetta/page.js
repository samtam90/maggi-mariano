import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Caltanissetta",
  canonical: links.servizi["noleggio-bagni-chimici"]["caltanissetta"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Caltanissetta",
  locationNames: { label: "Caltanissetta", href: "caltanissetta" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["caltanissetta"],
      name: "Caltanissetta",
  }),
});
