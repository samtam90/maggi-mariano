import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Talla",
  canonical: links.servizi["noleggio-bagni-chimici"]["talla"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Talla",
  locationNames: { label: "Talla", href: "talla" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
