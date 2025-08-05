import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Cesa in valdichiana",
  canonical: links.servizi["noleggio-bagni-chimici"]["cesa-in-valdichiana"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Cesa in valdichiana",
  locationNames: { label: "Cesa in valdichiana", href: "cesa-in-valdichiana" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
