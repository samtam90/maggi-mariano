import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Lastra a Signa",
  canonical: links.servizi["noleggio-bagni-chimici"]["lastra-a-signa"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Lastra a Signa",
  locationNames: { label: "Lastra a Signa", href: "lastra-a-signa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
