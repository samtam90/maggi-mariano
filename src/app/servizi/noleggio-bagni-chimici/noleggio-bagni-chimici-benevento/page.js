import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Benevento",
  canonical: links.servizi["noleggio-bagni-chimici"]["benevento"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Benevento",
  locationNames: { label: "Benevento", href: "benevento" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["benevento"],
      name: "Benevento",
  }),
});
