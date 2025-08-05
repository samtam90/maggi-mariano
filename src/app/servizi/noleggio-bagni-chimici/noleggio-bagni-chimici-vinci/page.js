import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Vinci",
  canonical: links.servizi["noleggio-bagni-chimici"]["vinci"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Vinci",
  locationNames: { label: "Vinci", href: "vinci" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
