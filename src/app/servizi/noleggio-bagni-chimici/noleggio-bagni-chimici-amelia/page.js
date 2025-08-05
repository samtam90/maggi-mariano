import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Amelia",
  canonical: links.servizi["noleggio-bagni-chimici"]["amelia"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Amelia",
  locationNames: { label: "Amelia", href: "amelia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
